const { dialog, app, BrowserWindow } = require('electron');

// Creation of the mainWindow with specified WxH 
function reportHistoryWindow() {
    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval';"
            
        },
    });

    // to load window in specified file instead of webPage

    mainWindow.loadFile('reportHistory.html');

    mainWindow.webContents.openDevTools();
}

const template = [
  {
    label: 'Menu',
    submenu: [{label: 'Exit', click: async () => {app.quit();},},],
  },
  {
    label: 'Reports',
    submenu: [{label: 'Report History', click: async () => { 
        await app.whenReady().then(()=>{reportHistoryWindow()})
    },},],
  },
];

module.exports = template;
