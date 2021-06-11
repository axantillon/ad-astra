<script lang="ts">
  import Wolf3D from "./components/Wolf3D.svelte";
  import Astra from "./components/Astra.svelte";
  import CreateModal from "./components/CreateModal.svelte";

  let creatingAvatar = false;

  function createAvatar(): void {
    creatingAvatar = !creatingAvatar;
  }

</script>

<main class="flex justify-center items-center w-full h-full">
  {#if creatingAvatar}
    <!-- <Wolf3D/> -->
    <Astra/>
  {:else}
    <!-- <CreateModal on:click={createAvatar}/> -->
    <Astra/>
  {/if}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    padding: 0px !important;
	  background:#F3F4F6;
  }
</style>