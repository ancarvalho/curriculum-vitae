<script lang="ts">
	import { t } from "$lib/translations";


	export let skills: string[];
</script>

<div class="pb-7">
	<div class="font-semibold text-xl mb-5">  {$t("menu.skills")}</div>
	<div class="">
		<ul class="flex flex-wrap justify-start items-center pb-4 gap-2">
			{#each skills as skill (skill)}
				<li class="border border-black dark:border-white border-spacing-7 px-[15px] py-[6px] rounded-lg">
					{skill}
				</li>
			{/each}
		</ul>
	</div>
</div>
