import { app, BrowserWindow,  Menu, Tray  } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { enableLiveReload } from 'electron-compile';
import { openOrg, listOrgs } from './Org/OrgService';
import { createMethodSignature } from 'typescript';

const path = require('path');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 450,
    maxHeight: 450,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  if (isDevMode) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

const open = (menuItem) => {
  return openOrg(menuItem.sublabel);
}

const buildOrgMenuItems = async () => {
  return listOrgs()
  .then((orgs) => {
    return orgs.nonScratchOrgs.map((org) => {
      return {
        label: org.alias ? ((org.isDefaultUsername ? '*' : '') + org.alias) : org.username,
        sublabel: org.username,
        click: open
      }
    });
  });
}

let tray  = null;

const createMenu = () => {
  if(tray){
    buildOrgMenuItems()
    .then((menuItems) => {
      menuItems.push({
          label: 'Refresh',
          click: createMenu,
      });
      const contextMenu = Menu.buildFromTemplate(menuItems);
      tray.setContextMenu(contextMenu);
    });
  }
}

const createTray = async () => {
  var iconPath = path.join(__dirname, 'cloud.png');
  tray = new Tray(iconPath);
  tray.setToolTip('SFDX Org Manager');
  createMenu();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
app.on('ready', createTray);


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
