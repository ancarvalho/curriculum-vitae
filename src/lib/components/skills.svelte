<script lang="ts">
	export let skills: string[];
</script>

<div class="pb-7">
	<div class="font-semibold text-xl mb-5">Skills</div>
	<div class="">
		<ul class="flex flex-wrap justify-start items-center pb-4 gap-2 dark:text-white">
			{#each skills as skill (skill)}
				<li class="border border-spacing-7 px-[15px] py-[6px] rounded-lg">
					{skill}
				</li>
			{/each}
		</ul>
	</div>
</div>
