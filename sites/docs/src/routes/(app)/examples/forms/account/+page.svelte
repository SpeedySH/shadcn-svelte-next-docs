<script lang="ts">
	import AccountForm from "./account-form.svelte";
	import type { PageData } from "./$types.js";
	import { Separator } from "$lib/registry/ui/separator/index.js";

	let { data }: { data: PageData } = $props();
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Account</h3>
		<p class="text-muted-foreground text-sm">
			Update your account settings. Set your preferred language and timezone.
		</p>
	</div>
	<Separator />
	<AccountForm data={data.form} />
</div>
