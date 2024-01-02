<script lang="ts">
	import { c } from "$lib/store/i18n";
</script>

<div class="md:w-[40%] text-center md:text-right">
	<div class="flex flex-col">
		<div class="">
			{$c.profile.place}
		</div>
		<div class="">
			<a  class="hover:text-slate-400" href={`mailto:${$c.profile.email}`}>
				{$c.profile.email}
			</a>
		</div>
		<div class="flex flex-col">
			{#each $c.profile.social as s}
				<a class="hover:text-slate-400" href={s.link} target="_blank" rel="noopener noreferrer">
					{s.network} - {s.name}
				</a>
			{/each}
		</div>
	</div>
</div>
