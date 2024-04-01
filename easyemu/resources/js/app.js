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
  document.addEventListener("DOMContentLoaded", function() {
    // List of games with their corresponding system and ROM file names
    const games = [
      { system: "nes", rom: "mario.nes", label: "Super Mario Bros" },
      { system: "gba", rom: "Super Mario Advance 2.gba", label: "Super Mario Advance 2" },
      { system: "gb", rom: "pokemon.gb", label: "Pokemon Red" },
      // Add more games as needed
    ];

    // Create buttons for each game
    const gameButtonsContainer = document.getElementById("gameButtons");
    games.forEach(game => {
      const button = document.createElement("button");
      button.textContent = game.label;
      button.className = "bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";
      button.addEventListener("click", function() {
        launchGame(game.system, game.rom,game.label);
      });
      gameButtonsContainer.appendChild(button);
    });

    // Function to launch the game based on system and ROM file name
    async function launchGame(system, rom,name) {
        // Emulator configuration
        const EJS_core = system;
        const EJS_gameUrl = rom;
        const EJS_gameName = name;
        const EJS_pathtodata = 'data/'; // Path to the data directory

        var  rompath = 'roms/' + system + '/' + EJS_gameUrl;
        console.log(rompath);
        // let rawBin = new ArrayBuffer(1);
        // let view = new Uint8Array(rawBin);      
        // view[0] = 64; // Saves ASCII '@' to the binary file
        // let data = await Neutralino.filesystem.readBinaryFile(rompath);
        // romdata = new Uint8Array(data);
        // console.log('Binary content: ', view);

        const emulatorPageUrl = `/emu.html?core=${EJS_core}&game=${rompath}&pathtodata=${EJS_pathtodata}&gamename=${EJS_gameName}`;
        console.log(emulatorPageUrl);
        // get neutralino server url
        // window.location.href  = emulatorPageUrl;
          
        // Create the emulator page URL

        
      };
      
      
  });