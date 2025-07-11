<script lang="ts">
	import SearchIcon from "@lucide/svelte/icons/search";
	import { primaryRoutes, secondaryRoutes } from "../config.js";
	import { mailStore } from "../store.js";
	import type { Account, Mail } from "../data.js";
	import AccountSwitcher from "./account-switcher.svelte";
	import MailDisplay from "./mail-display.svelte";
	import MailList from "./mail-list.svelte";
	import Nav from "./nav.svelte";
	import { cn } from "$lib/utils.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import * as Resizable from "$lib/registry/ui/resizable/index.js";
	import { Separator } from "$lib/registry/ui/select/index.js";
	import * as Tabs from "$lib/registry/ui/tabs/index.js";
	import * as Tooltip from "$lib/registry/ui/tooltip/index.js";

	let {
		accounts,
		mails,
		defaultLayout = [265, 440, 655],
		defaultCollapsed = false,
		navCollapsedSize,
	}: {
		accounts: Account[];
		mails: Mail[];
		defaultLayout?: number[];
		defaultCollapsed?: boolean;
		navCollapsedSize: number;
	} = $props();

	let isCollapsed = $state(defaultCollapsed);

	function onLayoutChange(sizes: number[]) {
		document.cookie = `PaneForge:layout=${JSON.stringify(sizes)}`;
	}

	function onCollapse() {
		isCollapsed = true;
		document.cookie = `PaneForge:collapsed=${true}`;
	}

	function onExpand() {
		isCollapsed = false;
		document.cookie = `PaneForge:collapsed=${false}`;
	}
</script>

<div class="md:hidden">
	<img src="/img/examples/mail-light.png" alt="Mail" class="block dark:hidden" />
	<img src="/img/examples/mail-dark.png" alt="Mail" class="hidden dark:block" />
</div>
<Tooltip.Provider delayDuration={0}>
	<div class="hidden flex-col md:flex">
		<Resizable.PaneGroup
			direction="horizontal"
			{onLayoutChange}
			class="h-full max-h-[800px] items-stretch"
		>
			<Resizable.Pane
				defaultSize={defaultLayout[0]}
				collapsedSize={navCollapsedSize}
				collapsible
				minSize={15}
				maxSize={20}
				{onCollapse}
				{onExpand}
				class="min-w-[50px] transition-all duration-300 ease-in-out"
			>
				<div
					class={cn(
						"flex h-[52px] items-center justify-center",
						isCollapsed ? "h-[52px]" : "px-2"
					)}
				>
					<AccountSwitcher {isCollapsed} {accounts} />
				</div>
				<Separator />
				<Nav {isCollapsed} routes={primaryRoutes} />
				<Separator />
				<Nav {isCollapsed} routes={secondaryRoutes} />
			</Resizable.Pane>
			<Resizable.Handle withHandle />
			<Resizable.Pane defaultSize={defaultLayout[1]} minSize={30}>
				<Tabs.Root value="all">
					<div class="flex items-center px-4 py-2">
						<h1 class="text-xl font-bold">Inbox</h1>
						<Tabs.List class="ml-auto">
							<Tabs.Trigger value="all" class="text-zinc-600 dark:text-zinc-200">
								All mail
							</Tabs.Trigger>
							<Tabs.Trigger value="unread" class="text-zinc-600 dark:text-zinc-200">
								Unread
							</Tabs.Trigger>
						</Tabs.List>
					</div>
					<Separator />
					<div
						class="bg-background/95 supports-[backdrop-filter]:bg-background/60 p-4 backdrop-blur"
					>
						<form>
							<div class="relative">
								<SearchIcon
									class="text-muted-foreground absolute left-2 top-[50%] size-4 translate-y-[-50%]"
								/>
								<Input placeholder="Search" class="pl-8" />
							</div>
						</form>
					</div>
					<Tabs.Content value="all" class="m-0">
						<MailList items={mails} />
					</Tabs.Content>
					<Tabs.Content value="unread" class="m-0">
						<MailList items={mails.filter((item) => !item.read)} />
					</Tabs.Content>
				</Tabs.Root>
			</Resizable.Pane>
			<Resizable.Handle withHandle />
			<Resizable.Pane defaultSize={defaultLayout[2]}>
				<MailDisplay mail={mails.find((item) => item.id === $mailStore.selected) || null} />
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</div>
</Tooltip.Provider>
