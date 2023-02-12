<script lang="ts">
	import { t } from "$lib/translations";


  export let summary: string
</script>

<div class="pb-7">
  <div class="font-semibold text-xl mb-5">
    {$t("menu.summary")}
  </div>
  <div class="font-extralight text-[1em]">
    {summary}
  </div>
</div>