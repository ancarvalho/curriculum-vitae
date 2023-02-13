<script lang="ts">
	import { page } from '$app/stores';
	import ContactCard from '$lib/components/contact_card.svelte';
	import Education from '$lib/components/education.svelte';
	import NameTitleCard from '$lib/components/name_title_card.svelte';
	import ProfileImage from '$lib/components/profile_image.svelte';
	import Projects from '$lib/components/projects.svelte';
	import Skills from '$lib/components/skills.svelte';
	import Summary from '$lib/components/summary.svelte';
	import type { Content } from '$lib/entities/content';
	import content from '$lib/stores/content_store';
	import { onMount } from 'svelte';

	let contentValue: Content | undefined;

	content.subscribe((value) => contentValue = value)

	let mounted: boolean = false;

	onMount(() => {
		mounted = true;
		console.log(content);
	});
</script>

{#if mounted && contentValue}
	<header>
		<title>
			{contentValue.profile.name} | {contentValue.profile.title}
		</title>
	</header>

	<body>
		<header class="bg-gray-200/90 dark:bg-gray-800">
			<div
				class="flex flex-col mx-auto gap-4 md:gap-0 md:flex-row justify-between items-center px-4 py-8 max-w-7xl text-black dark:text-white"
			>
				<NameTitleCard profile={contentValue.profile} />

				<ProfileImage imageSrc={contentValue.profile.photo} />
				<ContactCard profile={contentValue.profile} />
			</div>
		</header>

		<main>
			<section class="bg-gray-100 dark:bg-black/90">
				<div class="flex flex-col md:flex-row mx-auto gap-4 max-w-7xl px-6 py-8">
					<div class=" w-fit md:w-[60%] text-black dark:text-white">
						<Summary summary={contentValue.summary} />
						<Projects projects={contentValue.projects} />
					</div>

					<div class="w-fit md:w-[40%] text-black dark:text-white">
						<Education education={contentValue.education} />
						<Skills skills={contentValue.skills} />
					</div>
				</div>
			</section>
		</main>
	</body>
{:else}
	<div class="">Loading...</div>
{/if}
