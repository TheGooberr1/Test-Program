const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        resizable: true,
        frame: false,
        transparent: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadFile('public/index.html');
    win.maximize();  // Start maximized (fills the screen but not fullscreen)
}

app.whenReady().then(() => {
    createWindow();
});
