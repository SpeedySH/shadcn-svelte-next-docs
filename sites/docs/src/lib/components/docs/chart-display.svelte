<script lang="ts" module>
	import type { RegistryItem } from "@shadcn-svelte/registry";
	export type Chart = RegistryItem & { highlightedCode: string };
</script>

<script lang="ts">
	import { cn } from "$lib/utils.js";
	import ChartToolbar from "./chart-toolbar.svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		name,
		class: className,
		children,
		chartData,
	}: HTMLAttributes<HTMLDivElement> & {
		name: string;
		chartData: (RegistryItem & { highlightedCode: string })[];
	} = $props();

	const chart = $derived(chartData.find((c) => c.name === name));
</script>

{#if chart}
	<div
		class={cn(
			"themes-wrapper group relative flex flex-col overflow-hidden rounded-xl border shadow transition-all duration-200 ease-in-out hover:z-30",
			className
		)}
	>
		<ChartToolbar
			{chart}
			class="bg-card text-card-foreground relative z-20 flex justify-end border-b px-3 py-2.5"
		>
			{@render children?.()}
		</ChartToolbar>
		<div class="relative z-10 [&>div]:rounded-none [&>div]:border-none [&>div]:shadow-none">
			{@render children?.()}
		</div>
	</div>
{/if}
