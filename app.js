
// info stuff on info.html
const playerData = {
    lab: localStorage.getItem("cartLab") || "Student",
    classmate: localStorage.getItem("classmateName") || "CART lab",
    teacher: localStorage.getItem("teacherName") || "Professor"
};





// gameplay down below for gameplay.html

// pokemon type colors???
const starterThemes = {
    fire: "#e74c3c",
    water: "#50caf6",
    grass: "#2ecc71",
    electric: "#ebd540",
    ground: "#876414",
    flying: "#d8fff8",
    dark: "#5a4a69",
    psychic: "#b98ee0",
    fairy: "#ffe0fd",
    dragon: "#4f82bc",
    normal: "#c9c9c9",
    fighting: "#e9a125",
    steel: "#777777",
    poison: "#8a139a",
    ice: "#86ffeb",
    ghost: "#a618ff",
    rock: "#44413d",
    bug: "#9dec42",
};


// pokemon stats for BATTLING MECHANIC (new and WIP)
const pokemonStats = {

    // starters
    Litten: { attack: 65, defense: 40, speed: 70 },
    Torracat: { attack: 85, defense: 50, speed: 90 },
    Incineroar: { attack: 115, defense: 90, speed: 60 },

    Froakie: { attack: 56, defense: 40, speed: 71 },
    Frogadier: { attack: 63, defense: 52, speed: 97 },
    Greninja: { attack: 95, defense: 67, speed: 122 },


    Treecko: { attack: 45, defense: 35, speed: 70 },
    Grovyle: { attack: 65, defense: 45, speed: 95 },
    Sceptile: { attack: 85, defense: 65, speed: 120 },





    // route 1 
    Espurr: { attack: 48, defense: 54, speed: 68 },
    Meowstic: { attack: 48, defense: 76, speed: 104 },

    Cubone: { attack: 50, defense: 95, speed: 35 },
    Marowak: { attack: 80, defense: 110, speed: 45 },

    Munchlax: { attack: 85, defense: 40, speed: 5 },
    Snorlax: { attack: 110, defense: 65, speed: 30 },

    // route 1 shuffle
    Joltik: { attack: 47, defense: 50, speed: 65 },
    Galvantula: { attack: 77, defense: 60, speed: 108 },

    Pancham: { attack: 82, defense: 62, speed: 43 },
    Pangoro: { attack: 124, defense: 78, speed: 58 },

    Vanillite: { attack: 50, defense: 50, speed: 44 },
    Vanillish: { attack: 65, defense: 65, speed: 59 },
    Vanilluxe: { attack: 95, defense: 85, speed: 79 },





    // route 2
    Togepi: { attack: 20, defense: 65, speed: 20 },
    Togetic: { attack: 40, defense: 85, speed: 40 },

    Pumpkaboo: { attack: 66, defense: 70, speed: 51 },
    Gourgeist: { attack: 90, defense: 122, speed: 84 },

    Nidoran: { attack: 57, defense: 40, speed: 50 },
    Nidorino: { attack: 72, defense: 57, speed: 65 },
    Nidoking: { attack: 102, defense: 77, speed: 85 },

    // route 2 shuffle
    Noibat: { attack: 30, defense: 35, speed: 55 },
    Noivern: { attack: 70, defense: 80, speed: 123 },

    Larvitar: { attack: 64, defense: 50, speed: 41 },
    Pupitar: { attack: 84, defense: 70, speed: 51 },
    Tyranitar: { attack: 134, defense: 110, speed: 61 },

    Riolu: { attack: 70, defense: 40, speed: 60 },
    Lucario: { attack: 110, defense: 70, speed: 90 },





    // route 3
    Krokorok: { attack: 82, defense: 45, speed: 74 },
    Krookodile: { attack: 117, defense: 80, speed: 92 },

    Lampent: { attack: 40, defense: 60, speed: 55 },
    Chandelure: { attack: 55, defense: 90, speed: 80 },

    Hawlucha: { attack: 92, defense: 75, speed: 118 },

    //route 3 shuffle
    Clefairy: { attack: 45, defense: 48, speed: 35 },
    Clefable: { attack: 70, defense: 73, speed: 60 },

    Scyther: { attack: 110, defense: 80, speed: 105 },
    Scizor: { attack: 130, defense: 100, speed: 65 },

    Buneary: { attack: 66, defense: 44, speed: 85 },
    Lopbunny: { attack: 76, defense: 84, speed: 105 },







    // route 4
    Larvesta: { attack: 85, defense: 55, speed: 60 },
    Volcarona: { attack: 60, defense: 65, speed: 100 },

    Mareep: { attack: 40, defense: 40, speed: 35 },
    Flaaffy: { attack: 55, defense: 55, speed: 45 },
    Ampharos: { attack: 75, defense: 85, speed: 55 },

    Gabite: { attack: 90, defense: 65, speed: 82 },
    Garchomp: { attack: 130, defense: 95, speed: 102 },

    // route 4 shuffle
    Gallade: { attack: 125, defense: 65, speed: 80 },

    Trevenant: { attack: 110, defense: 76, speed: 56 },

    Lycanroc: { attack: 115, defense: 65, speed: 112 },




    // route 5
    Solgaleo: { attack: 137, defense: 107, speed: 97 },

    Zygarde: { attack: 100, defense: 121, speed: 95 },

    Articuno: { attack: 85, defense: 100, speed: 85 },

    // route 5 shuffle
    Rayquaza: { attack: 150, defense: 90, speed: 95 },

    Lugia: { attack: 90, defense: 130, speed: 110 },

    Regirock: { attack: 100, defense: 200, speed: 50 },








    // rival/friend pokemon party
    Hariyama: { attack: 120, defense: 60, speed: 50 },
    Flareon: { attack: 130, defense: 60, speed: 65 },
    Venusaur: { attack: 82, defense: 83, speed: 80 },
    Emogla: { attack: 75, defense: 60, speed: 103 },
    Lurantis: { attack: 105, defense: 90, speed: 45 },
    Darkrai: { attack: 90, defense: 90, speed: 125 },






    // teacher/professor pokemon party
    Weavile: { attack: 120, defense: 65, speed: 125 },
    Altaria: { attack: 70, defense: 90, speed: 80 },
    Pinsir: { attack: 125, defense: 100, speed: 85 },
    Flygon: { attack: 100, defense: 80, speed: 100 },
    Wailord: { attack: 90, defense: 45, speed: 60 },
    Groudon: { attack: 150, defense: 140, speed: 90 },






    // your mom's pokemon party
    Dedenne: { attack: 58, defense: 57, speed: 101 },
    Sandslash: { attack: 100, defense: 110, speed: 65 },
    Meganium: { attack: 82, defense: 100, speed: 80 },
    Perisan: { attack: 70, defense: 60, speed: 115 },
    Espeon: { attack: 65, defense: 60, speed: 110 },
    Hoopa: { attack: 110, defense: 60, speed: 70 },

};


// pokemon evolution (seeing in this javascript is such a nightmare)
const evolutionMap = {
    // starter pick
    Litten: "Torracat",
    Torracat: "Incineroar",

    Froakie: "Frogadier",
    Frogadier: "Greninja",

    Treecko: "Grovyle",
    Grovyle: "Sceptile",


    // route 1
    Espurr: "Meowstic",


    Cubone: "Marowak",


    Munchlax: "Snorlax",


    // route 2
    Togepi: "Togetic",


    Pumpkaboo: "Gourgeist",


    Nidoran: "Nidorino",
    Nidorino: "Nidoking",


    // route 3
    Korkorok: "Krookodile",


    Lampent: "Chandelure",


    // route 4
    Larvesta: "Volcarona",


    Mareep: "Flaaffy",
    Flaaffy: "Ampharos",


    Gabite: "Garchomp",




    // random pokemon of doom and despair
    Joltik: "Galvantula",


    Pancham: "Pangoro",

    Vanillite: "Vanillish",
    Vanillish: "Vanilluxe",


    Noibat: "Noivern",


    Larvitar: "Pupitar",
    Pupitar: "Tyranitar",


    Riolu: "Lucario",


    Clefairy: "Clefable",


    Scyther: "Scizor",


    Buneary: "Lopbunny"
}


// shuffle deck mwahhaa but its only in testing mode :]
// this is so much pokemon naming pls send help for naylia shes dying
const routePokemonShuffle = {
    route1: [
        { name: "Espurr", type: "psychic", nextRoute: "kidScene1" },
        { name: "Cubone", type: "ground", nextRoute: "kidScene1" },
        { name: "Munchlax", type: "normal", nextRoute: "kidScene1" },
        { name: "Joltik", type: "bug", nextRoute: "kidScene1" },
        { name: "Pancham", type: "fighting", nextRoute: "kidScene1" },
        { name: "Vanillite", type: "ice", nextRoute: "kidScene1" }
    ],

    route2: [
        { name: "Togepi", type: "fairy", nextRoute: "grandmaScene1" },
        { name: "Pumpkaboo", type: "ghost", nextRoute: "grandmaScene1" },
        { name: "Nidoran", type: "poison", nextRoute: "grandmaScene1" },
        { name: "Noibat", type: "flying", nextRoute: "grandmaScene1" },
        { name: "Larvitar", type: "rock", nextRoute: "grandmaScene1" },
        { name: "Riolu", type: "fighting", nextRoute: "grandmaScene1" }
    ],

    route3: [
        { name: "Krokorok", type: "ground", nextRoute: "routefour1" },
        { name: "Lampent", type: "ghost", nextRoute: "routefour1" },
        { name: "Hawlucha", type: "fighting", nextRoute: "routefour1" },
        { name: "Clefairy", type: "fairy", nextRoute: "routefour1" },
        { name: "Scyther", type: "bug", nextRoute: "routefour1" },
        { name: "Buneary", type: "normal", nextRoute: "routefour1" }
    ],

    route4: [
        { name: "Larvesta", type: "fire", nextRoute: "routefive1" },
        { name: "Mareep", type: "electric", nextRoute: "routefive1" },
        { name: "Gabite", type: "dragon", nextRoute: "routefive1" },
        { name: "Gallade", type: "psychic", nextRoute: "routefive1" },
        { name: "Trevenant", type: "ghost", nextRoute: "routefive1" },
        { name: "Lycanroc", type: "rock", nextRoute: "routefive1" }
    ],

    route5: [
        { name: "Solgaleo", type: "steel", nextRoute: "wrapup" },
        { name: "Zygarde", type: "ground", nextRoute: "wrapup" },
        { name: "Articuno", type: "ice", nextRoute: "wrapup" },
        { name: "Rayquaza", type: "flying", nextRoute: "wrapup" },
        { name: "Lugia", type: "psychic", nextRoute: "wrapup" },
        { name: "Regirock", type: "rock", nextRoute: "wrapup" }
    ],
};

// this should shuffle the pokemon and thier type
function getShuffledRouteOptions(routeName) {
    const pool = [...routePokemonShuffle[routeName]];

    pool.sort(() => Math.random() - 0.5);

    return pool.slice(0, 3).map(pokemon => {
        return {
            text: pokemon.type,
            type: pokemon.type,
            action: () => {
                gameState.currentEncounter = pokemon.name;
                loadWildPokemonScene(pokemon, routeName);
            }
        };
    });
}

// this should load in the pokemon, kinda similar with the actions in the story scenes right now, except there variables now (?)
function loadWildPokemonScene(pokemon, routeName) {
    const sceneKey = `chosen${pokemon.name}`;

    scenes[sceneKey] = {
        dialogue: `A wild ${pokemon.name} has appeared! What will you do?`,
        img: `Pokemon images/${pokemon.name.toLowerCase()}.png`,
        background: bgEl.src,
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle(pokemon.name, pokemon.nextRoute, sceneKey);
                }
            },
            {
                text: "Run",
                action: () => {
                    const runSceneKey = `runFrom${pokemon.name}`;

                    if (scenes[runSceneKey]) {
                        currentScene = runSceneKey;
                        loadScene(currentScene);
                    } else { 
                        function runAway() {
                            // showBattleDialogue(`You ran away from ${gameState.battle.enemyPokemon}!`);
                            endBattle(gameState.battle.loseScene);
                        }
                        console.log(`Missing run scene: ${runSceneKey}`);
                    }
                }
            }
        ]
    };

    currentScene = sceneKey;
    loadScene(currentScene);
}


// dialogue battling stuff thingy magthingy
function showBattleDialogue(text, callback = null) {
    const battleUI = document.getElementById("battleUI");
    const battleOptions = document.getElementById("battleOptions");
    

    dialogueBox.style.display = "grid";
    dialogueEl.textContent = text;

    battleOptions.style.display = "none";



    battleUI.style.pointerEvents = "none";

    nextBtn.style.display = "block";

    nextBtn.onclick = () => {
        nextBtn.style.display = "none";

        if (callback) {
            callback();
        } else {
            dialogueBox.style.display = "none";

            battleUI.style.pointerEvents = "auto";
            battleOptions.style.display = "block";

            loadBattleOptions();
        }
    };
}





function setStarterTheme(type) {
    const color = starterThemes[type] || "white";
    document.documentElement.style.setProperty("--starter-color", color);
}


const gameState = {
    starter: null,
    party: [],
    currentEncounter: null
};


// battle gamestate (WIP)
gameState.battle = {
    playerHP: 4,
    enemyHP: 4,
    playerPokemon: null,
    enemyPokemon: null,

    activeIndex: 0,
    faintedPokemon: []
};




// battle end
function endBattle(nextScene) {
    const battleUI = document.getElementById("battleUI");
    const battleOptions = document.getElementById("battleOptions");

    battleUI.style.display = "none";
    battleUI.style.pointerEvents = "auto";
    battleOptions.style.display = "grid";

    dialogueBox.style.display = "block";

    currentScene = nextScene;
    loadScene(currentScene);
}





// battle turns
function handleBattleTurn(choice) {
    const turn = battleTurn(choice);

    showBattleDialogue(turn.result); //shows battle dialoge instead of making alert!


    document.getElementById("playerHealth").textContent =
        `Your HP: ${turn.playerHP}`;

    document.getElementById("enemyHealth").textContent =
        `Enemy HP: ${turn.enemyHP}`;

    const result = checkBattleEnd();

    if (result === "enemyFainted") {
        showBattleDialogue(
            `${gameState.battle.enemyPokemon} fainted! You won the battle!`,
            () => {
                const evolutionMessages = gainPartyExp();

                if (evolutionMessages.length > 0) {
                    showBattleDialogue(
                        evolutionMessages.join(" "),
                        () => {
                            endBattle(gameState.battle.winScene);
                        }
                    );
                } else {
                    endBattle(gameState.battle.winScene);
                }
            }
        );

        return;
    }

    if (result === "playerFainted") {
        gameState.battle.faintedPokemon.push(gameState.battle.playerPokemon);

        if (hasAvailablePokemon()) {
            showBattleDialogue(`${gameState.battle.playerPokemon} fainted! Choose another Pokemon.`);
            showSwitchOptions();
        } else {
            showBattleDialogue("All your Pokemon fainted!");
            endBattle(gameState.battle.loseScene);
        }
    }
}





// battle funtcions (WIP)
function loadBattleOptions() {

    const battleOptions = document.getElementById("battleOptions");

    battleOptions.style.display = "grid";

    const playerPokemon =
        pokemonStats[gameState.battle.playerPokemon];

    battleOptions.innerHTML = `

        <button onclick="handleBattleTurn('attack')">
            Attack (${playerPokemon.attack})
        </button>

        <button onclick="handleBattleTurn('defense')">
            Defense (${playerPokemon.defense})
        </button>

        <button onclick="handleBattleTurn('speed')">
            Speed (${playerPokemon.speed})
        </button>

        <button onclick="openBattleSwitchMenu()">
            Switch
        </button>

        <button onclick="catchPokemonAttempt()">
            Catch
        </button>

        <button onclick="runAway()">
            Run
        </button>
    `;

    document.getElementById("playerHealth").textContent =
        `Your HP: ${gameState.battle.playerHP}`;

    document.getElementById("enemyHealth").textContent =
        `Enemy HP: ${gameState.battle.enemyHP}`;



    document.getElementById("playerHealth").textContent =
        `${gameState.battle.playerPokemon} HP: ${gameState.battle.playerHP}`;

    document.getElementById("enemyHealth").textContent =
        `${gameState.battle.enemyPokemon} HP: ${gameState.battle.enemyHP}`;
}





// new battle system (WIP)
function startBattle(enemyName, winScene, loseScene) {
    gameState.battle.activeIndex = 0;
    gameState.battle.playerPokemon = gameState.party[gameState.battle.activeIndex].name;
    gameState.battle.faintedPokemon = [];
    gameState.battle.enemyPokemon = enemyName;

    gameState.battle.playerHP = 5;
    gameState.battle.enemyHP = 4;

    gameState.battle.winScene = winScene;
    gameState.battle.loseScene = loseScene;



    document.getElementById("battleUI").style.display = "block";

    document.getElementById("dialogueBox").style.display = "none";
    document.getElementById("options").style.display = "none";

    loadBattleOptions();
}

// enemy moves (attack, defense, speed randomizer with 33% idea)
function getEnemyMove() {
    const moves = ["attack", "defense", "speed"];
    const randomIndex = Math.floor(Math.random() * moves.length);

    return moves[randomIndex];
}






// pokemon party 
function addPokemonToParty(pokemonName) {
    if (gameState.party.length < 6) {
        gameState.party.push({
            name: pokemonName,
            exp: 0
        });

        updateInventory();
    }
}

// POKEMON EXP!!
function gainPartyExp() {
    let evolutionMessages = [];

    gameState.party.forEach(pokemon => {
        pokemon.exp += 50;

        if (pokemon.exp >= 100) {
            pokemon.exp = 0;
            pokemon.level++;

            if (evolutionMap[pokemon.name]) {
                const oldName = pokemon.name;
                pokemon.name = evolutionMap[pokemon.name];

                evolutionMessages.push(`${oldName} evolved into ${pokemon.name}!`);
            }
        }
    });

    updateInventory();

    return evolutionMessages;
}





// pokemon inventory update
function updateInventory() {
    const inventory = document.getElementById("pokemonInventory");
    inventory.innerHTML = "";

    gameState.party.forEach(pokemon => {
        const slot = document.createElement("div");
        slot.classList.add("pokemon-slot");

        slot.innerHTML = `
    <img class="inventory-pokemon-img" src="Pokemon images/${pokemon.name.toLowerCase()}.png">

    <div class="pokemon-info">
        <h3 class="pokemon-name">${pokemon.name}</h3>

        <div class="exp-bar">
            <div class="exp-fill"
                style="width:${pokemon.exp}%">
            </div>
        </div>

        <p class="exp-text">
            EXP: ${pokemon.exp}/100
        </p>
    </div>
`;

        inventory.appendChild(slot);
    });

    for (let i = gameState.party.length; i < 6; i++) {
        const emptySlot = document.createElement("div");
        emptySlot.classList.add("pokemon-slot");
        emptySlot.textContent = "Empty";
        inventory.appendChild(emptySlot);
    }
}






// battle system (WIP) battlign with stats
function battleTurn(playerChoice) {
    const enemyChoice = getEnemyMove();

    const playerPokemonName = gameState.battle.playerPokemon;
    const enemyPokemonName = gameState.battle.enemyPokemon;

    const playerPokemon = pokemonStats[playerPokemonName];
    const enemyPokemon = pokemonStats[enemyPokemonName];

    const playerStat = playerPokemon[playerChoice];
    const enemyStat = enemyPokemon[enemyChoice];

    let result = "";

    // randomness added
    const playerRoll = playerStat + Math.floor(Math.random() * 25);
    const enemyRoll = enemyStat + Math.floor(Math.random() * 25);

    if (playerRoll > enemyRoll) {
        gameState.battle.enemyHP--;

        result =
            `${playerPokemonName} used ${playerChoice} (${playerStat})! ` +
            `${enemyPokemonName} used ${enemyChoice} (${enemyStat})! ` +
            `You won the turn!`;
        console.log(`You and ${playerPokemonName} won because ${playerStat} > ${enemyStat}`);
    }

    else if (enemyRoll > playerRoll) {
        gameState.battle.playerHP--;

        result =
            `${enemyPokemonName} used ${enemyChoice} (${enemyStat})! ` +
            `${playerPokemonName} used ${playerChoice} (${playerStat})! ` +
            `You lost the turn!`;
        console.log(`The wild ${enemyPokemonName} won because ${enemyStat} > ${playerStat}`);

    }

    else {
        result = `Both Pokemon were evenly matched!`;
    }

    return {
        result,
        playerHP: gameState.battle.playerHP,
        enemyHP: gameState.battle.enemyHP
    };
}





// battle ending (WIP)
function checkBattleEnd() {
    if (gameState.battle.enemyHP <= 0) {
        return "enemyFainted";
    }

    if (gameState.battle.playerHP <= 0) {
        return "playerFainted";
    }

    return null;
}





// if the pokemon faints this function should help switch out pokemon?
function hasAvailablePokemon() {
    return gameState.party.some(pokemon => {
        return !gameState.battle.faintedPokemon.includes(pokemon);
    });
}


// lets player switch pokemon
function showSwitchOptions() {
    const battleOptions = document.getElementById("battleOptions");

    battleOptions.innerHTML = "<h3>Choose your next Pokemon:</h3>";

    gameState.party.forEach((pokemon, index) => {

        if (!gameState.battle.faintedPokemon.includes(pokemon.name)) {

            battleOptions.innerHTML += `
                <button onclick="switchPokemon(${index})">
                    ${pokemon.name}
                </button>
            `;
        }
    });
}





// opens pokemon party during battle
function openBattleSwitchMenu() {

    const battleOptions =
        document.getElementById("battleOptions");

    battleOptions.innerHTML =
        `<div class="switch-title">
            Choose a Pokemon
        </div>`;

    gameState.party.forEach((pokemon, index) => {

        if (
            gameState.battle.faintedPokemon.includes(pokemon.name)
        ) {
            return;
        }

        if (
            pokemon.name === gameState.battle.playerPokemon
        ) {
            return;
        }

        battleOptions.innerHTML += `
            <button 
                class="switch-pokemon-btn"
                onclick="switchPokemon(${index})"
            >
                ${pokemon.name}
            </button>
        `;
    });

    battleOptions.innerHTML += `
        <button 
            class="switch-back-btn"
            onclick="loadBattleOptions()"
        >
            Back
        </button>
    `;
}





// switches active pokemon
function switchPokemon(index) {

    gameState.battle.activeIndex = index;

    gameState.battle.playerPokemon = gameState.party[index].name;

    gameState.battle.playerHP = 4;

    showBattleDialogue(`Go, ${gameState.battle.playerPokemon}!`);

    loadBattleOptions();
}






// catching attempt if opponent pokemon's health bar is low = catch?
function catchPokemonAttempt() {
    const enemyHP = gameState.battle.enemyHP;

    let catchRate = 0.25;

    if (enemyHP <= 3) catchRate = 0.50;
    if (enemyHP <= 2) catchRate = 0.75;

    if (Math.random() < catchRate) {
        addPokemonToParty(gameState.battle.enemyPokemon);

        showBattleDialogue(
            `You attempt to catch ${gameState.battle.enemyPokemon}, and you successfully caught it!`,
            () => {
                const evolutionMessages = gainPartyExp();

                if (evolutionMessages.length > 0) {
                    showBattleDialogue(
                        evolutionMessages.join(" "),
                        () => {
                            endBattle(gameState.battle.winScene);
                        }
                    );
                } else {
                    endBattle(gameState.battle.winScene);
                }
            }
        );

        return;
    }
}


// make a new run feature instead of making it an "action"
function runAway() {
    // showBattleDialogue(`You ran away from ${gameState.battle.enemyPokemon}!`);
    endBattle(gameState.battle.loseScene);
}





















const scenes = {
    captured: {
        dialogue: () => `${gameState.starter} was caught!`,
        background: "Pokemon images/route1.png",
        next: "intro"
    },
    capturefailed: {
        dialogue: () => `${gameState.starter} escaped!`,
        background: "Pokemon images/route1.png",
        next: "routeOne1"
    },


    intro: {
        dialogue: `This is the day you get to pick your very own pokemon in the ${playerData.lab} region and start your very own adventure!`,
        background: "Pokemon images/bg1.png",
        next: "intro2"
    },

    intro2: {
        dialogue: `You make your way towards Professor ${playerData.teacher}s laboratory. This is where you choose your very first Pokemon.`,
        background: "Pokemon images/bg2.png",
        next: "intro3"
    },

    intro3: {
        dialogue: `You also meet your classmate ${playerData.classmate} at the lab, who is also starting their Pokemon journey as well. ${playerData.classmate} insists that you get the first pick.`,
        background: "Pokemon images/bg2.png",
        next: "starterOption"
    },

    starterOption: {
        dialogue: "Who will become your first Pokemon companion?",
        background: "Pokemon images/bg2.png",
        options: [
            {
                text: "Litten",
                type: "fire",
                img: "Pokemon images/litten.png",
                action: () => {
                    gameState.starter = "Litten";
                    addPokemonToParty("Litten");
                },
                next: "chosenStarter"
            },
            {
                text: "Froakie",
                type: "water",
                img: "Pokemon images/froakie.png",
                action: () => {
                    gameState.starter = "Froakie";
                    addPokemonToParty("Froakie");
                },
                next: "chosenStarter"
            },
            {
                text: "Treecko",
                type: "grass",
                img: "Pokemon images/treecko.png",
                action: () => {
                    gameState.starter = "Treecko";
                    addPokemonToParty("Treecko");
                },
                next: "chosenStarter"
            }
        ]
    },


    chosenStarter: {
        dialogue: () => `You chose a ...${gameState.starter}!`,
        background: "Pokemon images/bg2.png",
        next: "intro4"
    },
    intro4: {
        dialogue: () => `You picked ${gameState.starter}! Shortly after, ${playerData.classmate} picks theirs.`,
        background: "Pokemon images/bg2.png",
        next: "intro5"
    },
    intro5: {
        dialogue: () => `Before you both parted ways, ${playerData.teacher} informs you how survive in the wild.`,
        background: "Pokemon images/bg2.png",
        next: "intro6"
    },
    intro6: {
        dialogue: () => `"To view your pokemon party, it will be at the top right corner!"`,
        background: "Pokemon images/bg2.png",
        next: "intro7"
    },
    intro7: {
        dialogue: () => `"If you ever find yourself in a battle, you will be able to fight with your pokemon's stats: attack, defense, and speed."`,
        background: "Pokemon images/bg2.png",
        next: "intro8"
    },
    intro8: {
        dialogue: () => `"If the opponent pokemon's health is low, catch it or defeat it!"`,
        background: "Pokemon images/bg2.png",
        next: "intro9"
    },
    intro9: {
        dialogue: () => `You and ${playerData.classmate} thank ${playerData.teacher} before parting ways.`,
        background: "Pokemon images/bg2.png",
        next: "routeOne1"
    },


    //// NOTE: add a tutorial dialogue or info about how to play, add on when theres new mechanics!!


    //////MORE NOTE: storyline doesnt seem to have any other character interactions until the end, 
    // hopefully later in the future we can make more character dialogue between story so that way it doesnt feel repetitive!!








    //route 1!!!!
    routeOne1: {
        dialogue: "You reach route 1: Grassy Terrains. Its a large field with tall yellow patches of grass throughout the route.",
        background: "Pokemon images/route1.png",
        next: "routeOne2"
    },
    routeOne2: {
        dialogue: "You find three unique Pokemon, but you can't see them through all the tall grass!",
        background: "Pokemon images/route1.png",
        next: "routeOne3"
    },
    routeOne3: {
        dialogue: "You must investigate... Which Pokemon will you encounter?",
        background: "Pokemon images/route1fight.png",
        options: () => getShuffledRouteOptions("route1")

        // options: [ //THIS IS REMOVED FOR TESTING PURPOSES !!! :))))
        //     {
        //         text: "Psychic",
        //         type: "psychic",
        //         action: () => {
        //             currentScene = "chosenEspurr";
        //             loadScene(currentScene);
        //         },
        //     },
        //     {
        //         text: "Ground",
        //         type: "ground",
        //         action: () => {
        //             currentScene = "chosenCubone";
        //             loadScene(currentScene);
        //         },
        //     },
        //     {
        //         text: "Normal",
        //         type: "normal",
        //         action: () => {
        //             currentScene = "chosenMunchlax";
        //             loadScene(currentScene);
        //         },
        //     }
        // ]
    },

    //espurr option
    chosenEspurr: {
        dialogue: "A wild Espurr has appeared! What will you do?",
        img: "Pokemon images/espurr.png",
        background: "Pokemon images/route1fight.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Espurr", "routetwo1", "routeOne3");
                }

            },
            {
                text: "Run",
                next: "runFromEspurr"
            }
        ]


    },

    runFromEspurr: {
        dialogue: `You successfully ran away from Espurr... there were no consequences.`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routetwo1",
    },


    ///////////////////////////////////////////////////////////////////////////////////////////////// NOTE: battle and catch options were removed for battle system!!!


    // cubone option
    chosenCubone: {
        dialogue: "A wild Cubone has appeared! What will you do?",
        img: "Pokemon images/cubone.png",
        background: "Pokemon images/route1fight.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Cubone", "routetwo1", "chosenCubone");
                }

            },
            {
                text: "Run",
                next: "runFromCubone"
            }
        ]
    },

    runFromCubone: {
        dialogue: `Cubone got upset that you ran away... he threw his bone at you`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routetwo1",
    },

    // munchlax option
    chosenMunchlax: {
        dialogue: "A wild Munchlax has appeared! What will you do?",
        img: "Pokemon images/munchlax.png",
        background: "Pokemon images/route1fight.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Munchlax", "routetwo1", "chosenMunchlax");
                }

            },
            {
                text: "Run",
                next: "runFromMunchlax"
            }
        ]
    },
    runFromMunchlax: {
        dialogue: `You ran away from Munchlax... Munchlax is developing its villain arc now.`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routetwo1",
    },





























    //route 2!!!
    routetwo1: {
        dialogue: `You offically made it out of the Grassy Terrains, you have now arrived at route 2: Berry Woods.`,
        background: "Pokemon images/route2.png",
        next: "routetwo2",

    },

    routetwo2: {
        dialogue: `This area is a forest that's filled with many unique Pokemon. You and your Pokemon decide to rest for a while in this nice environment, so you sit underneath a tree and relax. `,
        background: "Pokemon images/route2.png",
        next: "routetwo3",
    },

    routetwo3: {
        dialogue: `Your rest comes to a stop, as you hear the bushes rustling close by.`,
        background: "Pokemon images/route2.png",
        next: "routetwo4",
    },

    routetwo4: {
        dialogue: `You notice that thre are three Pokemon in the bush, preparing to attack you! `,
        background: "Pokemon images/route2.png",
        next: "routetwo5",
    },

    routetwo5: {
        dialogue: `However, you can only fight one of them, so which would it be?`,
        background: "Pokemon images/route2enc.png",
        options: () => getShuffledRouteOptions("route2")

        // options: [ //THIS IS REMOVED/COMMENTED OFF FOR TESTING PURPOSES
        //     {
        //         text: "Fairy",
        //         type: "fairy",
        //         action: () => {
        //             currentScene = "chosenTogepi";
        //             loadScene(currentScene);
        //         },
        //     },
        //     {
        //         text: "Rock",
        //         type: "rock",
        //         action: () => {
        //             currentScene = "chosenPumpkaboo";
        //             loadScene(currentScene);
        //         },
        //     },
        //     {
        //         text: "Poison",
        //         type: "poison",
        //         action: () => {
        //             currentScene = "chosenNidoran";
        //             loadScene(currentScene);
        //         },
        //     }
        // ]
    },

    // togepi option
    chosenTogepi: {
        dialogue: "A wild Togepi has appeared! What will you do?",
        img: "Pokemon images/togepi.png",
        background: "Pokemon images/route2.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Togepi", "routethree1", "chosenTogepi");
                }

            },
            {
                text: "Run",
                next: "runFromTogepi"
            }
        ]
    },
    runFromTogepi: {
        dialogue: `Togepi successfully ran away from you...`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routethree1",
    },





    // Pumpkaboo option
    chosenPumpkaboo: {
        dialogue: "A wild Pumpkaboo has appeared! What will you do?",
        img: "Pokemon images/pumpkaboo.png",
        background: "Pokemon images/route2.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Pumpkaboo", "routethree1", "chosenPumpkaboo");
                }

            },
            {
                text: "Run",
                next: "runFromPumpkaboo"
            }
        ]
    },
    runFromPumpkaboo: {
        dialogue: `You ran away from Pumpkaboo? Pumpkaboo cried👎`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routethree1",
    },




    // Nidoran option
    chosenNidoran: {
        dialogue: "A wild Nidoran has appeared! What will you do?",
        img: "Pokemon images/nidoran.png",
        background: "Pokemon images/route2.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Nidoran", "routethree1", "chosenNidoran");
                }

            },
            {
                text: "Run",
                next: "runFromNidoran"
            }
        ]
    },
    runFromNidoran: {
        dialogue: `You ran away from Nidorino... it almost poisioned you as you ran!`,

        background: "Pokemon images/blackscreen.jpg",
        next: "routethree1",
    },

    grandmaLeave1: {
        dialogue: `You chose to leave Grandma! Sorry Gran, gotta continue my journey!`,
        img: "Pokemon images/CharGrandma.png",
        background: "Pokemon images/route2.png",
        next: "grandmaLeave2",
    },
    grandmaLeave2: {
        dialogue: `Grandma: "Aw... Okay..."`,
        img: "Pokemon images/CharGrandma.png",
        background: "Pokemon images/route2.png",
        next: "grandmaLeave3",
    },
    grandmaLeave3: {
        dialogue: `You now advance to route 4...`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routethree1",
    },
















    //route THREEEEEEEE!!!
    routethree1: {
        dialogue: `After a very intense battle you reach route 3: Flatlands.`,
        background: "Pokemon images/route3.png",
        next: "routethree2",

    },

    routethree2: {
        dialogue: `This route has a large green field that's next to a river. The sun is setting and you decided to set up camp for the night. The light sky finally fades. And you and your pokemon rest under the stars.`,
        background: "Pokemon images/route3.png",
        next: "routethree3",
    },

    routethree3: {
        dialogue: `suddenly, an unexpected rustling in the tall grass near you wakes you and your pokemon. `,
        background: "Pokemon images/route3.png",
        next: "routethree4",
    },

    routethree4: {
        dialogue: `It's hard to notice, but 3 pokemon are surrounding you, ready for a battle. But you could only battle one of them.`,
        background: "Pokemon images/route3.png",
        next: "routethree5",
    },

    routethree5: {
        dialogue: `Which one would you choose?`,
        background: "Pokemon images/route3.png",
        options: [
            {
                text: "Ground/Dark",
                type: "dark",
                action: () => {
                    currentScene = "chosenKrokorok";
                    loadScene(currentScene);
                },
            },
            {
                text: "Ghost/Fire",
                type: "ghost",
                action: () => {
                    currentScene = "chosenLampent";
                    loadScene(currentScene);
                },
            },
            {
                text: "Fighting/Flying",
                type: "fighting",
                action: () => {
                    currentScene = "chosenHawlucha";
                    loadScene(currentScene);
                },
            }
        ]
    },

    // Krokorok option
    chosenKrokorok: {
        dialogue: "A wild Krokorok has appeared! What will you do?",
        img: "Pokemon images/krokorok.png",
        background: "Pokemon images/route3.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Krokorok", "routefour1", "chosenKrokorok");
                }

            },
            {
                text: "Run",
                next: "runFromKrokorok"
            }
        ]
    },
    runFromKrokorok: {
        dialogue: `You ran away from Krokorok! It chased you across the Flatlands`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routefour1",
    },





    // Lampent option
    chosenLampent: {
        dialogue: "A wild Lampent has appeared! What will you do?",
        img: "Pokemon images/lampent.png",
        background: "Pokemon images/route3.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Lampent", "routefour1", "chosenLampent");
                }

            },
            {
                text: "Run",
                next: "runFromLampent"
            }
        ]
    },
    runFromLampent: {
        dialogue: `You ran away from Lampent! It tried to chase you but ultimately gave up!`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routefour1",
    },




    // Hawlucha option
    chosenHawlucha: {
        dialogue: "A wild Hawlucha has appeared! What will you do?",
        img: "Pokemon images/hawlucha.png",
        background: "Pokemon images/route3.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Hawlucha", "routefour1", "chosenHawlucha");
                }

            },
            {
                text: "Run",
                next: "runFromHawlucha"
            }
        ]
    },
    runFromHawlucha: {
        dialogue: `You ran away from Hawlucha before it could body slam you!`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routefour1",
    },












    // hiker scene!!!!
    hikerScene1: {
        dialogue: `???: "Hey! You there!"`,
        background: "Pokemon images/route3.png",
        next: "hikerScene2",
    },
    hikerScene2: {
        dialogue: `What the? Who's hiding in the tall grass? You can't tell who it is...`,
        background: "Pokemon images/route3.png",
        next: "hikerScene3",
    },
    hikerScene3: {
        dialogue: `Some Hiker Dude: "Hey kid! I need help with directions! Ya'know where Route 5 is?"`,
        img: "Pokemon images/CharHiker.png",
        background: "Pokemon images/route3.png",
        next: "hikerScene4",
    },
    hikerScene4: {
        dialogue: `Should you tell this guy the directions?`,
        img: "Pokemon images/CharHiker.png",
        background: "Pokemon images/route3.png",
        
        next: "hikerScene5",
    },























    // congrafts u get to do route 444 down heree aaayayayayyayay


    routefour1: {
        dialogue: `Morning has now arrived after your newest catch from last night. You packed up your things before heading out to Route 4: Sandy Beaches.`,
        background: "Pokemon images/route4.png",
        next: "routefour2",

    },

    routefour2: {
        dialogue: `You’re now at the beach! There’s a lot of wind and waves today, and it seems like it’s going to rain soon.`,
        background: "Pokemon images/route4.png",
        next: "routefour3",
    },

    routefour3: {
        dialogue: `Not so far away is a small cave where you can rest until this rainstorm passes by. You arrived there, but you didn’t think there were some Pokemon already hiding in the cave.`,
        background: "Pokemon images/route4.png",
        next: "routefour4",
    },

    routefour4: {
        dialogue: `You couldn’t see them– but you could hear their angry sounds as you stumbled upon their territory.`,
        background: "Pokemon images/route4.png",
        next: "routefour5",
    },

    routefour5: {
        dialogue: `Pick and choose to see who's in this cave!`,
        background: "Pokemon images/finalroute.png",
        options: [
            {
                text: "Bug/Fire",
                type: "bug",
                action: () => {
                    currentScene = "chosenLarvesta";
                    loadScene(currentScene);
                },
            },
            {
                text: "Electric",
                type: "electric",
                action: () => {
                    currentScene = "chosenMareep";
                    loadScene(currentScene);
                },
            },
            {
                text: "Dragon/Ground",
                type: "dragon",
                action: () => {
                    currentScene = "chosenGabite";
                    loadScene(currentScene);
                },
            }
        ]
    },

    // Larvesta option
    chosenLarvesta: {
        dialogue: "A wild Larvesta has appeared! What will you do?",
        img: "Pokemon images/larvesta.png",
        background: "Pokemon images/route4.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Larvesta", "routefive1", "chosenLarvesta");
                }

            },
            {
                text: "Run",
                next: "runFromLarvesta"
            }
        ]
    },
    runFromLarvesta: {
        dialogue: `You ran away from Larvesta... it attacked you with Ember.`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routefive1",
    },





    // mareep option
    chosenMareep: {
        dialogue: "A wild Mareep has appeared! What will you do?",
        img: "Pokemon images/mareep.png",
        background: "Pokemon images/route4.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Mareep", "routefive1", "chosenMareep");
                }

            },
            {
                text: "Run",
                next: "runFromMareep"
            }
        ]
    },
    runFromMareep: {
        dialogue: `You ran away from Mareep? Why would you do that..`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routefive1",
    },




    // gabite option
    chosenGabite: {
        dialogue: "A wild Gabite has appeared! What will you do?",
        img: "Pokemon images/gabite.png",
        background: "Pokemon images/route4.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Gabite", "routefive1", "chosenGabite");
                }

            },
            {
                text: "Run",
                next: "runFromGabite"
            }
        ]
    },
    runFromGabite: {
        dialogue: `You successfully ran away from Gabite before it erased you from existence.`,
        background: "Pokemon images/blackscreen.jpg",
        next: "routefive1",
    },














































    // NOTE: sicne these are LEGENDARY pokemon battling, we might need to make a separate function for them since they should be stronger and more difficult to battle!



    // ROUTE 5 YAYA FINAL ONE I THINK


    routefive1: {
        dialogue: `Finally, you were able to rest for the rest of the time until the storm passed. After a few more minutes the rain has passed now, and you make your way up to Route 5: Forbidden Canyon.`,
        background: "Pokemon images/route5.png",
        next: "routefive2",

    },

    routefive2: {
        dialogue: `You make your way up to the Canyon, and the clouds have turned darker in the sky. You’ve become nervous as you reach the peak of the canyon but at the same time you felt a relief at the same time as you could see your whole entire region.`,
        background: "Pokemon images/route5a.png",
        next: "routefive3",
    },

    routefive3: {
        dialogue: `All of a sudden, the sky was completely covered in dark gray clouds as you could hear thunder out in the distance. You’ve noticed how this weather isn’t natural, and it seemed like a Pokemon was doing this.`,
        background: "Pokemon images/route5b.png",
        next: "routefive4",
    },

    routefive4: {
        dialogue: `You look behind, and you could see three Pokemon out in the distance. However, these aren't just any ordinary Pokemon, you’ve noticed the way they look might be a stronger Pokemon you have never fought before.`,
        background: "Pokemon images/route5b.png",
        next: "routefive5",
    },

    routefive5: {
        dialogue: `These three mysterious Pokemon are only letting you fight ONE of them and see if you have the potential to catch them. Pick wisely!`,
        background: "Pokemon images/route5c.png",
        options: [
            {
                text: "Steel/Psychic",
                type: "steel",
                action: () => {
                    currentScene = "chosenSolgaleo";
                    loadScene(currentScene);
                },
            },
            {
                text: "Dragon/Ground",
                type: "dragon",
                action: () => {
                    currentScene = "chosenZygarde";
                    loadScene(currentScene);
                },
            },
            {
                text: "Ice/Flying",
                type: "ice",
                action: () => {
                    currentScene = "chosenArticuno";
                    loadScene(currentScene);
                },
            }
        ]
    },

    // Solgaleo option
    chosenSolgaleo: {
        dialogue: "A wild- wait, IS THAT Solgaleo? What will you do!?",
        img: "Pokemon images/solgaleo.png",
        background: "Pokemon images/finalroute.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Solgaleo", "wrapup", "chosenSolgaleo");
                }

            },
            {
                text: "Run",
                next: "runFromSolgaleo"
            }
        ]
    },
    runFromSolgaleo: {
        dialogue: `You ran away from Solgaleo! It just stared at you... and then decided to nap in victory.`,
        background: "Pokemon images/blackscreen.jpg",
        next: "wrapup",
    },





    // Zygarde option
    chosenZygarde: {
        dialogue: "A wild- wait, IS THAT ZYGARDE? What will you do!?",
        img: "Pokemon images/zygarde.png",
        background: "Pokemon images/finalroute.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Zygarde", "wrapup", "chosenZygarde");
                }

            },
            {
                text: "Run",
                next: "runFromZygarde"
            }
        ]
    },
    runFromZygarde: {
        dialogue: `You ran from Zygarde! It laughed at you. ☹️`,
        background: "Pokemon images/blackscreen.jpg",
        next: "wrapup",
    },




    // Articuno option
    chosenArticuno: {
        dialogue: "A wild- wait, IS THAT ARTICUNO? What will you do!?",
        img: "Pokemon images/articuno.png",
        background: "Pokemon images/finalroute.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Articuno", "wrapup", "chosenArticuno");
                }

            },
            {
                text: "Run",
                next: "runFromArticuno"
            }
        ]
    },
    runFromArticuno: {
        dialogue: `You ran away from a Articuno! It’s... Confused why you ran?`,
        background: "Pokemon images/blackscreen.jpg",
        next: "wrapup",
    },



    wrapup: {
        dialogue: "You reached the end of your adventure, now it is time to return home",
        background: "Pokemon images/blackscreen.jpg",
        next: function () {
            if (gameState.starter === "Litten") {
                return "endingv1";
            } else if (gameState.starter === "Froakie") {
                return "endingv2";
            } else if (gameState.starter === "Treecko") {
                return "endingv3";
                return "end";
            }
        }



    },



    //endingv1//

    endingv1: {
        dialogue: `Now you're on your way back to your hometown and notice a familiar figure in the distance`,
        background: "Pokemon images/blackscreen.jpg",
        next: "Professorend"
    },

    Professorend: {
        dialogue: `Is that... ${playerData.teacher}!?!`,
        background: "Pokemon images/Professor-ending.png",
        next: "Professoralt",

    },

    Professoralt: {
        dialogue: `I’ve  heard about your recent journey! Battle me, I want to see how strong you’ve become!`,
        background: "Pokemon images/teachtalkstoyou.png",
        next: "Fightteach",
    },

    Fightteach: {
        background: "Pokemon images/teachtalkstoyou.png",
        options: [
            {
                text: "Fight",
                next: "fightingteach"
            },
        ]

    },

    fightingteach: {
        dialogue: function () {
            const battle = battlePokemon(`${playerData.teacher}`, "Fightingteachwin", "Fightingteachloss");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "teachtalkstoyou.png",

        next: function () {
            return this.nextScene;
        }
    },

    Fightingteachwin: {
        dialogue: `wow you and your Pokemon are really in sync! You have grown exponentially!`,
        background: "Pokemon images/teachtalksyou.png",
        next: "end",

    },

    Fightingteachloss: {
        dialogue: `You were really tough! It seems like you have more to learn but you’re not far from competing with the best of the best, keep going kid!`,
        background: "Pokemon images/teachtalksyou.png",
        next: "end",
    },

    //endingv2//

    endingv2: {
        dialogue: `Now you're on your way back to your hometown and notice a familiar figure in the distance`,
        background: "Pokemon images/blackscreen.jpg",
        next: "Friendending1",
    },

    Friendending1: {
        dialogue: `Hey look it’s ${playerData.classmate}!`,
        background: "Pokemon images/friend!.png",
        next: "Friendfightp2",
    },


    Friendfightp2: {
        dialogue: `Hey! Let’s have a battle, I want to see how strong you’ve become!`,
        background: "Pokemon images/friend!.png",
        next: "Friendfightp3",
    },

    Friendfightp3: {
        dialogue: function () {
            const battle = battlePokemon(`${playerData.classmate}`, "Friendfightwin", "Friendfightloss");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "Pokemon images/Friend!.png",

        next: function () {
            return this.nextScene;
        }
    },

    Friendfightwin: {
        dialogue: `It’s a shame that I lost but man, that was fun! We need to battle again soon!`,
        background: "Pokemon images/Friend!.png",
        next: "end",
    },

    Friendfightloss: {
        dialogue: `I must’ve been lucky, what a tough fight!`,
        background: "Pokemon images/Friend!.png",
        next: "end",
    },

    //ending3//

    endingv3: {
        dialogue: `Now you're on your way back to your hometown and notice a familiar figure in the distance`,
        background: "Pokemon images/blackscreen.jpg",
        next: "motherencounter",
    },

    motherencounter: {
        dialogue: `What is my mom doing here?`,
        background: "Pokemon images/Mother.png",
        next: "motherencounter1",

    },
    motherencounter1: {
        dialogue: `It looks like your mother is challenging you... to a battle!?!`,
        background: "Pokemon images/Mother.png",
        next: "motherencounter2",
    },

    motherencounter2: {
        dialogue: `If you win you can choose dinner tonight!`,
        background: "Pokemon images/Mother.png",
        next: "Fightmom",
    },


    Fightmom: {
        background: "Pokemon images/Mother.png",
        options: [
            {
                text: "Fight",
                next: "motherencounter3"
            },
        ]

    },

    motherencounter3: {

        dialogue: function () {
            const battle = battlePokemon("Mom!", "motherencounterwin", "motherencounterloss");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "Pokemon images/Mother.png",

        next: function () {
            return this.nextScene;
        }
    },


    motherencounterwin: {
        dialogue: `Well I’m a woman of my word, what do you want for dinner?`,
        background: "Pokemon images/Mother.png",
        next: "end",
    },

    motherencounterloss: {
        dialogue: `Well now I get to choose what’s for dinner, loser!`,
        background: "Pokemon images/Mother.png",
        next: "end",
    },


    end: {
        background: "Pokemon images/Pokemonthankyou.png",
    },





}








































// stuff

let currentScene = "intro";

function goToNextScene() {
    const scene = scenes[currentScene];

    const next =
        typeof scene.next === "function"
            ? scene.next()
            : scene.next;

    if (next) {
        currentScene = next;
        loadScene(currentScene);
    }
}


const nameEl = document.getElementById("name");
const dialogueEl = document.getElementById("dialogue");
const bgEl = document.getElementById("background");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const pokemonImgE1 = document.getElementById("img");
const dialogueBox = document.getElementById("dialogueBox");

function loadScene(sceneKey) {
    const scene = scenes[sceneKey];

    if (scene.options && scene.options[0]?.type) {
        document.documentElement.style.setProperty("--starter-color", "white");
    }

    dialogueEl.textContent =
        typeof scene.dialogue === "function"
            ? scene.dialogue()
            : scene.dialogue;

    bgEl.src = scene.background || "";

    if (scene.img) {
        pokemonImgE1.src = scene.img;
        pokemonImgE1.style.display = "block";
    } else {
        pokemonImgE1.style.display = "none";
    }

    optionsEl.innerHTML = "";

    nextBtn.onclick = goToNextScene;

    const sceneOptions =
        typeof scene.options === "function"
            ? scene.options()
            : scene.options;

    if (sceneOptions) {
        optionsEl.style.display = "flex";
        nextBtn.style.display = "none";

        sceneOptions.forEach(option => {
            const btn = document.createElement("button");

            if (option.type) {
                btn.style.backgroundColor = starterThemes[option.type];
            }

            btn.innerHTML = `
                ${option.img ? `<img src="${option.img}" style="width:80px;"><br>` : ""}
                ${option.text}
            `;

            btn.onclick = () => {
                if (option.action) option.action();

                if (option.next) {
                    currentScene = option.next;
                    loadScene(currentScene);
                }
            };

            optionsEl.appendChild(btn);
        });

    } else {
        optionsEl.style.display = "none";
        nextBtn.style.display = "block";
    }
}





nextBtn.onclick = goToNextScene;


loadScene(currentScene);




//overlay thingy
const overlay = document.getElementById("overlay");
const openInventoryBtn = document.getElementById("openInventory");
const closeInventoryBtn = document.getElementById("overlayBtn");

function openOverlay() {
    overlay.classList.add("active");
}

function closeOverlay() {
    overlay.classList.remove("active");
}

openInventoryBtn.onclick = openOverlay;
closeInventoryBtn.onclick = closeOverlay;

overlay.onclick = (e) => {
    if (e.target === overlay) {
        closeOverlay();
    }
};



// play again button

const playAgain = document.getElementById("playAgain");


if (playAgain) {
    playAgain.onclick = () => {
        window.location.href = "index.html";
    };
}