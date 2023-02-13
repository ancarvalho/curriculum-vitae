import { browser } from '$app/environment';
import {  derived, writable } from 'svelte/store';
import content from './content_storel';



// Due a issue with invalidation not reloading the page was needed to creata a fectch on client side for reloadind data
const defaultValue = 'pt';
const initialValue = browser ? window.localStorage.getItem('local') ?? defaultValue : defaultValue;

let localvalue = initialValue

const local = writable<string>(initialValue);



local.subscribe(async (value) => {
  localvalue = value
  if (browser) {
    window.localStorage.setItem('local', value)
  }
  const res = await fetch(`/translations/${value}/content.json`)
  const data = await res.json()
  content.set(data)

  console.log("nnn")
});

export  default local

