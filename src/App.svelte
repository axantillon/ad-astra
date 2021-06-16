<script lang="ts">
  import Wolf3D from "./pages/Wolf3D.svelte";
  import Astra from "./pages/Astra.svelte";
  import CreateModal from "./pages/CreateModal.svelte";
  import { avatarURL } from './store';

  enum state {
    Welcome,
    creatingAvatar,
    Astra,
    Home
  }

  let appState: state = state.Astra ;

  function createAvatar(): void {
    appState = state.creatingAvatar;
  }

  function adAstra(event): void {
    console.log($avatarURL);
    appState = state.Astra;
  }

</script>

<main class="flex justify-center items-center w-full h-full">
  {#if appState === state.Welcome}
    <CreateModal on:click={createAvatar}/>
  {:else if appState === state.creatingAvatar}
    <Wolf3D on:avatarReady={adAstra}/>
  {:else if appState === state.Astra}
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