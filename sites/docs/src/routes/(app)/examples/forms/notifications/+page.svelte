<script lang="ts">
	import NotificationsForm from "./notifications-form.svelte";
	import type { PageData } from "./$types.js";
	import { Separator } from "$lib/registry/ui/separator/index.js";

	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Notifications</h3>
		<p class="text-muted-foreground text-sm">Configure how you receive notifications.</p>
	</div>
	<Separator />
	<NotificationsForm data={data.form} />
</div>
