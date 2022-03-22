const pokeNameLabel = document.getElementById("pokeNameLabel");
const pokeName = document.getElementById("pokeName");
const pokemonId = document.getElementById("pokemonId");
const PokemonNameLabel = document.getElementById("pokeNameLabel");
const pokemonType = document.getElementById("pokemonType");
const pokemonHp = document.getElementById("health");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("specialAttack");
const pokemonSpecialDefense = document.getElementById("specialDefense");
const pokemonSpeed = document.getElementById("speed");

const fetchPokemon = () => {

    let pokeInput = pokeName.value.toLowerCase();
    const url = ` https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res) => {
        if(res.status != 200){ 
        console.log(res);
        pokeImage("./img/surprised-pikachu.png")
        defaultScreen();
        pokeFont();
        }else {
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        pokeNameLabel.style.opacity = 1;
        pokeNameLabel.textContent= data.name.toUpperCase();
        pokemonId.textContent = "Nº " + data.id;
        pokemonType.textContent = data.types[0].type.name.replace(/\b[a-z]/, match => match.toUpperCase());
        pokemonHp.textContent = "Hp: "+ dots + data.stats[0].base_stat; 
        pokemonAttack.textContent = "Attack: "+ dots + data.stats[1].base_stat;
        pokemonDefense.textContent = "Defense: "+ dots + data.stats[2].base_stat;
        pokemonSpecialAttack.textContent = "Special Attack" + dots2 + data.stats[3].base_stat;
        pokemonSpecialDefense.textContent = "Special Defense" + dots2 + data.stats[4].base_stat;
        pokemonSpeed.textContent = "Speed: "+ dots + data.stats[5].base_stat;
        PokemonNameLabel.style.backgroundColor = 'rgb(52, 95, 52)';
    })
} //Aquí termina la función fetchPokemon

var dots = ' ...... '
var dots2 = ' ... '

//fetchPokemon();
const pokeFont = () => {
    pokeNameLabel.style.fontSize = '2.5rem';
    PokemonNameLabel.style.backgroundColor = 'red';
    pokeNameLabel.textContent = "NOT FOUND!";
    pokemonId.textContent = "Type in a valid name";
}
const defaultScreen = () => {
    pokemonType.textContent = ' ';
    pokemonHp.textContent = "Hp: ";
    pokemonAttack.textContent = "Attack: ";
    pokemonDefense.textContent = "Defense: ";
        pokemonSpecialAttack.textContent = "Special Attack";
        pokemonSpecialDefense.textContent = "Special Defense";
        pokemonSpeed.textContent = "Speed: ";
        PokemonNameLabel.style.backgroundColor = 'rgb(52, 95, 52)';
};

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

// To make the first letter of the word be uppercase
/*
.replace(/\b[a-z]/, match => match.toUpperCase());
*/ 

var elem = document.getElementById("pokeName");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
        fetchPokemon();
    }
} //This function analizes if the user pressed enter after entering the information in te input, it then performs the function "fetchPokemon()"