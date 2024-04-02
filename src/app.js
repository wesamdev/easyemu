// app.js
document.addEventListener("DOMContentLoaded", function() {
    // Load ROM paths from a local JSON file
    const romPaths = require('./roms.json');
  
    // List of games with their corresponding system and ROM file names
    const games = [
      { system: "nes", rom: "mario.nes", label: "Super Mario Bros" },
      { system: "gba", rom: "Super Mario Advance 2.gba", label: "Super Mario Advance 2" },
      { system: "gb", rom: "pokemon.gb", label: "Pokemon Red" },
      // Add more games as needed
    ];
  
    // Create buttons for each game
    const gameButtonsContainer = document.getElementById("gameButtons");
    games.forEach((game, index) => {
      const button = document.createElement("button");
      button.textContent = game.label;
      button.className = "bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";
      button.addEventListener("click", function() {
        launchGame(game.system, romPaths[index].path, game.label);
      });
      gameButtonsContainer.appendChild(button);
    });
  
    // Function to launch the game based on system and ROM file name
    async function launchGame(system, romPath, name) {
      // Emulator configuration
      const EJS_core = system;
      const EJS_gameUrl = romPath;
      const EJS_gameName = name;
      const EJS_pathtodata = 'data/'; // Path to the data directory
  
      console.log(system);
      console.log(romPath);
  
      const emulatorPageUrl = `/emu.html?core=${EJS_core}&game=${EJS_gameUrl}&pathtodata=${EJS_pathtodata}&gamename=${EJS_gameName}`;
      console.log(emulatorPageUrl);
  
      window.location.href = emulatorPageUrl;
    };
  });
  