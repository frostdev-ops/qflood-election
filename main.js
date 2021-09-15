const { app, BrowserWindow } = require('electron')

 function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
    win.loadURL('http://localhost:3000')
  }

  function createErrorWindow (errmsg) {
    const errwin = new BrowserWindow({
      width: 400,
      height: 200
    })
    errwin.loadFile('./html/errwin.html')
  }

  app.whenReady().then(() => {
    if (process.platform.startsWith('win')) {
      console.log('You must have qbittorrent installed to continue!')
    }
    else if (process.platform == 'darwin') {
      console.log('Platfrom not supported!')
      const errwindow = createErrorWindow('Platform not supported!')
    }
    else if (process.platform == 'linux') {
      console.log('Platform supported!')
    }
    const win = createWindow();
    win.on('close', closeWindow())
  })

  function closeWindow () {
      win.closeWindow();
      system
      app.exit();
  }