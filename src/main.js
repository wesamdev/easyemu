// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  createFolders(); // Call createFolders when the app is ready
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

function createFolders() {
  const foldersToCreate = [
    "roms",
    "roms/nes",
    "roms/snes",
    "roms/gb",
    "roms/gba",
    "roms/psx",
    "roms/n64",
    "roms/3do",
    "roms/pce",
    "roms/pcfx",
    "roms/segaMD",
    "roms/segaGG",
    "roms/segaCD"
    // Add more folders as needed
  ];

  foldersToCreate.forEach(folderName => {
    try {
      fs.mkdirSync(path.join(__dirname, folderName), { recursive: true });
      console.log("Folder created:", folderName);
    } catch (error) {
      console.warn("Error creating folder:", folderName, error);
    }
  });

  createRomsJson(); // After creating folders, create the roms.json file
}

function createRomsJson() {
  const romsData = [
    { system: "nes", rom: "roms/nes/mario.nes", label: "Super Mario Bros" },
    { system: "gba", rom: "roms/gba/Super Mario Advance 2.gba", label: "Super Mario Advance 2" },
    { system: "gb", rom: "roms/gb/pokemon.gb", label: "Pokemon Red" },
    // Add more games as needed
  ];

  const romsJsonPath = path.join(__dirname, 'roms.json');

  fs.writeFile(romsJsonPath, JSON.stringify(romsData, null, 2), (err) => {
    if (err) {
      console.error("Error creating roms.json file:", err);
    } else {
      console.log("roms.json file created successfully.");
    }
  });
}

// Add ipcMain handler here if you need to communicate with the renderer process
