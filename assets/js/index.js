const {remote, ipcRenderer} = require('electron');
function closeWindow() {
	ipcRenderer.send('close-main-window');
}
function minimizeWindow() {
	ipcRenderer.send('minimize-main-window');
}
function aboutWindow() {
	ipcRenderer.send('create-about-window');
}
function helpWindow() {
	ipcRenderer.send('create-help-window');
}