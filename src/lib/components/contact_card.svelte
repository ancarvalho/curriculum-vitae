<script lang="ts">
	import type { Profile } from '$lib/entities/profile';

	export let profile: Profile;
</script>

<div class="md:w-[40%] text-center md:text-right">
	<div class="flex flex-col">
		<div class="">
			{profile.city}
		</div>
		<div class="">
			<a href={`mailto:${profile.email}`}>
				{profile.email}
			</a>
		</div>
		<div class="">
			<a href={profile.social.github.link} target="_blank" rel="noopener noreferrer">
				{profile.social.github.name} - Github
			</a>
		</div>
	</div>
</div>
