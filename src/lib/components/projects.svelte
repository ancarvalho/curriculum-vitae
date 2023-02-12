<script lang="ts">
	import type { Project } from '$lib/entities/project';
	import { t } from '$lib/translations';
	export let projects: Project[];
</script>

<div class="pb-7">
	<div class="font-semibold text-xl mb-5">
    {$t("menu.projects")}
  </div>
	{#each projects as project (project.link)}
	<div class="pb-4">
		<div class="">
			<b class="font-medium text-lg">{project.name}</b> - <a href={project.link} class="text-lg italic font-extralight">{project.host}</a>
		</div>
		<div class="text-xs font-extralight">
			{project.period}
		</div>
		<ul class="ml-[2em] list-disc mt-[1em]">
			{#each project.descriptions as description (description) }
				<li>
					{description}
				</li>
			{/each}
		</ul></div>
	{/each}
</div>
