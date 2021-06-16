import { Writable, writable  } from "svelte/store";

export const avatarURL: Writable<string> = writable(undefined);