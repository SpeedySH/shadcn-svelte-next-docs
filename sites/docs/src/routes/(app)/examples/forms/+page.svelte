<script lang="ts">
	import type { PageData } from "./$types.js";
	import ProfileForm from "./profile-form.svelte";
	import { Separator } from "$lib/registry/ui/separator/index.js";

	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Profile</h3>
		<p class="text-muted-foreground text-sm">This is how others will see you on the site.</p>
	</div>
	<Separator />
	<ProfileForm data={data.form} />
</div>
