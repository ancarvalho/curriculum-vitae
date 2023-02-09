<script lang="ts">
	import type { Project } from '$lib/entities/project';
	export let projects: Project[];
</script>

<div class="pb-7">
	<div class="font-semibold text-xl mb-5">
    Projetos
  </div>
	{#each projects as project (project.link)}
		<div class="">
			<b class="font-medium text-lg">{project.name}</b> - <a href={project.link} class="text-lg italic font-extralight">{project.host}</a>
		</div>
		<div class="text-xs font-extralight">
			{project.period}
		</div>
	{/each}
</div>
