<script lang="ts">
	import CircleIcon from "@lucide/svelte/icons/circle";
	import FileIcon from "@lucide/svelte/icons/file";
	import LaptopIcon from "@lucide/svelte/icons/laptop";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { type ComponentProps } from "svelte";
	import { resetMode, setMode } from "mode-watcher";
	import * as Command from "$lib/registry/ui/command/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import { docsConfig } from "$lib/config/docs.js";

	let { ...restProps }: ComponentProps<typeof Button> = $props();

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = true;
		}
	}

	function runCommand(cmd: () => void) {
		open = false;
		cmd();
	}

	const mainNav = docsConfig.mainNav.filter((item) => !item.external);
	const sidebarNav = docsConfig.sidebarNav;
</script>

<svelte:document onkeydown={handleKeydown} />

<Button
	variant="outline"
	class={cn(
		"bg-muted/50 text-muted-foreground relative h-8 w-full justify-start rounded-[0.5rem] text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
	)}
	onclick={() => (open = true)}
	{...restProps}
>
	<span class="hidden lg:inline-flex">Search documentation...</span>
	<span class="inline-flex lg:hidden">Search...</span>
	<kbd
		class="bg-muted pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
	>
		<span class="text-xs">⌘</span>K
	</kbd>
</Button>
<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search" />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Links" value="Links">
			{#each mainNav as navItem (navItem.title)}
				<Command.LinkItem
					value={navItem.title}
					href={navItem.href}
					onSelect={() => (open = false)}
				>
					<FileIcon class="mr-2 size-4" />
					{navItem.title}
				</Command.LinkItem>
			{/each}
		</Command.Group>
		{#each sidebarNav as group (group.title)}
			<Command.Group heading={group.title} value={group.title}>
				{#each group.items as navItem (navItem.title)}
					<Command.LinkItem
						value={navItem.title}
						href={navItem.href}
						onSelect={() => (open = false)}
					>
						<div class="mr-2 flex size-4 items-center justify-center">
							<CircleIcon class="size-3" />
						</div>
						{navItem.title}
					</Command.LinkItem>
				{/each}
			</Command.Group>
		{/each}
		<Command.Separator />
		<Command.Group heading="Theme" value="Theme">
			<Command.Item value="light" onSelect={() => runCommand(() => setMode("light"))}>
				<SunIcon class="mr-2 size-4" />
				Light
			</Command.Item>
			<Command.Item value="dark" onSelect={() => runCommand(() => setMode("dark"))}>
				<MoonIcon class="mr-2 size-4" />
				Dark
			</Command.Item>
			<Command.Item value="system" onSelect={() => runCommand(() => resetMode())}>
				<LaptopIcon class="mr-2 size-4" />
				System
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
