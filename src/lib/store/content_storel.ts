import { browser } from '$app/environment';
import {  derived, writable } from 'svelte/store';
import type { Content } from '$lib/entities/content';

let contentValue : Content;

const content = writable<Content>();



content.subscribe(async (value) => {
  contentValue = value
 
});

export default content


 
