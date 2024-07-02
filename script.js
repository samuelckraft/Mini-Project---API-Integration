document.addEventListener("DOMContentLoaded", () => {
    async function fetchPokemonData(pokemonName) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const pokemonData = await response.json();
        return pokemonData;}
    })

document.getElementById('searchButton').addEventListener('click', async () => {
    const pokemonName = document.getElementById('search').value.trim();

    if (pokemonName === '') {
        alert('Please enter a Pokémon name.');
        return;
    }

    try {
        const pokemonData = await fetchPokemonData(pokemonName);
        const pokemonInfoElement = document.getElementById('pokemon-info');


        pokemonInfoElement.innerHTML = `
            <h2>${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
            <h3>Abilities:</h3>
            <ul>
                ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
            </ul>
            <h3>Base Experience:</h3>
            <p>${pokemonData.base_experience}</p>
        `;
    } catch (error) {
        alert('Error fetching Pokémon data. Please try again.');
    }
});