<script lang="ts">
	import type { Route } from "../config.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import * as Tooltip from "$lib/registry/ui/tooltip/index.js";
	import { buttonVariants } from "$lib/registry/ui/button/index.js";

	export let isCollapsed: boolean;
	export let routes: Route[];
</script>

<div data-collapsed={isCollapsed} class="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
	<nav
		class="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2"
	>
		{#each routes as route (route)}
			{#if isCollapsed}
				<Tooltip.Root>
					<Tooltip.Trigger
						class={cn(
							buttonVariants({
								variant: route.variant,
								size: "icon",
								class: "size-9",
							}),
							route.variant === "default" &&
								"dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
						)}
					>
						<svelte:component this={route.icon} class="size-4" aria-hidden="true" />
						<span class="sr-only">{route.title}</span>
					</Tooltip.Trigger>
					<Tooltip.Content side="right" class="flex items-center gap-4">
						{route.title}
						{#if route.label}
							<span class="text-muted-foreground ml-auto">
								{route.label}
							</span>
						{/if}
					</Tooltip.Content>
				</Tooltip.Root>
			{:else}
				<Button
					href="#"
					variant={route.variant}
					size="sm"
					class={cn("justify-start", {
						"dark:bg-muted dark:hover:bg-muted dark:text-white dark:hover:text-white":
							route.variant === "default",
					})}
				>
					<svelte:component this={route.icon} class="mr-2 size-4" aria-hidden="true" />
					{route.title}
					{#if route.label}
						<span
							class={cn("ml-auto", {
								"text-background dark:text-white": route.variant === "default",
							})}
						>
							{route.label}
						</span>
					{/if}
				</Button>
			{/if}
		{/each}
	</nav>
</div>
