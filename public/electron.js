const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

const localUrl = 'http://localhost:3000';
const buildUrl = `file://${path.join(__dirname, 'index.html')}`;
const appUrl = isDev ? localUrl : buildUrl;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    minWidth: 600,
    autoHideMenuBar: true,
    webPreferences: {
      devTools: isDev
    }
  });
  mainWindow.loadURL(appUrl);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});