import { Pokemon } from "../../src/types/tipos";
import { pokemonCache } from "../cache";

export async function fetchPokemon(
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>,
): Promise<void> {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();

    // Fetch detailed data for each Pokémon in parallel
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const res = await fetch(pokemon.url);
        const details = await res.json();
        return {
          name: pokemon.name,
          image: details.sprites.front_default, // Get the Pokémon's image URL
          imageShiny: details.sprites.front_shiny, // Get the Pokémon's shiny image URL
          mainType: details.types[0].type.name, // Get the Pokémon's type
          subType: details.types[1]?.type.name || null, // Get the Pokémon's subtype if it exists
        };
      }),
    );

    setPokemon(pokemonDetails);
    pokemonDetails.forEach((pokemon) => {
      pokemonCache[pokemon.name] = pokemon; // Cache the Pokémon data
    });
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}
