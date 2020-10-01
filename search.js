// An array of objects that contains the pokemon ID, name, description, and type
let pokemon = [
    {
        id: "#001",
        pokemon: "Bulbasaur",
        description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        type:"Grass Poison Type"
    },
    {
        id: "#002",
        pokemon: "Ivysaur",
        description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        type: "Grass Poison Type"
    },
    {
        id: "#003",
        pokemon: "Venusaur",
        description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        type: "Grass Poison Type"
    },
    {
        id: "#003",
        pokemon: "Mega Venusaur",
        description: "Use Venusaurite to mega evolve Venuasaur.",
        type: "Grass Poison Type"
    },
    {
        id: "#004",
        pokemon: "Charmander",
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        type: "Fire Type"
    },
    {
        id: "#005",
        pokemon: "Charmeleon",
        description: "It has a barb,aric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        type: "Fire Type"
    },
    {
        id: "#006",
        pokemon: "Charizard",
        description: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        type: "Fire Flying Type"
    },
    {
        id: "#006",
        pokemon: "Mega Charizard X",
        description: "Use Charizardite X to mega evolve Charizard.",
        type: "Fire Flying Type"
    },
    {
        id: "#006",
        pokemon: "Mega Charizard Y",
        description: "Use Charizardite Y to mega evolve Charizard.",
        type: "Fire Flying Type"
    },
    {
        id: "#007",
        pokemon: "Squirtle",
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        type: "Water Type"
    },
    {
        id: "#008",
        pokemon: "Wartortle",
        description: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        type: "Water Type"
    },
    {
        id: "#009",
        pokemon: "Blastoise",
        description: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        type: "Water Type"
    },
    {
        id: "#009",
        pokemon: "Mega Blastoise",
        description: "Use Blastoisinite to mega evolve Blastoise.",
        type: "Water Type"
    },
    {
        id: "#010",
        pokemon: "Caterpie",
        description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        type: "Bug Type"
    },
    {
        id: "#011",
        pokemon: "Metapod",
        description: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        type: "Bug Type"
    },
    {
        id: "#012",
        pokemon: "Butterfree",
        description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        type: "Bug Flying Type"
    },
    {
        id: "#013",
        pokemon: "Weedle",
        description: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
        type: "Bug Poison Type"
    },
    {
        id: "#014",
        pokemon: "Kakuna",
        description: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
        type: "Bug Poison Type"
    },
    {
        id: "#015",
        pokemon: "Beedrill",
        description: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        type: "Bug Poison Type"
    },
    {
        id: "#015",
        pokemon: "Mega Beedrill",
        description: "Use Beedrillite to mega evolve Beedrill.",
        type: "Bug Poison Type"
    },
    {
        id: "#016",
        pokemon: "Pidgey",
        description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        type: "Normal Flying Type"
    },
    {
        id: "#017",
        pokemon: "Pidgeotto",
        description: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
        type: "Normal Flying Type"
    },
    {
        id: "#018",
        pokemon: "Pidgeot",
        description: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        type: "Normal Flying Type"
    },
    {
        id: "#018",
        pokemon: "Mega Pidgeot",
        description: "Use Pidgeotite to mega evolve Pidgeot.",
        type: "Normal Flying Type"
    },
    {
        id: "#019",
        pokemon: "Rattata",
        description: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
        type: "Normal Type"
    },
    {
        id: "#020",
        pokemon: "Raticate",
        description: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        type: "Normal Type"
    }
]
var userNameInput = document.getElementById("nameInput");
var userIndexInput = document.getElementById("indexInput");
userNameInput.addEventListener("keyup", searchName);
userIndexInput.addEventListener("keyup", searchIndex);
var resultsExists = false;

// A function that prints all the matches 
function createResults(){
    var results = document.createElement("div");
    results.setAttribute("id", "results");
    results.setAttribute("class", "pokedex");

    var header = document.createElement("h2");
    var headerText = document.createTextNode("Search Results:");
    header.appendChild(headerText);

    var list = document.createElement("ul");
    list.setAttribute("id","r-list");

    results.appendChild(header);
    results.appendChild(list);
    
    document.getElementById("header").appendChild(results);
    resultsExists = true;
}

function clearResults(){
    var resultsList = document.getElementById("r-list");
    while(resultsList.firstChild){
        resultsList.firstChild.remove();
    }
}

function deleteResults(){
    var results = document.getElementById("results");
    results?.remove();
    resultsExists = false;
}

function printMatches(matches){
    if(!resultsExists){
        createResults();
    }
    var results = document.getElementById("r-list");
    clearResults();
    var pokedexList = document.querySelectorAll("#pokemon-list li");
    var clone;
    for(var i=0;i<matches.length;i++){
        for(var j=0;j<document.querySelectorAll("#pokemon-list li").length;j++){
            if(pokedexList[j].children[2].textContent == matches[i].pokemon){
                clone = pokedexList[j].cloneNode(true);
                results.appendChild(clone);
            }
        }
    }
}

// function that runs when user searches for pokemon name
function searchName(){ // takes in the form as a parameter, to be used to grab values from search box
    let matches = []; // declares an empty array
    //validates user input by checking it against a regex, and checks if the length is between 0-20
    if(userNameInput.value.match(/^[a-zA-z]+$/) && userNameInput.value.length <= 20 && userNameInput.value.length > 0){
        for(i=0;i<pokemon.length;i++){
            if(pokemon[i].pokemon.toLowerCase().includes(userNameInput.value.toLowerCase())){ // uses the include() function to check if the pokemon name contains what the user search
                matches.push(pokemon[i]);
            }
        }
        printMatches(matches); // run the print matches function, passing the matches array as a parameter
    }
    else if(userNameInput.value.length == 0){
        deleteResults();
    }
    else{
        if(userNameInput.value.length != 0){
            userNameInput.value = "";
            deleteResults();
            alert("Please input 1-20 alphabet characters"); // alerts user of incorrect input
        }
    }
}

// function that runs when user searches based off of index
function searchIndex(){ // takes in the form as a parameter, to be used to grab values from search box
    let matches = [] // declares an empty array
    // validates user input by checking if the number is actually a number, and ensures that the number is between 1-20
    if(userIndexInput.value.length == 0){
        deleteResults();
    }
    else if(isNaN(userIndexInput.value) || userIndexInput.value > 20 || userIndexInput.value < 1){
        if(userIndexInput.value != ""){
            userIndexInput.value = "";
            deleteResults();
            alert("Please input a NUMBER between 1-20");
        }
    }
    else{
        for(i=0;i<pokemon.length;i++){
            if(pokemon[i].id.includes(userIndexInput.value)){ // if the pokemon ID matches with the user input
                matches.push(pokemon[i]); // add it to the matches array
            }
        }
        printMatches(matches);
    }
}

