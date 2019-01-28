import { BrowserWindow, Menu, Tray } from 'electron';
import { open } from './actions/orgs';

const path = require('path');
const { ipcMain } = require('electron');

export default class TrayBuilder {
  mainWindow: BrowserWindow;

  tray: Tray;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
    ipcMain.on('orgs-updated', this.refreshMenu);
  }

  openItem = menuItem => open(menuItem.sublabel);

  buildMenuItem = org => ({
    label: org.alias
      ? (org.isDefaultUsername ? '*' : '') + org.alias
      : org.username,
    sublabel: org.username,
    click: this.openItem
  });

  buildMenuItems = orgs => {
    let menuItems = [];

    menuItems.push({
      type: 'normal',
      label: 'Non-scratch Orgs',
      enabled: false
    });
    if (orgs.nonScratchOrgs) {
      menuItems = menuItems.concat(orgs.nonScratchOrgs.map(this.buildMenuItem));
    }

    menuItems.push({ type: 'separator' });
    menuItems.push({ type: 'normal', label: 'Scratch Orgs', enabled: false });
    if (orgs.nonScratchOrgs) {
      menuItems = menuItems.concat(orgs.scratchOrgs.map(this.buildMenuItem));
    }

    return menuItems;
  };

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
