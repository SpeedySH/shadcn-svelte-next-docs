<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";
	import ClipboardIcon from "@lucide/svelte/icons/clipboard";
	import { cn } from "$lib/utils.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Tooltip from "$lib/registry/ui/tooltip/index.js";
	import type { ComponentProps } from "svelte";

	let {
		class: className,
		code,
		...restProps
	}: ComponentProps<typeof Button> & { code: string } = $props();
	let hasCopied = $state(false);
</script>

<Tooltip.Root>
	<Tooltip.Trigger>
		{#snippet child({ props })}
			<Button
				size="icon"
				variant="outline"
				{...props}
				class={cn("[&_svg]-size-3.5 size-7 rounded-[6px]", className)}
				onclick={() => {
					navigator.clipboard.writeText(code);
					hasCopied = true;
				}}
				{...restProps}
			>
				<span class="sr-only">Copy</span>
				{#if hasCopied}
					<CheckIcon />
				{:else}
					<ClipboardIcon />
				{/if}
			</Button>
		{/snippet}
	</Tooltip.Trigger>
	<Tooltip.Content class="bg-black text-white" arrowClasses="bg-black">Copy code</Tooltip.Content>
</Tooltip.Root>
