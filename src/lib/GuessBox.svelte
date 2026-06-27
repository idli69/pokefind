<script>
    let guess = $state("");

    const { onGuess } = $props();
</script>

<section class="flex flex-col gap-2">
    <input
        type="text"
        bind:value={guess}
        class="
        w-64 rounded-lg border border-slate-700 bg-slate-800
        outline-none focus:border-sky-600
        px-3 py-2 text-center text-slate-100
        "
        placeholder="Guess Pokemon..."
    />
    <button
        class="rounded-lg bg-sky-600 px-4 py-2 font-medium text-slate-100
        cursor-pointer transition-colors duration-300 hover:bg-sky-500"
        onclick={() => {
            onGuess(guess);
            guess = ""; // reset guess value
        }}
    >
        Guess
    </button>
    <button class="cursor-pointer">Skip</button>
</section>
