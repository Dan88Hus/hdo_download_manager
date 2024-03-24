// This file is created for antry point of Electron
const {app, BrowserWindow, Menu, Tray} = require('electron');
const url = require('url');
const path = require('path');
const template = require('./menu/Menu');
const iconPng = path.join(__dirname,'public','favIcoPng256x256.png');
const iconFav = path.join(__dirname,'public','favicon.ico');



// Creation of the mainWindow with specified WxH 
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavascript: true,
            contextIsolation: false,
            webSecurity: true,
            enableRemoteModule: true,
            sandbox: false,
            contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval';"

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

        // for dev tools
        mainWindow.webContents.openDevTools();
}


// to lunch application with Menu
app.on('ready',() => {
    // Create Menu
    const menuTray = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menuTray);
    
    if(process.platform === 'win32'){
      tray = new Tray(iconFav);
      tray.setContextMenu(menuTray);
    }


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