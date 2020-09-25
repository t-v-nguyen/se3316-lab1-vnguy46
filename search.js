let pokemon = [
    {
        id: "#001",
        pokemon: "Bulbasaur",
        description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        type:"Grass Poison"
    },
    {
        id: "#002",
        pokemon: "Ivysaur",
        description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        type: "Grass Poison"
    },
    {
        id: "#003",
        pokemon: "Venusaur",
        description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        type: "Grass Poison"
    },
    {
        id: "#004",
        pokemon: "Charmander",
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        type: "Fire"
    },
    {
        id: "#005",
        pokemon: "Charmeleon",
        description: "It has a barb,aric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        type: "Fire"
    },
    {
        id: "#006",
        pokemon: "Charizard",
        description: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        type: "Fire Flying"
    },
    {
        id: "#007",
        pokemon: "Squirtle",
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        type: "Water"
    },
    {
        id: "#008",
        pokemon: "Wartortle",
        description: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        type: "Water"
    },
    {
        id: "#009",
        pokemon: "Blastoise",
        description: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        type: "Water"
    },
    {
        id: "#010",
        pokemon: "Caterpie",
        description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        type: "Bug"
    },
    {
        id: "#011",
        pokemon: "Metapod",
        description: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        type: "Bug"
    },
    {
        id: "#012",
        pokemon: "Butterfree",
        description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        type: "Bug Flying"
    },
    {
        id: "#013",
        pokemon: "Weedle",
        description: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
        type: "Bug Poison"
    },
    {
        id: "#014",
        pokemon: "Kakuna",
        description: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
        type: "Bug Poison"
    },
    {
        id: "#015",
        pokemon: "Beedrill",
        description: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        type: "Bug Poison"
    },
    {
        id: "#016",
        pokemon: "Pidgey",
        description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        type: "Normal Flying"
    },
    {
        id: "#017",
        pokemon: "Pidgeotto",
        description: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
        type: "Normal Flying"
    },
    {
        id: "#018",
        pokemon: "Pidgeot",
        description: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        type: "Normal Flying"
    },
    {
        id: "#019",
        pokemon: "Rattata",
        description: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
        type: "Normal"
    },
    {
        id: "#020",
        pokemon: "Raticate",
        description: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        type: "Normal"
    }
]
function printMatches(matches){
    let output = "";
    for(i=0;i<matches.length;i++){
        output += matches[i].id +" "+ matches[i].pokemon +" "+ matches[i].description +" "+ matches[i].type + "\n" 
    }
    alert(output);
}

function searchName(form){
    let matches = [];
    if(form.nameInput.value.match(/^[a-zA-z]+$/) && form.nameInput.value.length <= 20 && form.nameInput.value.length > 0){
        for(i=0;i<pokemon.length;i++){
            if(pokemon[i].pokemon.toLowerCase().includes(form.nameInput.value.toLowerCase())){
                matches.push(pokemon[i]);
                if(matches.length >= 5) break;
            }
        }
        printMatches(matches);
    }
    else{
        alert("Please input 1-20 alphabet characters")
    }
}
function searchIndex(form){
    let matches = []
    if(isNaN(form.indexInput.value) || form.indexInput.value > 20 || form.indexInput.value < 1){
        alert("Please input a NUMBER between 1-20");
    }
    else{
        for(i=0;i<pokemon.length;i++){
            if(pokemon[i].id.includes(form.indexInput.value)){
                matches.push(pokemon[i]);
                if(matches.length >= 5) break;
            }
        }
        printMatches(matches);
    }
}

