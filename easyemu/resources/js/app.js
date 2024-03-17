//app.js


document.addEventListener("DOMContentLoaded", function() {
    createFolders();
  
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
        "roms/segaCD",

        // Add more folders as needed
      ];
  
      foldersToCreate.forEach(folderName => {
        Neutralino.filesystem.createDirectory(folderName, (data) => {
          if (data.success) {
            console.log("Folder created:", folderName);
          } else {
            console.error("Error creating folder:", folderName, data.message);
          }
        });
      });
    }
  });
  