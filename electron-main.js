const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    var win = new BrowserWindow({ width: 1200, height: 1000 })
    // win.loadURL(`file://${path.join(__dirname, '/app/build/index.html')}`)
    win.loadURL('http://localhost:3000/')
    win.webContents.openDevTools()
}

app.on('ready', createWindow)