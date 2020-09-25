let pokemon = [
    {
        id: 1,
        pokemon: "Bulbasaur",
        description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        type:"grass poison"
    },
    {
        id: 2,
        pokemon: "Ivysaur",
        description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        type: "grass poison"
    },
    {
        id: 3,
        pokemon: "Venusaur",
        description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        type: "grass poison"
    },
    {
        id: 4,
        pokemon: "Charmander",
        description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        type: "fire"
    },
    {
        id: 5,
        pokemon: "Charmeleon",
        description: "It has a barb,aric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        type: "fire"
    },
    {
        id: 6,
        pokemon: "Charizard",
        description: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        type: "fire flying"
    },
    {
        id: 7,
        pokemon: "Squirtle",
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        type: "water"
    },
    {
        id: 8,
        pokemon: "Wartortle",
        description: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        type: "water"
    },
    {
        id: 9,
        pokemon: "Blastoise",
        description: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        type: "water"
    },
    {
        id: 10,
        pokemon: "Caterpie",
        description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        type: "bug"
    },
    {
        id: 11,
        pokemon: "Metapod",
        description: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        type: "bug"
    },
    {
        id: 12,
        pokemon: "Butterfree",
        description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        type: "bug flying"
    },
    {
        id: 13,
        pokemon: "Weedle",
        description: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
        type: "bug poison"
    },
    {
        id: 14,
        pokemon: "Kakuna",
        description: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
        type: "bug poison"
    },
    {
        id: 15,
        pokemon: "Beedrill",
        description: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        type: "bug poison"
    },
    {
        id: 16,
        pokemon: "Pidgey",
        description: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        type: "normal flying"
    },
    {
        id: 17,
        pokemon: "Pidgeotto",
        description: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
        type: "normal flying"
    },
    {
        id: 18,
        pokemon: "Pidgeot",
        description: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        type: "normal flying"
    },
    {
        id: 19,
        pokemon: "Rattata",
        description: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
        type: "normal"
    },
    {
        id: 20,
        pokemon: "Raticate",
        description: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        type: "normal"
    }
]

function searchName(form){
    let matches = [];
    var letters = /^[A-Za-z] +%/;
    if(form.nameInput.value.match(letters) && form.nameInput.value.length <= 20){

    }
    else{
        alert("Please input less than 20 alphabet characters")
    }
}
function searchIndex(form){
    let matches = []
    if(isNaN(form.indexInput.value) || form.indexInput.value > 20 || form.indexInput.value < 1){
        alert("Please input NUMBERS between 1-20");
    }
    else{

    }
}