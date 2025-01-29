<script>
  let counter = $state(0);
</script>

<div class="m-2">
  <h1 class="font-bold text-teal-600">Scaffolding!</h1>
  <h1 class="font-bold text-teal-600">Counter: {counter}</h1>

  <button class="mt-2 rounded bg-primary p-2 text-primary-foreground" onclick={() => counter++}>
    Increment
  </button>
  <button class="rounded bg-primary p-2 text-primary-foreground" onclick={() => counter--}>
    Decrement
  </button>
</div>
