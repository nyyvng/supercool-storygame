
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
    Torracat: {attack: 85, defense: 50, speed: 90},
    Incineroar: {attack: 115, defense: 90, speed: 60},

    Froakie: { attack: 56, defense: 40, speed: 71 },
    Frogadier: {attack: 63, defense: 52, speed: 97},
    Greninja: {attack: 95, defense: 67, speed: 122},


    Treecko: { attack: 45, defense: 35, speed: 70 },
    Grovyle: {attack: 65, defense: 45, speed: 95},
    Sceptile: {attack: 85, defense: 65, speed: 120},





    // route 1 
    Wynaut: { attack: 23, defense: 48, speed: 23 },
    Wobbuffet: {attack: 33, defense: 58, speed: 33},

    Cubone: { attack: 50, defense: 95, speed: 35 },
    Marowak: {attack: 80, defense: 110, speed: 45},

    Munchlax: { attack: 85, defense: 40, speed: 5 },
    Snorlax: {attack: 110, defense: 65, speed: 30},

    // route 1 shuffle
    Joltik: {attack: 47, defense: 50, speed: 65},
    Galvantula: {attack: 77, defense: 60, speed: 108},

    Pancham: {attack: 82, defense: 62, speed: 43},
    Pangoro: {attack: 124, defense: 78, speed: 58},

    Vanillite: {attack: 50, defense: 50, speed: 44},
    Vanillish: {attack: 65, defense: 65, speed: 59},
    Vanilluxe: {attack: 95, defense: 85, speed: 79},





    // route 2
    Togepi: { attack: 20, defense: 65, speed: 20 },
    Togetic: {attack: 40, defense: 85, speed: 40},

    Bonsly: { attack: 80, defense: 95, speed: 10 },
    Sudowoodo: {attack: 100, defense: 115, speed: 30},

    Nidoran: { attack: 57, defense: 40, speed: 50 },
    Nidorino: {attack: 72, defense: 57, speed: 65},
    Nidoking: {attack: 102, defense: 77, speed: 85},

    // route 2 shuffle
    Noibat: {attack: 30, defense: 35, speed: 55},
    Noivern: {attack: 70, defense: 80, speed: 123},

    Larvitar: {attack: 64, defense: 50, speed: 41},
    Pupitar: {attack: 84, defense: 70, speed: 51},
    Tyranitar: {attack: 134, defense: 110, speed: 61},

    Riolu: {attack: 70, defense: 40, speed: 60},
    Lucario: {attack: 110, defense: 70, speed: 90},





    // route 3
    Korkorok: {attack: 82, defense: 45, speed: 74},
    Krookodile: {attack: 117, defense: 80, speed: 92},

    Lampent: {attack: 40, defense: 60, speed: 55},
    Chandelure: {attack: 55, defense: 90, speed: 80},

    Hawlucha: {attack: 92, defense: 75, speed: 118},

    //route 3 shuffle
    Clefairy: {attack: 45, defense: 48, speed: 35},
    Clefable: {attack: 70, defense: 73, speed: 60},

    Scyther: {attack: 110, defense: 80, speed: 105},
    Scizor: {attack: 130, defense: 100, speed: 65},

    Buneary: {attack: 66, defense: 44, speed: 85},
    Lopbunny: {attack: 76, defense: 84, speed: 105},







    // route 4
    Larvesta: {attack: 85, defense: 55, speed: 60},
    Volcarona: {attack: 60, defense: 65, speed: 100},

    Mareep: {attack: 40, defense: 40, speed: 35},
    Flaaffy: {attack: 55, defense: 55, speed: 45},
    Ampharos: {attack: 75, defense: 85, speed: 55},

    Hakamoo: {attack: 75, defense: 90, speed: 65},
    Kommoo: {attack: 110, defense: 125, speed: 85},

    // route 4 shuffle
    Gallade: {attack: 125, defense: 65, speed: 80},

    Trevenant: {attack: 110, defense: 76, speed: 56},

    Lycanroc: {attack: 115, defense: 65, speed: 112},




    // route 5
    Solgaleo: {attack: 137, defense: 107, speed: 97},

    Zygarde: {attack: 100, defense: 121, speed: 95},

    Articuno: {attack: 85, defense: 100, speed: 85},

    // route 5 shuffle
    Rayquaza: {attack: 150, defense: 90, speed: 95},

    Lugia: {attack: 90, defense: 130, speed: 110},

    Regirock: {attack: 100, defense: 200, speed: 50},








    // rival/friend pokemon party
    Hariyama: {attack: 120, defense: 60, speed: 50},
    Flareon: {attack: 130, defense: 60, speed: 65},
    Venusaur: {attack: 82, defense: 83, speed: 80},
    Emogla: {attack: 75, defense: 60, speed: 103},
    Lurantis: {attack: 105, defense: 90, speed: 45},
    Darkrai: {attack: 90, defense: 90, speed: 125},






    // teacher/professor pokemon party
    Weavile: {attack: 120, defense: 65, speed: 125},
    Altaria: {attack: 70, defense: 90, speed: 80},
    Pinsir: {attack: 125, defense: 100, speed: 85},
    Flygon: {attack: 100, defense: 80, speed: 100},
    Wailord: {attack: 90, defense: 45, speed: 60},
    Groudon: {attack: 150, defense: 140, speed: 90},






    // your mom's pokemon party
    Dedenne: {attack: 58, defense: 57, speed: 101},
    Sandslash: {attack: 100, defense: 110, speed: 65},
    Meganium: {attack: 82, defense: 100, speed: 80},
    Perisan: {attack: 70, defense: 60, speed: 115},
    Espeon: {attack: 65, defense: 60, speed: 110},
    Hoopa: {attack: 110, defense: 60, speed: 70},

};









function setStarterTheme(pokemonName) {
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
    enemyPokemon: null
};




// battle end
function endBattle(nextScene) {
    document.getElementById("battleUI").style.display = "none";
    document.getElementById("dialogueBox").style.display = "block";

    currentScene = nextScene;
    loadScene(currentScene);
}

// battle turns
function handleBattleTurn(choice) {
    const turn = battleTurn(choice);

    alert(turn.result);

    document.getElementById("playerHealth").textContent =
        `Your HP: ${turn.playerHP}`;

    document.getElementById("enemyHealth").textContent =
        `Enemy HP: ${turn.enemyHP}`;

    const result = checkBattleEnd();

    if (result === "enemyFainted") {
        endBattle(gameState.battle.winScene);
    }

    if (result === "playerFainted") {
        endBattle(gameState.battle.loseScene);
    }
}

// battle funtcions (WIP)
function loadBattleOptions() {

    const battleOptions = document.getElementById("battleOptions");

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
}

// new battle system (WIP)
function startBattle(enemyName, winScene, loseScene) {
    gameState.battle.playerPokemon = gameState.party[0];
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
        gameState.party.push(pokemonName);
        updateInventory();
    }
}
// pokemon inventory update
function updateInventory() {
    const inventory = document.getElementById("pokemonInventory");

    inventory.innerHTML = "";

    gameState.party.forEach((pokemon, index) => {
        const slot = document.createElement("div");
        slot.classList.add("pokemon-slot");

        slot.textContent = pokemon;

        inventory.appendChild(slot);
    });

    // filling empty slots
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
            `${playerPokemonName} used ${playerChoice}! ` +
            `${enemyPokemonName} used ${enemyChoice}! ` +
            `You won the turn!`;
    }

    else if (enemyRoll > playerRoll) {
        gameState.battle.playerHP--;

        result =
            `${enemyPokemonName} used ${enemyChoice}! ` +
            `${playerPokemonName} used ${playerChoice}! ` +
            `You lost the turn!`;
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

// catching attempt if opponent pokemon's health bar is low = catch?
function catchPokemonAttempt() {
    const enemyHP = gameState.battle.enemyHP;

    let catchRate = 0.25;

    if (enemyHP <= 3) catchRate = 0.50;
    if (enemyHP <= 2) catchRate = 0.75;

    if (Math.random() < catchRate) {
        addPokemonToParty(gameState.battle.enemyPokemon);
        alert(`You attempt to catch ${gameState.battle.enemyPokemon}, and you successfully caught it!`);
        endBattle(gameState.battle.winScene);
    } else {
        alert(`You attempt to catch ${gameState.battle.enemyPokemon}, but it broke free!`);
    }
}


// make a new run feature instead of making it an "action"
function runAway() {
    alert(`You ran away from ${gameState.battle.enemyPokemon}!`);
    endBattle(gameState.battle.loseScene);
}



//////////// NOTE: night need to remove a lot of the 
// battling/catch/run scenes and replace with the new one in progress



















const scenes = {
    captured: {
        dialogue: () => `${gameState.starter} was caught!`,
        background: "route1.png",
        next: "intro"
    },
    capturefailed: {
        dialogue: () => `${gameState.starter} escaped!`,
        background: "route1.png",
        next: "routeOne1"
    },


    intro: {
        dialogue: `This is the day you get to pick your very own pokemon in the ${playerData.lab} region and start your very own adventure!`,
        background: "bg1.png",
        next: "intro2"
    },

    intro2: {
        dialogue: `You make your way towards Professor ${playerData.teacher}s laboratory. This is where you choose your very first Pokemon.`,
        background: "bg2.png",
        next: "intro3"
    },

    intro3: {
        dialogue: `You also meet your classmate ${playerData.classmate} at the lab, who is also starting their Pokemon journey as well. ${playerData.classmate} insists that you get the first pick.`,
        background: "bg2.png",
        next: "starterOption"
    },

    starterOption: {
        dialogue: "Who will become your first Pokemon companion?",
        background: "bg2.png",
        options: [
            {
                text: "Litten",
                type: "fire",
                img: "litten.png",
                action: () => {
                    gameState.starter = "Litten";
                    addPokemonToParty("Litten");
                },
                next: "chosenStarter"
            },
            {
                text: "Froakie",
                type: "water",
                img: "froakie.png",
                action: () => {
                    gameState.starter = "Froakie";
                    addPokemonToParty("Froakie");
                },
                next: "chosenStarter"
            },
            {
                text: "Treecko",
                type: "grass",
                img: "treecko.png",
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
        background: "bg2.png",
        next: "intro4"
    },
    intro4: {
        dialogue: () => `You picked ${gameState.starter}! Shortly after, ${playerData.classmate} picks theirs.`,
        background: "bg2.png",
        next: "intro5"
    },
    intro5: {
        dialogue: () => `Before you both parted ways, ${playerData.teacher} informs you how survive in the wild.`,
        background: "bg2.png",
        next: "intro6"
    },
    intro6: {
        dialogue: () => `"To view your pokemon party, it will be at the top right corner!"`,
        background: "bg2.png",
        next: "intro7"
    },
    intro7: {
        dialogue: () => `"If you ever find yourself in a battle, you will be able to fight with your pokemon's stats: attack, defense, and speed."`,
        background: "bg2.png",
        next: "intro8"
    },
    intro8: {
        dialogue: () => `"If the opponent pokemon's health is low, catch it or defeat it!"`,
        background: "bg2.png",
        next: "intro9"
    },
    intro9: {
        dialogue: () => `You and ${playerData.classmate} thank ${playerData.teacher} before parting ways.`,
        background: "bg2.png",
        next: "routeOne1"
    },


    //// NOTE: add a tutorial dialogue or info about how to play, add on when theres new mechanics!!











    //route 1!!!!
    routeOne1: {
        dialogue: "You reach route 1: Grassy Terrains. Its a large field with tall yellow patches of grass throughout the route.",
        background: "route1.png",
        next: "routeOne2"
    },
    routeOne2: {
        dialogue: "You find three unique Pokemon, but you can't see them through all the tall grass!",
        background: "route1.png",
        next: "routeOne3"
    },
    routeOne3: {
        dialogue: "You must investigate... Which Pokemon will you encounter?",
        background: "route1.png",
        options: [
            {
                text: "Psychic",
                type: "psychic",
                action: () => {
                    currentScene = "chosenWynaut";
                    loadScene(currentScene);
                },
            },
            {
                text: "Ground",
                type: "ground",
                action: () => {
                    currentScene = "chosenCubone";
                    loadScene(currentScene);
                },
            },
            {
                text: "Normal",
                type: "normal",
                action: () => {
                    currentScene = "chosenMunchlax";
                    loadScene(currentScene);
                },
            }
        ]
    },

    //wynaut option
    chosenWynaut: {
        dialogue: "A wild Wynaut has appeared! What will you do?",
        img: "wynaut.png",
        background: "route1.png",
        options: [
            {
                text: "Fight",
                action: () => {
                    startBattle("Wynaut", "routetwo1", "chosenWynaut");
                }

            },
            {
                text: "Run",
                next: "runFromWynaut"
            }
        ]


    },

    runFromWynaut: {
        dialogue: `You successfully ran away from Wynaut... there were no consequences.`,
        background: "blackscreen.jpg",
        next: "routetwo1",
    },

    
    ///////////////////////////////////////////////////////////////////////////////////////////////// NOTE: battle and catch options were moved for battle system!!!


    // cubone option
    chosenCubone: {
        dialogue: "A wild Cubone has appeared! What will you do?",
        img: "cubone.png",
        background: "route1.png",
        options: [
            {
                text: "Fight",
                next: "fightCubone"
            },
            {
                text: "Run",
                next: "runFromCubone"
            }
        ]
    },

    runFromCubone: {
        dialogue: `Cubone got upset that you ran away... he threw his bone at you`,
        background: "blackscreen.jpg",
        next: "routetwo1",
    },

    // munchlax option
    chosenMunchlax: {
        dialogue: "A wild Munchlax has appeared! What will you do?",
        img: "munchlax.png",
        background: "route1.png",
        options: [
            {
                text: "Fight",
                next: "fightMunchlax"
            },
            {
                text: "Run",
                next: "runFromMunchlax"
            }
        ]
    },
    runFromMunchlax: {
        dialogue: `You ran away from Munchlax... Munchlax is developing its villain arc now.`,
        background: "blackscreen.jpg",
        next: "routetwo1",
    },





























    //route 2!!!
    routetwo1: {
        dialogue: `You offically made it out of the Grassy Terrains, you have now arrived at route 2: Berry Woods.`,
        background: "route2.png",
        next: "routetwo2",

    },

    routetwo2: {
        dialogue: `This area is a forest that's filled with many unique Pokemon. You and your Pokemon decide to rest for a while in this nice environment, so you sit underneath a tree and relax. `,
        background: "route2.png",
        next: "routetwo3",
    },

    routetwo3: {
        dialogue: `Your rest comes to a stop, as you hear the bushes rustling close by.`,
        background: "route2.png",
        next: "routetwo4",
    },

    routetwo4: {
        dialogue: `You notice that thre are three Pokemon in the bush, preparing to attack you! `,
        background: "route2.png",
        next: "routetwo5",
    },

    routetwo5: {
        dialogue: `However, you can only fight one of them, so which would it be?`,
        background: "route2.png",
        options: [
            {
                text: "Fairy",
                type: "fairy",
                action: () => {
                    gameState.currentEncounter = "Togepi";
                },
                next: "chosenTogepi"
            },
            {
                text: "Rock",
                type: "rock",
                action: () => {
                    gameState.currentEncounter = "Bonsly";
                },
                next: "chosenBonsly"
            },
            {
                text: "Poison",
                type: "poison",
                action: () => {
                    gameState.currentEncounter = "Nidoran";
                },
                next: "chosenNidoran"
            }
        ]
    },

    // togepi option
    chosenTogepi: {
        dialogue: "A wild Togepi has appeared! What will you do?",
        img: "togepi.png",
        background: "route2.png",
        options: [
            {
                text: "Fight",
                next: "fightTogepi"
            },
            {
                text: "Catch",
                next: "catchTogepi"
            },
            {
                text: "Run",
                next: "runFromTogepi"
            }
        ]
    },
    fightTogepi: {
        dialogue: `You chose to fight ...Togepi!`,
        img: "togepi.png",
        background: "route2.png",
        next: "Togepifight"
    },
    catchTogepi: {
        dialogue: `You chose to catch ...Togepi!`,
        img: "togepi.png",
        background: "route2.png",
        next: "Togepicapture",
    },
    runFromTogepi: {
        dialogue: `You attempted to flee from ...Togepi!`,
        img: "togepi.png",
        background: "route2.png",
        next: "Togepirun",
    },


    Togepifight: {
        dialogue: function () {
            const battle = battlePokemon("Togepi", "routethree1", "chosenTogepi");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "togepi.png",
        background: "route2.png",

        next: function () {
            return this.nextScene;
        }
    },

    Togepicapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Togepi", "routethree1", "chosenTogepi")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "togepi.png",
        background: "route2.png",

        next: function () {
            return this.nextScene;
        }
    },
    Togepirun: {
        dialogue: `Togepi successfully ran away from you...`,
        background: "blackscreen.jpg",
        next: "routethree1",
    },





    // Bonsly option
    chosenBonsly: {
        dialogue: "A wild Bonsly has appeared! What will you do?",
        img: "bonsly.png",
        background: "route2.png",
        options: [
            {
                text: "Fight",
                next: "fightBonsly"
            },
            {
                text: "Catch",
                next: "catchBonsly"
            },
            {
                text: "Run",
                next: "runFromBonsly"
            }
        ]
    },
    fightBonsly: {
        dialogue: `You chose to fight ...Bonsly!`,
        img: "bonsly.png",
        background: "route2.png",
        next: "Bonslyfight"
    },
    catchBonsly: {
        dialogue: `You chose to catch ...Bonsly!`,
        img: "bonsly.png",
        background: "route2.png",
        next: "Bonslycapture",
    },
    runFromBonsly: {
        dialogue: `You attempted to flee from ...Bonsly!`,
        img: "bonsly.png",
        background: "route2.png",
        next: "Bonslyrun",
    },


    Bonslyfight: {
        dialogue: function () {
            const battle = battlePokemon("Bonsly", "routethree1", "chosenBonsly");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "bonsly.png",
        background: "route2.png",

        next: function () {
            return this.nextScene;
        }
    },

    Bonslycapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Bonsly", "routethree1", "chosenBonsly")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "bonsly.png",
        background: "route2.png",

        next: function () {
            return this.nextScene;
        }
    },
    Bonslyrun: {
        dialogue: `You ran away from Bonsly? Bonsly cried👎`,
        background: "blackscreen.jpg",
        next: "routethree1",
    },




    // Nidoran option
    chosenNidoran: {
        dialogue: "A wild Nidoran has appeared! What will you do?",
        img: "nidoran.png",
        background: "route2.png",
        options: [
            {
                text: "Fight",
                next: "fightNidoran"
            },
            {
                text: "Catch",
                next: "catchNidoran"
            },
            {
                text: "Run",
                next: "runFromNidoran"
            }
        ]
    },
    fightNidoran: {
        dialogue: `You chose to fight ...Nidoran!`,
        img: "nidoran.png",
        background: "route2.png",
        next: "Nidoranfight"
    },
    catchNidoran: {
        dialogue: `You chose to catch ...Nidoran!`,
        img: "nidoran.png",
        background: "route2.png",
        next: "Nidorancapture",
    },
    runFromNidoran: {
        dialogue: `You attempted to flee from ...Nidoran!`,
        img: "nidoran.png",
        background: "route2.png",
        next: "Nidoranrun",
    },


    Nidoranfight: {
        dialogue: function () {
            const battle = battlePokemon("Nidoran", "routethree1", "chosenNidoran");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "nidoran.png",
        background: "route2.png",

        next: function () {
            return this.nextScene;
        }
    },

    Nidorancapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Nidoran", "routethree1", "chosenNidoran")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "nidoran.png",
        background: "route2.png",

        next: function () {
            return this.nextScene;
        }
    },
    Nidoranrun: {
        dialogue: `You ran away from Nidorino... it almost poisioned you as you ran!`,

        background: "blackscreen.jpg",
        next: "routethree1",
    },

























    //route THREEEEEEEE!!!
    routethree1: {
        dialogue: `After a very intense battle you reach route 3: Flatlands.`,
        background: "route3.png",
        next: "routethree2",

    },

    routethree2: {
        dialogue: `This route has a large green field that's next to a river. The sun is setting and you decided to set up camp for the night. The light sky finally fades. And you and your pokemon rest under the stars.`,
        background: "route3.png",
        next: "routethree3",
    },

    routethree3: {
        dialogue: `suddenly, an unexpected rustling in the tall grass near you wakes you and your pokemon. `,
        background: "route3.png",
        next: "routethree4",
    },

    routethree4: {
        dialogue: `It's hard to notice, but 3 pokemon are surrounding you, ready for a battle. But you could only battle one of them.`,
        background: "route3.png",
        next: "routethree5",
    },

    routethree5: {
        dialogue: `Which one would you choose?`,
        background: "route3.png",
        options: [
            {
                text: "Ground/Dark",
                type: "dark",
                action: () => {
                    gameState.currentEncounter = "Krokorok";
                },
                next: "chosenKrokorok"
            },
            {
                text: "Ghost/Fire",
                type: "ghost",
                action: () => {
                    gameState.currentEncounter = "Lampent";
                },
                next: "chosenLampent"
            },
            {
                text: "Fighting/Flying",
                type: "fighting",
                action: () => {
                    gameState.currentEncounter = "Hawlucha";
                },
                next: "chosenHawlucha"
            }
        ]
    },

    // Krokorok option
    chosenKrokorok: {
        dialogue: "A wild Krokorok has appeared! What will you do?",
        img: "krokorok.png",
        background: "route3.png",
        options: [
            {
                text: "Fight",
                next: "fightKrokorok"
            },
            {
                text: "Catch",
                next: "catchKrokorok"
            },
            {
                text: "Run",
                next: "runFromKrokorok"
            }
        ]
    },
    fightKrokorok: {
        dialogue: `You chose to fight ...Krokorok!`,
        img: "krokorok.png",
        background: "route3.png",
        next: "Krokorokfight"
    },
    catchKrokorok: {
        dialogue: `You chose to catch ...Krokorok!`,
        img: "krokorok.png",
        background: "route3.png",
        next: "Krokorokcapture",
    },
    runFromKrokorok: {
        dialogue: `You attempted to flee from ...Krokorok!`,
        img: "krokorok.png",
        background: "route3.png",
        next: "Krokorokrun",
    },


    Krokorokfight: {
        dialogue: function () {
            const battle = battlePokemon("Krokorok", "routefour1", "chosenKrokorok");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "krokorok.png",
        background: "route3.png",

        next: function () {
            return this.nextScene;
        }
    },

    Krokorokcapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Krokorok", "routefour1", "chosenKrokorok")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "krokorok.png",
        background: "route3.png",

        next: function () {
            return this.nextScene;
        }
    },
    Krokorokrun: {
        dialogue: `You ran away from Krokorok! It chased you across the Flatlands`,
        background: "blackscreen.jpg",
        next: "routefour1",
    },





    // Lampent option
    chosenLampent: {
        dialogue: "A wild Lampent has appeared! What will you do?",
        img: "lampent.png",
        background: "route3.png",
        options: [
            {
                text: "Fight",
                next: "fightLampent"
            },
            {
                text: "Catch",
                next: "catchLampent"
            },
            {
                text: "Run",
                next: "runFromLampent"
            }
        ]
    },
    fightLampent: {
        dialogue: `You chose to fight ...Lampent!`,
        img: "lampent.png",
        background: "route3.png",
        next: "Lampentfight"
    },
    catchLampent: {
        dialogue: `You chose to catch ...Lampent!`,
        img: "lampent.png",
        background: "route3.png",
        next: "Lampentcapture",
    },
    runFromLampent: {
        dialogue: `You attempted to flee from ...Lampent!`,
        img: "lampent.png",
        background: "route3.png",
        next: "Lampentrun",
    },


    Lampentfight: {
        dialogue: function () {
            const battle = battlePokemon("Lampent", "routefour1", "chosenLampent");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "lampent.png",
        background: "route3.png",

        next: function () {
            return this.nextScene;
        }
    },

    Lampentcapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Lampent", "routefour1", "chosenLampent")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "lampent.png",
        background: "route3.png",

        next: function () {
            return this.nextScene;
        }
    },
    Lampentrun: {
        dialogue: `You ran away from Lampent! It tried to chase you but ultimately gave up!`,
        background: "blackscreen.jpg",
        next: "routefour1",
    },




    // Hawlucha option
    chosenHawlucha: {
        dialogue: "A wild Hawlucha has appeared! What will you do?",
        img: "hawlucha.png",
        background: "route3.png",
        options: [
            {
                text: "Fight",
                next: "fightHawlucha"
            },
            {
                text: "Catch",
                next: "catchHawlucha"
            },
            {
                text: "Run",
                next: "runFromHawlucha"
            }
        ]
    },
    fightHawlucha: {
        dialogue: `You chose to fight ...Hawlucha!`,
        img: "hawlucha.png",
        background: "route3.png",
        next: "Hawluchafight"
    },
    catchHawlucha: {
        dialogue: `You chose to catch ...Hawlucha!`,
        img: "hawlucha.png",
        background: "route3.png",
        next: "Hawluchacapture",
    },
    runFromHawlucha: {
        dialogue: `You attempted to flee from ...Hawlucha!`,
        background: "route3.png",
        next: "Hawlucharun",
    },


    Hawluchafight: {
        dialogue: function () {
            const battle = battlePokemon("Hawlucha", "routefour1", "chosenHawlucha");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "hawlucha.png",
        background: "route3.png",

        next: function () {
            return this.nextScene;
        }
    },

    Hawluchacapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Hawlucha", "routefour1", "chosenHawlucha")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "hawlucha.png",
        background: "route3.png",

        next: function () {
            return this.nextScene;
        }
    },
    Hawlucharun: {
        dialogue: `You ran away from Hawlucha before it could body slam you!`,
        background: "blackscreen.jpg",
        next: "routefour1",
    },
































    // congrafts u get to do route 444 down heree aaayayayayyayay


    routefour1: {
        dialogue: `Morning has now arrived after your newest catch from last night. You packed up your things before heading out to Route 4: Sandy Beaches.`,
        background: "route4.png",
        next: "routefour2",

    },

    routefour2: {
        dialogue: `You’re now at the beach! There’s a lot of wind and waves today, and it seems like it’s going to rain soon.`,
        background: "route4.png",
        next: "routefour3",
    },

    routefour3: {
        dialogue: `Not so far away is a small cave where you can rest until this rainstorm passes by. You arrived there, but you didn’t think there were some Pokemon already hiding in the cave.`,
        background: "route4.png",
        next: "routefour4",
    },

    routefour4: {
        dialogue: `You couldn’t see them– but you could hear their angry sounds as you stumbled upon their territory.`,
        background: "route4.png",
        next: "routefour5",
    },

    routefour5: {
        dialogue: `Pick and choose to see who's in this cave!`,
        background: "route4.png",
        options: [
            {
                text: "Bug/Fire",
                type: "bug",
                action: () => {
                    gameState.currentEncounter = "Larvesta";
                },
                next: "chosenLarvesta"
            },
            {
                text: "Electric",
                type: "electric",
                action: () => {
                    gameState.currentEncounter = "Mareep";
                },
                next: "chosenMareep"
            },
            {
                text: "Dragon/Fighting",
                type: "dragon",
                action: () => {
                    gameState.currentEncounter = "Hakamoo";
                },
                next: "chosenHakamoo"
            }
        ]
    },

    // Larvesta option
    chosenLarvesta: {
        dialogue: "A wild Larvesta has appeared! What will you do?",
        img: "larvesta.png",
        background: "route4.png",
        options: [
            {
                text: "Fight",
                next: "fightLarvesta"
            },
            {
                text: "Catch",
                next: "catchLarvesta"
            },
            {
                text: "Run",
                next: "runFromLarvesta"
            }
        ]
    },
    fightLarvesta: {
        dialogue: `You chose to fight ...Larvesta!`,
        img: "larvesta.png",
        background: "route4.png",
        next: "larvestafight"
    },
    catchLarvesta: {
        dialogue: `You chose to catch ...Larvesta!`,
        img: "larvesta.png",
        background: "route4.png",
        next: "larvestacapture",
    },
    runFromLarvesta: {
        dialogue: `You attempted to flee from ...Larvesta!`,
        img: "larvesta.png",
        background: "route4.png",
        next: "larvestarun",
    },


    larvestafight: {
        dialogue: function () {
            const battle = battlePokemon("Larvesta", "routefive1", "chosenLarvesta");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "larvesta.png",
        background: "route4.png",

        next: function () {
            return this.nextScene;
        }
    },

    larvestacapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Larvesta", "routefive1", "chosenLarvesta")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "larvesta.png",
        background: "route4.png",

        next: function () {
            return this.nextScene;
        }
    },
    larvestarun: {
        dialogue: `You ran away from Larvesta... it attacked you with Ember.`,
        background: "blackscreen.jpg",
        next: "routefive1",
    },





    // mareep option
    chosenMareep: {
        dialogue: "A wild Mareep has appeared! What will you do?",
        img: "mareep.png",
        background: "route4.png",
        options: [
            {
                text: "Fight",
                next: "fightMareep"
            },
            {
                text: "Catch",
                next: "catchMareep"
            },
            {
                text: "Run",
                next: "runFromMareep"
            }
        ]
    },
    fightMareep: {
        dialogue: `You chose to fight ...Mareep!`,
        img: "mareep.png",
        background: "route4.png",
        next: "mareepfight"
    },
    catchMareep: {
        dialogue: `You chose to catch ...Mareep!`,
        img: "mareep.png",
        background: "route4.png",
        next: "mareepcapture",
    },
    runFromMareep: {
        dialogue: `You attempted to flee from ...Mareep!`,
        img: "mareep.png",
        background: "route4.png",
        next: "mareeprun",
    },


    mareepfight: {
        dialogue: function () {
            const battle = battlePokemon("Mareep", "routefive1", "chosenMareep");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "mareep.png",
        background: "route4.png",

        next: function () {
            return this.nextScene;
        }
    },

    mareepcapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Mareep", "routefive1", "chosenMareep")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "mareep.png",
        background: "route4.png",

        next: function () {
            return this.nextScene;
        }
    },
    mareeprun: {
        dialogue: `You ran away from Mareep? Why would you do that..`,
        background: "blackscreen.jpg",
        next: "routefive1",
    },




    // hakamo-o option
    chosenHakamoo: {
        dialogue: "A wild Hakamo-o has appeared! What will you do?",
        img: "hakamo-o.png",
        background: "route4.png",
        options: [
            {
                text: "Fight",
                next: "fightHakamoo"
            },
            {
                text: "Catch",
                next: "catchHakamoo"
            },
            {
                text: "Run",
                next: "runFromHakamoo"
            }
        ]
    },
    fightHakamoo: {
        dialogue: `You chose to fight ...Hakamo-o!`,
        img: "hakamo-o.png",
        background: "route4.png",
        next: "Hakamoofight"
    },
    catchHakamoo: {
        dialogue: `You chose to catch ...Hakamo-o!`,
        img: "hakamo-o.png",
        background: "route4.png",
        next: "Hakamoocapture",
    },
    runFromHakamoo: {
        dialogue: `You attempted to flee from ...Hakamo-o!`,
        background: "route4.png",
        next: "Hakamoorun",
    },


    Hakamoofight: {
        dialogue: function () {
            const battle = battlePokemon("Hakamo-o", "routefive1", "chosenHakamoo");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "hakamo-o.png",
        background: "route4.png",

        next: function () {
            return this.nextScene;
        }
    },

    Hakamoocapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Hakamo-o", "routefive1", "chosenHakamoo")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "hakamo-o.png",
        background: "route4.png",

        next: function () {
            return this.nextScene;
        }
    },
    Hakamoorun: {
        dialogue: `You successfully ran away from Hakamo-o... there were no consequences.`,
        background: "blackscreen.jpg",
        next: "routefive1",
    },


















































    // ROUTE 5 YAYA FINAL ONE I THINK


    routefive1: {
        dialogue: `Finally, you were able to rest for the rest of the time until the storm passed. After a few more minutes the rain has passed now, and you make your way up to Route 5: Forbidden Canyon.`,
        background: "route5.png",
        next: "routefive2",

    },

    routefive2: {
        dialogue: `You make your way up to the Canyon, and the clouds have turned darker in the sky. You’ve become nervous as you reach the peak of the canyon but at the same time you felt a relief at the same time as you could see your whole entire region.`,
        background: "route5a.png",
        next: "routefive3",
    },

    routefive3: {
        dialogue: `All of a sudden, the sky was completely covered in dark gray clouds as you could hear thunder out in the distance. You’ve noticed how this weather isn’t natural, and it seemed like a Pokemon was doing this.`,
        background: "route5b.png",
        next: "routefive4",
    },

    routefive4: {
        dialogue: `You look behind, and you could see three Pokemon out in the distance. However, these aren't just any ordinary Pokemon, you’ve noticed the way they look might be a stronger Pokemon you have never fought before.`,
        background: "route5b.png",
        next: "routefive5",
    },

    routefive5: {
        dialogue: `These three mysterious Pokemon are only letting you fight ONE of them and see if you have the potential to catch them. Pick wisely!`,
        background: "route5c.png",
        options: [
            {
                text: "Steel/Psychic",
                type: "steel",
                action: () => {
                    gameState.currentEncounter = "Solgaleo";
                },
                next: "chosenSolgaleo"
            },
            {
                text: "Dragon/Ground",
                type: "dragon",
                action: () => {
                    gameState.currentEncounter = "Zygarde";
                },
                next: "chosenZygarde"
            },
            {
                text: "Ice/Flying",
                type: "ice",
                action: () => {
                    gameState.currentEncounter = "Articuno";
                },
                next: "chosenArticuno"
            }
        ]
    },

    // Solgaleo option
    chosenSolgaleo: {
        dialogue: "A wild- wait, IS THAT Solgaleo? What will you do!?",
        img: "Solgaleo.png",
        background: "route5c.png",
        options: [
            {
                text: "Fight",
                next: "fightSolgaleo"
            },
            {
                text: "Catch",
                next: "catchSolgaleo"
            },
            {
                text: "Run",
                next: "runFromSolgaleo"
            }
        ]
    },
    fightSolgaleo: {
        dialogue: `You chose to fight ...Solgaleo!`,
        img: "Solgaleo.png",
        background: "route5c.png",
        next: "Solgaleofight"
    },
    catchSolgaleo: {
        dialogue: `You chose to catch ...Solgaleo!`,
        img: "Solgaleo.png",
        background: "route5c.png",
        next: "Solgaleocapture",
    },
    runFromSolgaleo: {
        dialogue: `You attempted to flee from ...Solgaleo!`,
        img: "Solgaleo.png",
        background: "route5c.png",
        next: "Solgaleorun",
    },


    Solgaleofight: {
        dialogue: function () {
            const battle = battlePokemon("Solgaleo", "wrapup", "chosenSolgaleo");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "Solgaleo.png",
        background: "route5c.png",

        next: function () {
            return this.nextScene;
        }
    },

    Solgaleocapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Solgaleo", "wrapup", "chosenSolgaleo")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "Solgaleo.png",
        background: "route5c.png",

        next: function () {
            return this.nextScene;
        }
    },
    Solgaleorun: {
        dialogue: `You ran away from Solgaleo! It just stared at you..`,
        background: "blackscreen.jpg",
        next: "wrapup",
    },





    // Zygarde option
    chosenZygarde: {
        dialogue: "A wild- wait, IS THAT ZYGARDE? What will you do!?",
        img: "zygarde.png",
        background: "route5c.png",
        options: [
            {
                text: "Fight",
                next: "fightZygarde"
            },
            {
                text: "Catch",
                next: "catchZygarde"
            },
            {
                text: "Run",
                next: "runFromZygarde"
            }
        ]
    },
    fightZygarde: {
        dialogue: `You chose to fight ...Zygarde!`,
        img: "zygarde.png",
        background: "route5c.png",
        next: "Zygardefight"
    },
    catchZygarde: {
        dialogue: `You chose to catch ...Zygarde!`,
        img: "zygarde.png",
        background: "route5c.png",
        next: "Zygardecapture",
    },
    runFromZygarde: {
        dialogue: `You attempted to flee from ...Zygarde!`,
        img: "zygarde.png",
        background: "route5c.png",
        next: "Zygarderun",
    },



    Zygardefight: {
        dialogue: function () {
            const battle = battlePokemon("Zygarde", "wrapup", "chosenZygarde");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "zygarde.png",
        background: "route5c.png",

        next: function () {
            return this.nextScene;
        }
    },

    Zygardecapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Zygarde", "wrapup", "chosenZygarde")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "zygarde.png",
        background: "route5c.png",

        next: function () {
            return this.nextScene;
        }
    },
    Zygarderun: {
        dialogue: `You ran from Zygarde! It laughed at you☹️`,
        background: "blackscreen.jpg",
        next: "wrapup",
    },




    // Articuno option
    chosenArticuno: {
        dialogue: "A wild- wait, IS THAT ARTICUNO? What will you do!?",
        img: "articuno.png",
        background: "route5c.png",
        options: [
            {
                text: "Fight",
                next: "fightArticuno"
            },
            {
                text: "Catch",
                next: "catchArticuno"
            },
            {
                text: "Run",
                next: "runFromArticuno"
            }
        ]
    },
    fightArticuno: {
        dialogue: `You chose to fight ...Articuno!`,
        img: "articuno.png",
        background: "route5c.png",
        next: "Articunofight"
    },
    catchArticuno: {
        dialogue: `You chose to catch ...Articuno!`,
        img: "articuno.png",
        background: "route5c.png",
        next: "Articunocapture",
    },
    runFromArticuno: {
        dialogue: `You attempted to flee from ...Articuno!`,
        background: "route5c.png",
        next: "Articunorun",
    },


    Articunofight: {
        dialogue: function () {
            const battle = battlePokemon("Articuno", "wrapup", "chosenArticuno");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "articuno.png",
        background: "route5c.png",

        next: function () {
            return this.nextScene;
        }
    },

    Articunocapture: {

        dialogue: function () {
            const captureResult = catchPokemon("Articuno", "wrapup", "chosenArticuno")

            this.nextScene = captureResult.next;

            return captureResult.text;
        },

        img: "articuno.png",
        background: "route5c.png",

        next: function () {
            return this.nextScene;
        }
    },



    Articunorun: {
        dialogue: `You ran away from a Articuno! It’s... Confused why ran?`,
        background: "blackscreen.jpg",
        next: "wrapup",
    },



    wrapup: {
        dialogue: "You reached the end of your adventure, now it is time to return home",
        background: "blackscreen.jpg",
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
        background: "blackscreen.jpg",
        next: "Professorend"
    },

    Professorend: {
        dialogue: `Is that... ${playerData.teacher}!?!`,
        background: "Professor-ending.png",
        next: "Professoralt",

    },

    Professoralt: {
        dialogue: `I’ve  heard about your recent journey! Battle me, I want to see how strong you’ve become!`,
        background: "teachtalkstoyou.png",
        next: "Fightteach",
    },

    Fightteach: {
        background: "teachtalkstoyou.png",
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
        background: "teachtalksyou.png",
        next: "end",

    },

    Fightingteachloss: {
        dialogue: `You were really tough! It seems like you have more to learn but you’re not far from competing with the best of the best, keep going kid!`,
        background: "teachtalksyou.png",
        next: "end",
    },

    //endingv2//

    endingv2: {
        dialogue: `Now you're on your way back to your hometown and notice a familiar figure in the distance`,
        background: "blackscreen.jpg",
        next: "Friendending1",
    },

    Friendending1: {
        dialogue: `Hey look it’s ${playerData.classmate}!`,
        background: "friend!.png",
        next: "Friendfightp2",
    },


    Friendfightp2: {
        dialogue: `Hey! Let’s have a battle, I want to see how strong you’ve become!`,
        background: "friend!.png",
        next: "Friendfightp3",
    },

    Friendfightp3: {
        dialogue: function () {
            const battle = battlePokemon(`${playerData.classmate}`, "Friendfightwin", "Friendfightloss");

            this.nextScene = battle.next;

            return battle.text;
        },

        img: "Friend!.png",

        next: function () {
            return this.nextScene;
        }
    },

    Friendfightwin: {
        dialogue: `It’s a shame that I lost but man, that was fun! We need to battle again soon!`,
        background: "Friend!.png",
        next: "end",
    },

    Friendfightloss: {
        dialogue: `I must’ve been lucky, what a tough fight!`,
        background: "Friend!.png",
        next: "end",
    },

    //ending3//

    endingv3: {
        dialogue: `Now you're on your way back to your hometown and notice a familiar figure in the distance`,
        background: "blackscreen.jpg",
        next: "motherencounter",
    },

    motherencounter: {
        dialogue: `What is my mom doing here?`,
        background: "Mother.png",
        next: "motherencounter1",

    },
    motherencounter1: {
        dialogue: `It looks like your mother is challenging you... to a battle!?!`,
        background: "Mother.png",
        next: "motherencounter2",
    },

    motherencounter2: {
        dialogue: `If you win you can choose dinner tonight!`,
        background: "Mother.png",
        next: "Fightmom",
    },


    Fightmom: {
        background: "Mother.png",
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

        img: "Mother.png",

        next: function () {
            return this.nextScene;
        }
    },


    motherencounterwin: {
        dialogue: `Well I’m a woman of my word, what do you want for dinner?`,
        background: "Mother.png",
        next: "end",
    },

    motherencounterloss: {
        dialogue: `Well now I get to choose what’s for dinner, loser!`,
        background: "Mother.png",
        next: "end",
    },


    end: {
        background: "Pokemonthankyou.png",
    },





}








































// stuff

let currentScene = "intro";


const nameEl = document.getElementById("name");
const dialogueEl = document.getElementById("dialogue");
const bgEl = document.getElementById("background");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const pokemonImgE1 = document.getElementById("img");

function loadScene(sceneKey) {
    const scene = scenes[sceneKey];

    if (scene.options && scene.options[0]?.type) {
        document.documentElement.style.setProperty("--starter-color", "white");
    }

    dialogueEl.textContent =
        typeof scene.dialogue === `function`
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


    if (scene.options) {
        nextBtn.style.display = "none";

        scene.options.forEach(option => {
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
                    //removed option.action(); seemed to let you continue after pressing fight.//
                    currentScene = option.next;
                    loadScene(currentScene);
                }
            };
            optionsEl.appendChild(btn);
        });

    } else {
        nextBtn.style.display = "block";
    }
}





nextBtn.onclick = () => {
    const scene = scenes[currentScene];

    const next =
        typeof scene.next === "function"
            ? scene.next()
            : scene.next;

    if (next) {
        currentScene = next;
        loadScene(currentScene);
    }

};


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