<script lang="ts">
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	let checked = $state(false);
</script>

<div class="flex items-center space-x-2">
	<Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
	<Label
		id="terms-label"
		for="terms"
		class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		Accept terms and conditions
	</Label>
</div>
