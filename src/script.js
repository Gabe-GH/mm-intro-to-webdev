import { fetchAllData, getSinglePokemonData, capitalize, typeColors, removeTemplate, removeLoader, hideMainSection, showMainSection } from './helpers.js'

async function parseAllData() {
    const { results } = await fetchAllData();

    return results
}

function createCard(pokemon) {
    const template = document.querySelector(".template");
    const clone = template.cloneNode(true);

    clone.classList.remove("template");

    const name = capitalize(pokemon.name);
    const type = pokemon.types[0].type.name.toLowerCase();
    const pokedex_num = pokemon.id % 10 === pokemon.id ? `0${pokemon.id}` : pokemon.id;

    const frontImg = clone.querySelector(".front");
    const backImg = clone.querySelector(".back");
    const shinyBtn = clone.querySelector(".shiny-btn");

    clone.querySelector(".pokedex_num").textContent = pokedex_num;
    frontImg.src = pokemon.sprites.front_default;
    backImg.src = pokemon.sprites.back_default;
    clone.querySelector(".name").textContent = capitalize(name);
    clone.querySelector(".type").textContent = capitalize(type);

    // Save normal and shiny URLs in dataset
    frontImg.dataset.normal = pokemon.sprites.front_default;
    frontImg.dataset.shiny = pokemon.sprites.front_shiny;
    backImg.dataset.normal = pokemon.sprites.back_default;
    backImg.dataset.shiny = pokemon.sprites.back_shiny;

    const colors = typeColors[type];
    if (colors) {
        clone.style.backgroundColor = colors.background;
        clone.style.borderColor = colors.border;

        clone.querySelector("button").style.color = colors.background
    } else {
        console.warn(`Unknown type: ${type}`);
    }

    let isShiny = false;
    shinyBtn.addEventListener('click', () => {
        isShiny = !isShiny;
        frontImg.src = isShiny ? frontImg.dataset.shiny : frontImg.dataset.normal;
        backImg.src = isShiny ? backImg.dataset.shiny : backImg.dataset.normal;
        shinyBtn.textContent = isShiny ? "Default" : "Shiny"; // swap button text if you want
    });

    document.querySelector(".main").appendChild(clone);
}

async function createAllCards(data) {

    const types_array = [];

    for (const item of data) {
        const pokemon = await getSinglePokemonData(item.url);

        if (!types_array.includes(pokemon.types[0].type.name))
            types_array.push(pokemon.types[0].type.name);

        createCard(pokemon);
    }

    removeTemplate();
}

/**
 * Steps we need to do
 *  1.) hideMainSection() so the user doesn't see things load in
 *  2.) createAllCards() with the data we're loading in and await it
 *  3.) once that's done we can show the user the 
 */

async function run() {
    hideMainSection();
    const data = await parseAllData();
    await createAllCards(data);
    showMainSection();
    removeLoader();
}




(async () => {
    await run();
})();