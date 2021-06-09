<script lang="ts">
  import { fly } from 'svelte/transition';

  let avatarURL: string;

  function recieveAvatar(event): void {
      if (event.origin !== "https://fullbody.readyplayer.me") return;

      avatarURL = event.data;
      console.log(avatarURL);
  }
</script>

<div class="w-2/3 h-3/4 p-4 rounded-lg bg-white shadow-blueShadow" transition:fly="{{ y: 100, duration: 1000 }}">
    <iframe 
        src="https://fullbody.readyplayer.me"
        title="Wolf3D Avatar Creator"
        class="w-full h-full"
        on:message={recieveAvatar}
    ></iframe>
</div>