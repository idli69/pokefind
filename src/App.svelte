<script>
    import { onMount } from "svelte";
    import GuessBox from "./lib/GuessBox.svelte";
    import { getRandomPokemon, isCorrect } from "./lib/api.js";

    let pokemon = null;
    let src = "";
    let answer = "";
    let correct = false;
    let feedback = "";
    let loading = true;

    async function load() {
        loading = true;
        correct = false;
        feedback = "";

        pokemon = await getRandomPokemon();
        src = pokemon.sprites.other.dream_world.front_default;

        answer = pokemon.name;
        loading = false;
    }
    const handleGuess = (guess) => {
        correct = isCorrect(guess, answer);
        feedback = correct ? "Correct" : "Wrong";
    };

    onMount(load);
</script>

<main
    class="
    flex flex-col min-h-screen items-center justify-center gap-6 bg-slate-900 text-slate-200
    "
>
    {#if loading}
        <p class="text-slate-400">Loading...</p>
    {:else}
        <section class="relative">
            <img
                {src}
                loading = "eager"
                alt=""
                class="h-40 w-40 object-contain transform-all duration-600"
                class:contrast-0={!correct}
                class:contrast-100={correct}
            />
        </section>

        <GuessBox onGuess={handleGuess} />

        <button class="cursor-pointer underline text-sky-700" onclick={load}>
            Skip
        </button>

        {#if feedback}
            <p
                class={`text-2xl font-medium ${correct ? "text-green-400" : "text-red-400"}`}
            >
                {feedback}
            </p>
        {/if}
        {#if correct}
            <button
                class="rounded-lg bg-indigo-600 cursor-pointer
                transition-colors duration-300 hover:bg-indigo-500 px-5 py-2"
                onclick={load}
            >
                Next Pokemon
            </button>
        {/if}
    {/if}
</main>
