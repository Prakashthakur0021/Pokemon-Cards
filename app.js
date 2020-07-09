const poke_container = document.querySelector("#poke_container");
const pokemon_No = 150;

const colors = {
  fire: "#FDDFDF", //"#ff4242"
  grass: "#DEFDEQ",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: '#d5d5d4"',
  fairy: "#fceaff",
  poison: "#98d7aS",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaedal",
  flying: "#FSFSFS",
  fighting: "#E6EQD4",
  normal: "#FSFSFS",
};

const main_types = Object.keys(colors);
const bg_colors = Object.values(colors);
console.log(main_types);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_No; i++) {
    getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();

  createPokemonCard(pokemon);
};

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const pokemon_types = pokemon.types.map((el) => el.type.name);
  const type = main_types.find((type) => pokemon_types.indexOf(type) > -1);
  pokemonEl.style.background = colors[type];

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokemonInnerHtml = `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${
          pokemon.id
        }.png" />
    </div>
    <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span>
    </div>

  `;

  pokemonEl.innerHTML = pokemonInnerHtml;
  poke_container.appendChild(pokemonEl);
}
