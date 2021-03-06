const {
  BrowserWindow,
  Menu,
  Tray,
  app,
  dialog,
  ipcMain,
} = require('electron');
const { resolve } = require('app-root-path');
const Store = require('electron-store');
const fs = require('fs-extra');
const nanoid = require('nanoid');
const path = require('path');
const sanitize = require("sanitize-filename");
const unusedFilename = require('unused-filename');
const fluent = require('fluent-ffmpeg');
const ffmpeg = require('ffmpeg-static');
console.log(ffmpeg.path);

// Config stuff
const config = new Store();
const configPath = path.dirname(config.path);
const audioPath = `${configPath}/Audio`;
if (!fs.existsSync(audioPath)) {
  fs.mkdirSync(audioPath);
}
const configRoot = config.get();
if (configRoot.cards !== undefined && configRoot.cards !== null && configRoot.cards.length > 0) {
  configRoot.clips = configRoot.cards;
  config.set(configRoot);
  config.delete('cards')
}
if (configRoot.clips === undefined) {
  configRoot.clips = [];
  config.set(configRoot);
}



function saveFiles(filePath) {
  if (filePath && filePath.length > 0) {
    const uid = nanoid(8);
    const fileName = path.basename(filePath);
    // const ext = path.extname(filePath);
    const fileNameNoExt = sanitize(fileName.substring(0, fileName.lastIndexOf('.')));
    const newPath = unusedFilename.sync(`${audioPath}/${fileName}`)
    const rd = fs.createReadStream(filePath);
    const wr = fs.createWriteStream(newPath);
    const element = {
      name: fileNameNoExt,
      path: newPath,
      rate: 1.00,
      uid,
      volume: 1.00,
    };
    configRoot.clips.push(element);
    if (rd.pipe(wr)) {
      config.set(configRoot);
      win.webContents.send('config', configRoot);
    }
  }
}

function selectFile() {
  return dialog.showOpenDialog({
    filters: [{
      name: 'Audio',
      extensions: ['aif', 'flac', 'm4a', 'mp3', 'ogg', 'wav'],
    }],
    properties: ['openFile', 'multiSelections'],
  });
}

let win
let tray
app.on('ready', () => {
  win = new BrowserWindow({ show: false });
  win.loadFile(resolve('dist/index.html'));
  win.on('closed', () => {
    win = null;
  });

  tray = new Tray(`${__dirname}/assets/gravity.png`)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'open dev console',
      click() {
        win.openDevTools()
      }
    },
    {
      label: 'Quit app',
      click() {
        app.isQuiting = true
        app.quit()
      }
    }
  ])
  tray.setContextMenu(contextMenu)

  win.webContents.openDevTools();
  win.webContents.on('did-finish-load', () => {
    win.show();
    win.webContents.send('config', configRoot);
  });


  app.on('window-all-closed', () => {
    app.quit();
  });

  // setInterval(function () {
  //   win.webContents.send('config', configRoot);
  // }, 3000);

  ipcMain.on('refresh', () => {
    win.webContents.reloadIgnoringCache();
  });

  ipcMain.on('saveConfig', (event, configRoot) => {
    config.set(configRoot);
  });

  ipcMain.on('saveFiles', (event, arg) => {
    saveFiles(arg);
  });

  ipcMain.on('importFile', () => {
    const filePath = selectFile();
    saveFile(filePath);
  });

  ipcMain.on('quit', () => {
    app.quit();
  });
});
