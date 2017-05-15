import { app, BrowserWindow } from 'electron';

let win = null

app.on('ready', () => {

	win = new BrowserWindow({
		width: 800,
		height: 600,
		show: true
	})

	win.loadURL(`file://${__dirname}/app/index.html`)

	win.on('closed', () => {
		win = null
	});

	// win.once('ready-to-show', () => {
	// 	win.show();
	// })
})

app.on('window-all-closed', () => {
	app.quit();
})


