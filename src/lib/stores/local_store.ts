import { browser } from '$app/environment';
import { writable } from 'svelte/store';


// Due a issue with invalidation not reloading the page was needed to creata a fetch on client side for reloadind store data
const defaultValue = 'pt';
const initialValue = browser ? window.localStorage.getItem('local') ?? defaultValue : defaultValue;

let localvalue = initialValue

const local = writable<string>(initialValue);

local.subscribe(async (value) => {
  localvalue = value
  if (browser) {
    window.localStorage.setItem('local', value)
  }
});

export { local, localvalue }

