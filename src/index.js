// eslint-disable-next-line import/no-extraneous-dependencies
import {
  app,
  BrowserWindow,
  dialog,
  ipcMain,
} from "electron";

import { join } from "path";

// eslint-disable-next-line global-require
// if (import("electron-squirrel-startup")) {
//   app.quit();
// }

let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile(join(__dirname, "index.html"));

  mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("toMain", async () => {
  // Do what you need to do with node.js
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ["openDirectory"],
  });

  mainWindow.webContents.send("fromMain", result);
});
