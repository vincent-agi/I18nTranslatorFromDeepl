const electron = require("electron");
const url = require("url");
const path = require("path");
const { on } = require("events");


const { app, BrowserWindow } = electron;

let mainWindow;

//Once app is ready

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        width: 1500,
        height: 1000,
        resizable: false
    });

    //load html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "/template/index.html"),
        protocol: "file:",
        slashes: true
    }))
})