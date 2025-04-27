export async function fetchAllData() {
    return await makeAPICall("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
}

export async function getSinglePokemonData(url) {
    return await makeAPICall(url);
}

export async function makeAPICall(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
}

export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

export function removeTemplate() {
    const template = document.querySelector(".template");
    template.remove();
}

export function removeLoader() {
    const loader = document.getElementById("loader");
    loader.classList.remove("hidden");
    loader.classList.add("hidden");
}

export function hideMainSection() {
    const main = document.querySelector(".main");
    main.style.visibility = 'hidden';
}

export function showMainSection() {
    const main = document.querySelector(".main");
    main.style.visibility = 'visible';
}

export const typeColors = {
    grass: { background: "#48C774", border: "#2D8049" },
    fire: { background: "#FF5E3A", border: "#B33014" },
    water: { background: "#3498DB", border: "#1D5C8C" },
    bug: { background: "#A8B820", border: "#6D7713" },
    normal: { background: "#A8A878", border: "#6D6D4A" },
    poison: { background: "#A040A0", border: "#602660" },
    electric: { background: "#F8D030", border: "#A68B16" },
    ground: { background: "#E0C068", border: "#927C28" },
    fairy: { background: "#EE99AC", border: "#B46679" },
    fighting: { background: "#C03028", border: "#7A1C19" },
    psychic: { background: "#F85888", border: "#9C2F54" },
    rock: { background: "#B8A038", border: "#7A691D" },
    ghost: { background: "#705898", border: "#3E2E57" },
    ice: { background: "#98D8D8", border: "#5A8989" },
    dragon: { background: "#7038F8", border: "#3E1E8C" },
};