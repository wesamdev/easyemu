function launchGameFromURLParams() {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const core = urlParams.get('core');
    const gameUrl = urlParams.get('game');
    const pathtodata = urlParams.get('pathtodata');
    const biosUrl = urlParams.get('biosUrl');
    const lightgun = urlParams.get('lightgun');
    const gameName = urlParams.get('gamename');

    // if (!core || !gamedata || !pathtodata) {
    //     console.error('Missing required parameters.');
    //     return;
    // }

    // Emulator configuration
    const EJS_player = '#game';
    const EJS_core = core;
    const EJS_lightgun = lightgun === 'true'; // Convert to boolean
    const EJS_biosUrl = biosUrl || ''; // Use empty string if not provided
    const EJS_gameUrl = gameUrl;
    const EJS_pathtodata = pathtodata;
    const EJS_gameName = gameName;

    // roomdata
    // Directly execute the emulator configuration code
    const emulatorConfigScript = document.createElement("script");
    emulatorConfigScript.type = "text/javascript";
    emulatorConfigScript.innerHTML = `
        EJS_player = '${EJS_player}';
        EJS_core = '${EJS_core}';
        EJS_lightgun = ${EJS_lightgun};
        EJS_biosUrl = '${EJS_biosUrl}';
        EJS_gameUrl = '${EJS_gameUrl}';
        EJS_pathtodata = '${EJS_pathtodata}';
        EJS_startOnLoaded = true;
        EJS_gameName = '${EJS_gameName}'
    `;
    document.body.appendChild(emulatorConfigScript);
    
    // Create script element for loader.js
    const loaderScript = document.createElement("script");
    loaderScript.src = `${EJS_pathtodata}loader.js`;
    document.body.appendChild(loaderScript);

}

// Call the function when the page loads
launchGameFromURLParams();
