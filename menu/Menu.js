const { dialog, app, BrowserWindow, shell } = require('electron');

function reloadWindows(focusedWindow){
  if(focusedWindow){
    BrowserWindow.getAllWindows().forEach(wind =>{
      if(wind.id >=3){wind.close();}})}
    } 


function reportHistoryWindow(focusedWindow) {

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
    submenu: [{label: 'Exit', click: async (_,focusedWindow) => {app.quit();},},],
  },
  {
    label: 'Reports',
    submenu: [{label: 'Report History', click: async (_,focusedWindow) => { 
        await app.whenReady().then(()=>{reportHistoryWindow(focusedWindow)})
    },},],
  },
  {
    label: 'View',
    submenu: [{label: 'Reload', click: async (_,focusedWindow) => {reloadWindows(focusedWindow)},},
    {
      label: 'Developer Tools',
      click: (_,focusedWindow) =>{
        focusedWindow.toggleDevTools();
      }
    }
  ],
  },
  {
    label: 'Github',
    role: 'help',
    submenu: [{
      label: 'Github Repository',
      click: () => {
        // shell is used to open browser
        shell.openExternal('https://github.com/Dan88Hus/HDO_Download_Manager')
      }
    }]
  }
];

module.exports = template;
