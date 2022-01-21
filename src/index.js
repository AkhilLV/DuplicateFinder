const {
  app,
  BrowserWindow,
  dialog,
  ipcMain,
// eslint-disable-next-line import/no-extraneous-dependencies
} = require("electron");

const { join } = require("path");

const ImageIndex = require("./classes/ImageIndex");

// eslint-disable-next-line global-require
if (require("electron-squirrel-startup")) {
  app.quit();
}

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

ipcMain.on("getDirectoryPath", async () => {
  const files = await dialog.showOpenDialog(mainWindow, { // files {cancelled, filePaths}
    properties: ["openDirectory"],
  });

  const directoryPath = files.filePaths[0];
  mainWindow.webContents.send("directoryPath", directoryPath);
});

ipcMain.on("getSearchResults", (event, directories) => {
  console.log(directories);
  const index = new ImageIndex(directories);

  mainWindow.webContents.send("searchResults", index.getDuplicateImages());
});
