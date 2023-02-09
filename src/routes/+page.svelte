<script lang="ts">
	import ContactCard from '$lib/components/contact_card.svelte';
	import Education from '$lib/components/education.svelte';
	import NameTitleCard from '$lib/components/name_title_card.svelte';
	import ProfileImage from '$lib/components/profile_image.svelte';
	import Projects from '$lib/components/projects.svelte';
	import Skills from '$lib/components/skills.svelte';
	import Summary from '$lib/components/summary.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { profile, summary, projects, education, skills } = data.data;
</script>


<header>
	<title>
		{profile.name} | {profile.title}
	</title>
</header>

<body>
	<header class="bg-gray-800">
		<div
			class="flex flex-col mx-auto gap-4 md:gap-0 md:flex-row justify-between items-center px-4 py-8 max-w-7xl"
		>
			<NameTitleCard {profile} />
			<ProfileImage imageSrc={profile.photo} />
			<ContactCard {profile} />
		</div>
	</header>
	<main>
		<section class="bg-black/90">
			<div class="flex flex-col md:flex-row mx-auto gap-4 max-w-7xl px-6 py-8">
			
				<div class=" w-fit md:w-[60%] ">
					<Summary {summary} />
					<Projects {projects} />
				</div>

				<div class="w-fit md:w-[40%]">
					<Education {education} />
					<Skills {skills} />
				</div>

			</div>
		</section>
	</main>
</body>
