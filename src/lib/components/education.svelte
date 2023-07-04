<script lang="ts">
	import type { Education } from '$lib/entities/education';
	import { t } from '$lib/translations';

	export let education: Education[];
</script>

<div class="pb-7">
	<div class="font-semibold text-xl mb-5">{$t('menu.education')}</div>

	{#each education as education_place (education_place.title)}
		<div class="mb-[14px]">
			<div class="font-bold text-lg">
				{education_place.name}
			</div>
			<div class="font-extralight text-[0.8em]">
				{education_place.period} | {education_place.city}
			</div>
			<div class="font-light text-[1em]">
				<a href={education_place.link ?? education_place.link } target="_blank" rel="noopener noreferrer" >
					{education_place.title}
				</a>
			</div>
		</div>
	{/each}
</div>
