<script lang="ts">
	import type { Profile } from '$lib/entities/profile';

	export let profile: Profile;
</script>

<div class="md:w-[40%] text-center md:text-left">
	<div class="flex flex-col">
		<div class="font-semibold text-[42px] leading-[2.6rem] mb-6">
			{profile.name}
		</div>
		<div class="font-normal text-xl -mt-5">
			{profile.title}
		</div>
	</div>
</div>
