<script>
  import { page } from "$app/state";
</script>

<div class="flex min-h-screen flex-col items-center justify-center p-4 text-center">
  <h1 class="m-0 text-[clamp(4rem,15vw,12rem)]">
    {page.status}
  </h1>
  <p class="mt-4 text-[clamp(1rem,3vw,2rem)]">
    {page.error?.message}
  </p>
</div>
