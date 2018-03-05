import './api/server';
import {app, BrowserWindow} from 'electron';

let win;

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL('http://localhost:5000/');
  win.on('closed', () => {
    app.quit();
  });
}

app.on('ready', createWindow);
