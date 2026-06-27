const BASE = "https://pokeapi.co/api/v2/pokemon/";
const NoOfPokemon = 150;

export async function getRandomPokemon() {
  const id = Math.floor(Math.random() * NoOfPokemon + 1);

  const response = await fetch(BASE + id);
  if (!response.ok) throw new Error("Fetch Failed");

  return response.json();
}

export function isCorrect(guess, answer) {
  // returns true or false
  return guess.trim().toLowerCase() === answer.toLowerCase();
}
