<script lang="ts">
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import { useSidebar } from "$lib/registry/ui/sidebar/index.js";
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import type { Component } from "svelte";

	let {
		items,
	}: {
		items: {
			title: string;
			url: string;
			icon?: Component;
			isActive?: boolean;
			items?: {
				title: string;
				url: string;
			}[];
		}[];
	} = $props();

	const sidebar = useSidebar();
</script>

<Sidebar.Group>
	<Sidebar.Menu>
		{#each items as mainItem (mainItem.title)}
			<DropdownMenu.Root>
				<Sidebar.MenuItem>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Sidebar.MenuButton
								{...props}
								class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								{mainItem.title}
								<EllipsisIcon class="ml-auto" />
							</Sidebar.MenuButton>
						{/snippet}
					</DropdownMenu.Trigger>
					{#if mainItem.items?.length}
						<DropdownMenu.Content
							side={sidebar.isMobile ? "bottom" : "right"}
							align={sidebar.isMobile ? "end" : "start"}
							class="min-w-56 rounded-lg"
						>
							{#each mainItem.items as item (item.title)}
								<DropdownMenu.Item>
									{#snippet child({ props })}
										<a href={item.url} {...props}>{item.title}</a>
									{/snippet}
								</DropdownMenu.Item>
							{/each}
						</DropdownMenu.Content>
					{/if}
				</Sidebar.MenuItem>
			</DropdownMenu.Root>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
