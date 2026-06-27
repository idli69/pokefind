<script>
    import { onMount } from "svelte";
    import { fetchRandomPokemon } from "./components/fetch";

    let src = null;
    let pokemonName = "";
    let loading = true;

    async function loadPokemon() {
        loading = true;
        const pokemon = await fetchRandomPokemon();

        src = pokemon.sprites.other.dream_world.front_default;
        pokemonName = pokemon.name;

        loading = false;
        return pokemon.name;
    }

    onMount(() => {
        loadPokemon();
    });
</script>

<main
    class="min-h-screen bg-slate-900 text-slate-200 flex flex-col justify-center items-center"
>
    {#if loading}
        <p>Image Loading...</p>
    {:else}
        <img {src} alt="Pokemon" class="w-40 aspect-square" />
    {/if}
    <input
        class="outline m-8 text-center"
        type="text"
        placeholder="Enter Pokemon Name "
    />
    <h1>{pokemonName}</h1>
    <button>Guess</button>
</main>

<style>
    img {
        filter: contrast(0%);
    }
</style>
