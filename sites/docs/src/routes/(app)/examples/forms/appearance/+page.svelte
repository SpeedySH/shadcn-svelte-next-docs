<script lang="ts">
	import type { PageData } from "./$types.js";
	import AppearanceForm from "./appearance-form.svelte";
	import { Separator } from "$lib/registry/ui/separator/index.js";

	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Appearance</h3>
		<p class="text-muted-foreground text-sm">
			Customize the appearance of the app. Automatically switch between day and night themes.
		</p>
	</div>
	<Separator />
	<AppearanceForm data={data.form} />
</div>
