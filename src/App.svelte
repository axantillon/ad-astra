<script lang="ts">
  import Wolf3D from "./components/Wolf3D.svelte";
  import CreateModal from "./components/CreateModal.svelte";

  let creatingAvatar = false;

  function createAvatar(): void {
    creatingAvatar = !creatingAvatar;
  }

</script>

<main class="flex justify-center items-center w-full h-full">
  {#if creatingAvatar}
    <Wolf3D/>
  {:else}
    <CreateModal on:click={createAvatar}/>
  {/if}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
	  background:#F3F4F6;
  }
</style>