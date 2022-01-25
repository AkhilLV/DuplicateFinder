// eslint-disable-next-line import/no-extraneous-dependencies
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  send: (channel, data) => {
    const validChannels = ["getDirectoryPath", "getSearchResults", "deleteDuplicateImages"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, cb) => {
    const validChannels = ["directoryPath", "searchResults", "deletedDuplicates"];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => cb(...args));
    }
  },
});
