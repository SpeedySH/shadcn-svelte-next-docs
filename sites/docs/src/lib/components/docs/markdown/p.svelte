<script lang="ts">
	import { type PrimitiveElementAttributes, cn } from "$lib/utils.js";

	let { class: className, children, ...restProps }: PrimitiveElementAttributes = $props();
</script>

<p class={cn("leading-[1.65rem] [&:not(:first-child)]:mt-6", className)} {...restProps}>
	{@render children?.()}
</p>
