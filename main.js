const { app, BrowserWindow } = require('electron/main')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1321,
    height: 940,
    minWidth: 1321,
    minHeight: 940,
    useContentSize: false,
    frame: false, // 去掉顶部标题栏

  })
  win.setMenu(null) // 去掉默认菜单
  win.loadURL('http://localhost:3000')

  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools({ mode: 'detach' });

  }
  // 注册快捷键 Ctrl+Shift+I 打开开发者工具
  win.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === 'i') {
      win.webContents.openDevTools({ mode: 'detach' });
    }
  });
}
// 开发模式下自动打开开发者工具

app.commandLine.appendSwitch('high-dpi-support', 'true');
app.commandLine.appendSwitch('force-device-scale-factor', '1');
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  console.log('window-all-closed')
  if (process.platform !== 'darwin') {
    app.quit()
  }
})