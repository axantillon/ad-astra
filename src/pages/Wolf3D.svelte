<script lang="ts">
    import { avatarURL } from '../store';
    import { fly } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    window.addEventListener('message', recieveAvatar, false)

    function recieveAvatar(event): void {
        avatarURL.set(event.data);
        dispatch('avatarReady');
    }
</script>

<div class="w-2/3 h-3/4 p-4 rounded-lg bg-white shadow-blueShadow" in:fly="{{ y: 100, duration: 1000 }}">
    <iframe 
        src="https://fullbody.readyplayer.me/avatar"
        title="Wolf3D Avatar Creator"
        allow="camera; microphone; geolocation;"
        class="w-full h-full"
    ></iframe>
</div>