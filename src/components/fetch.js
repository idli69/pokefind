const pokeapi = "https://pokeapi.co/api/v2/pokemon/";

export async function fetchRandomPokemon() {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  const response = await fetch(pokeapi + randomNumber);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }
  const data = await response.json();
  return data;
}
