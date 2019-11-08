const electron = require('electron');
const url = require('url');
const path = require('path');

const{app, BrowserWindow, Menu} = electron;

let pprincipal;

app.on('ready', function(){
    pprincipal= new BrowserWindow({})

    pprincipal.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    const mainMenu = Menu.buildFromTemplate(menup);
    Menu.setApplicationMenu(mainMenu);

})

const menup = [{label:''}]