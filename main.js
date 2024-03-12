// This file is created for antry point of Electron
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

// Creation of the mainWindow with specified WxH 
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // to load window in specified file instead of webPage
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, './build/index.html'),
      protocol: 'file:',
      slashes: true
    }));
    
    // mainWindow.on('closed', () => {
    //   mainWindow = null;
    // });
}


// to lunch application
app.on('ready',() => {
    // TODO CREATE MENU

    // Create window
    createWindow();
});

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