const starterThemes = {
    fire: "#e74c3c",   
    water: "#3498db",  
    grass: "#2ecc71" 
};

function setStarterTheme(pokemonName) {
    const color = starterThemes[pokemonName] || "white";
    document.documentElement.style.setProperty("--starter-color", color);
}

const gameState = {
    starter: null
};
const scenes = {
    intro: {
        dialogue: "Today is the day you get to go out on your Pokemon journey in the CART region! This is your town, [CART lab], and today is the day you leave to adventure!",
        background: "bg1.png",
        next: "intro2"
    },

    intro2: {
        dialogue: "You make your way towards the laboratory, where you meet Professor [teacher name]. They will let you pick your very first Pokemon.",
        background: "bg2.png",
        next: "intro3"
    },

    intro3: {
        dialogue: "You also meet your classmate [student] at the lab, who is also starting their Pokemon journey as well. [student] insists you go first to choose your partner.",
        background: "bg2.png",
        next: "starterOption"
    },

    starterOption: {
        dialogue: "Who would you like to join you on your journey?",
        background: "bg2.png",
        options: [
            {
                text: "Litten",
                img: "litten.png",
                action: () => {
                    gameState.starter = "Litten";
                    setStarterTheme("fire");
                },
                next: "chosen"
            },
            {
                text: "Froakie",
                img: "froakie.png",
                action: () => {
                    gameState.starter = "Froakie";
                    setStarterTheme("water");
                },
                next: "chosen"
            },
            {
                text: "Treecko",
                img: "treecko.png",
                action: () => {
                    gameState.starter = "Treecko";
                    setStarterTheme("grass");
                },
                next: "chosen"
            }
        ]
    },
    chosen: {
        dialogue: () => `You chose a ...${gameState.starter}!`,
        background: "bg2.png"
    }
}














// stuff

let currentScene = "intro";


const nameEl = document.getElementById("name");
const dialogueEl = document.getElementById("dialogue");
const bgEl = document.getElementById("background");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadScene(sceneKey) {
    const scene = scenes[sceneKey];

    dialogueEl.textContent =
        typeof scene.dialogue === "function"
            ? scene.dialogue()
            : scene.dialogue;

    bgEl.src = scene.background || "";


    optionsEl.innerHTML = "";

    if (scene.options) {
        nextBtn.style.display = "none";

        scene.options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerHTML = `
            ${option.img ? `<img src="${option.img}" style="width:80px;"><br>` : ""}
            ${option.text}
            `;


            btn.onclick = () => {
                if (option.action) option.action();
                currentScene = option.next;
                loadScene(currentScene);
            };

            optionsEl.appendChild(btn);
        });

    } else {
        nextBtn.style.display = "block";
    }
}





nextBtn.onclick = () => {
    const next = scenes[currentScene].next;
    if (next) {
        currentScene = next;
        loadScene(currentScene);
    }
};

loadScene(currentScene);

