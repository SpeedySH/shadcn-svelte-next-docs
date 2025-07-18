<script lang="ts">
	import type { FileTree } from "$lib/registry/registry-utils.js";
	import BlockViewerTree from "./block-viewer-tree.svelte";
	import { BlockViewerContext } from "./block-viewer.svelte";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import * as Collapsible from "$lib/registry/ui/collapsible/index.js";
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import FileIcon from "@lucide/svelte/icons/file";
	import FolderIcon from "@lucide/svelte/icons/folder";

	const ctx = BlockViewerContext.get();

	let { item, index }: { item: FileTree; index: number } = $props();
</script>

{#if !item.children}
	<Sidebar.MenuItem>
		<Sidebar.MenuButton
			style="--index: {index * (index === 2 ? 1.2 : 1.3)}rem"
			isActive={item.path === ctx.activeFile}
			onclick={() => {
				if (!item.path) return;
				ctx.activeFile = item.path;
			}}
			class="pl-(--index) whitespace-nowrap rounded-none hover:bg-zinc-700 hover:text-white focus:bg-zinc-700 focus:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white"
			data-index={index}
		>
			<ChevronRightIcon class="invisible" />
			<FileIcon class="size-4" />
			{item.name}
		</Sidebar.MenuButton>
	</Sidebar.MenuItem>
{:else}
	<Sidebar.MenuItem>
		<Collapsible.Root
			class="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
			open={true}
		>
			<Collapsible.Trigger
				style="--index: {index * (index === 1 ? 1 : 1.2)}rem"
				class="pl-(--index) whitespace-nowrap rounded-none hover:bg-zinc-700 hover:text-white focus-visible:bg-zinc-700 focus-visible:text-white active:bg-zinc-700 active:text-white data-[active=true]:bg-zinc-700 data-[active=true]:text-white data-[state=open]:hover:bg-zinc-700 data-[state=open]:hover:text-white"
			>
				{#snippet child({ props })}
					<Sidebar.MenuButton {...props}>
						<ChevronRightIcon class="size-4 transition-transform" />
						<FolderIcon class="size-4" />
						{item.name === "components" ? "lib/components" : item.name}
					</Sidebar.MenuButton>
				{/snippet}
			</Collapsible.Trigger>
			<Collapsible.Content>
				<Sidebar.MenuSub class="m-0 w-full border-none p-0">
					{#each item.children as subItem, key (key)}
						<BlockViewerTree item={subItem} index={index + 1} />
					{/each}
				</Sidebar.MenuSub>
			</Collapsible.Content>
		</Collapsible.Root>
	</Sidebar.MenuItem>
{/if}
