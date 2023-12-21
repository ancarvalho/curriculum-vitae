<script lang="ts">
	import {  c } from "$lib/store/i18n";
</script>

<div class="md:w-[40%] text-center md:text-left">
	<div class="flex flex-col">
		<div class="font-semibold text-[42px] leading-[2.6rem] mb-6">
			{$c.profile.name}
		</div>
		<div class="font-normal text-xl -mt-5">
			{$c.profile.title}
		</div>
	</div>
</div>