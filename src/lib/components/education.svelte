<script lang="ts">
	import type { Education } from '$lib/entities/education';

	export let education: Education[];
</script>

<div class="pb-7">
	<div class="font-semibold text-xl mb-5">Educação</div>

	{#each education as education_place (education_place.title)}
		<div class="">
			<div class="font-bold text-lg">
				{education_place.name}
			</div>
			<div class="font-extralight text-[1em]">
				{education_place.period} | {education_place.city}
			</div>
			<div class="font-extralight text-[1em]">
				{education_place.title}
			</div>
		</div>
	{/each}
</div>
