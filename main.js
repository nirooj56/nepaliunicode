const {app, BrowserWindow} = require('electron')
var path = require('path')
const {ipcMain} = require('electron')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
	// Create the browser window.
	win = new BrowserWindow({
		width: 700,
		height: 500,
		resizable: false,
		fullscreen: false,
		backgroundColor: '#218eed',
		frame: false,
		icon: path.join(__dirname, '/assets/icons/png/64x64.png')
	})

	// and load the index.html of the app.
	win.loadURL(`file://${__dirname}/index.html`)

	// Open the DevTools.
	win.webContents.openDevTools()

	// Emitted when the window is closed.
	win.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		win = null
	})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Close-main-window closes the app once clicked on cross button
ipcMain.on('close-main-window', function () {
	app.quit();
});
// minimize-main-window minimizes the app on drawer once minimize button is clicked
ipcMain.on('minimize-main-window', function () {
	win.minimize();
});


//this creates the new browser window for help and about section
app.on('ready', () => {
	ipcMain.on('create-about-window', () => {
		let aboutWindow = new BrowserWindow({
			title: 'Unicode Converter | About',
			width: 400,
			height: 459,
			resizable: false,
			fullscreen: false,
			movable: true,
			alwaysOnTop: true,
			backgroundColor: '#218eed',
			frame: false,
		});
		aboutWindow.setMenu(null);
		aboutWindow.loadURL('file://' + __dirname + '/about.html');
		aboutWindow.show();
	});
	ipcMain.on('create-help-window', () => {
		let helpWindow = new BrowserWindow({
			title: 'Unicode Converter | Help',
			width: 550,
			height: 450,
			resizable: false,
			fullscreen: false,
			movable: true,
			alwaysOnTop: true,
			backgroundColor: '#218eed',
			frame: false,
		});
		helpWindow.setMenu(null);
		helpWindow.loadURL('file://' + __dirname + '/help.html');
		helpWindow.show();
	});
});


