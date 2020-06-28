const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev');

function createWindow() {
    var win = new BrowserWindow({ width: 1200, height: 1000 })
    win.loadURL(isDev ? 'http://localhost:3000/' : `file://${path.join(__dirname, '/app/build/index.html')}`)
    // if (isDev) {
    //     win.webContents.openDevTools();
    // }
    win.on('closed', () => mainWindow = null);

}

app.on('ready', createWindow)