<script lang="ts">
	import { type PrimitiveElementAttributes, cn } from "$lib/utils.js";

	let { class: className, children, ...restProps }: PrimitiveElementAttributes = $props();
</script>

<div class="my-6 w-full overflow-y-auto">
	<table
		class={cn("relative w-full overflow-hidden border-none text-sm", className)}
		{...restProps}
	>
		{@render children?.()}
	</table>
</div>
