const { app, BrowserWindow } = require('electron/main')

const http = require('http');
const httpProxy = require('http-proxy');
let proxyServer;

function setupProxy() {
  
  proxyServer = httpProxy.createProxyServer({
    target: 'http://m.kugou.com',
    changeOrigin: true
  });

  proxyServer.on('error', (err, req, res) => {
    console.error('Proxy error:', err);
    if (res) {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ error: 'Proxy request failed' }));
    }
  });
}

function startProxyServer() {
  if (!proxyServer) {
    setupProxy();
  }

  const server = http.createServer((req, res) => {
    // 添加 CORS 头部
    const allowedOrigins = [
      'http://localhost:3000',
      'http://139.196.215.91'
    ];
    
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    // 设置其他 CORS 头部
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    // 处理预检请求
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    // Check if request path starts with /rank or /app
    if (req.url.startsWith('/rank') || req.url.startsWith('/app')) {
      // Forward to m.kugou.com
      proxyServer.web(req, res, {
        target: 'http://m.kugou.com'
      });
    } else {
      // Return 404 for other paths
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  });

  // Listen on a different port than your dev server
  server.listen(3001, () => {
    console.log('Proxy server listening on port 3001');
  });

  return server;
}
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1321,
    height: 940,
    minWidth: 1321,
    minHeight: 940,
    useContentSize: false,
    nodeIntegration: true,
    contextIsolation: false,
    frame: false, // 去掉顶部标题栏

  })
  win.setMenu(null) // 去掉默认菜单
  
  console.log(process.env)
  if(process.env.NODE_ENV === 'development'){
    win.loadURL('http://localhost:3000')
  } else {
    win.loadURL('http://139.196.215.91/music-app/index.html')
  }
  win.on('maximize', () => {
    win.webContents.send('refresh-no-drag');
  });
  win.on('unmaximize', () => {
    win.webContents.send('refresh-no-drag');
  });
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools({ mode: 'detach' });

  }
  // 注册快捷键 Ctrl+Shift+I 打开开发者工具
  win.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === 'i') {
      win.webContents.openDevTools({ mode: 'detach' });
    }
    if (input.key === 'F5') { // 监听F5按键
      win.reload();
      event.preventDefault();
    }
  });
}
// 开发模式下自动打开开发者工具

app.commandLine.appendSwitch('high-dpi-support', 'true');
app.commandLine.appendSwitch('force-device-scale-factor', '1');
app.whenReady().then(() => {
  createWindow()
const proxyServer = startProxyServer();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
// Clean up proxy server on app quit
  app.on('before-quit', () => {
    if (proxyServer) {
      proxyServer.close();
    }
  });
app.on('window-all-closed', () => {
  console.log('window-all-closed')
  if (process.platform !== 'darwin') {
    app.quit()
  }
})