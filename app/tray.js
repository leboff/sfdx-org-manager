import { BrowserWindow, Menu, Tray } from 'electron';
import { open } from './actions/orgs';

const path = require('path');
const { ipcMain } = require('electron');

export default class TrayBuilder {
  mainWindow: BrowserWindow;

  tray: Tray;

  orgs: any;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;

    ipcMain.on('orgs-updated', this.refreshMenu);
  }

  openItem = menuItem => open(menuItem.sublabel);

  buildMenuItems = orgs =>
    orgs.nonScratchOrgs.map(org => ({
      label: org.alias
        ? (org.isDefaultUsername ? '*' : '') + org.alias
        : org.username,
      sublabel: org.username,
      click: this.openItem
    }));

  refreshMenu = (ev, orgs) => {
    if (orgs.nonScratchOrgs && this.tray) {
      const menuItems = this.buildMenuItems(orgs);
      const contextMenu = Menu.buildFromTemplate(menuItems);
      this.tray.setContextMenu(contextMenu);
    }
  };

  buildTray() {
    const trayIcon = path.join(__dirname, 'includes', 'tray.png');
    this.tray = new Tray(trayIcon);
    this.tray.setToolTip('SFDX Org Manager');
  }
}
