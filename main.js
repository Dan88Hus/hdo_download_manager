// This file is created for antry point of Electron
const {app, BrowserWindow} = require('electron');

// Creation of the mainWindow with specified WxH 
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // to load window in specified url
    mainWindow.loadURL(`http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`);
}

// to lunch application
app.on('ready',() => {
    // TODO CREATE MENU

    // Create window
    createWindow();
});