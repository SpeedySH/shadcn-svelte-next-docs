<script lang="ts">
	import ActivityIcon from "@lucide/svelte/icons/activity";
	import CreditCardIcon from "@lucide/svelte/icons/credit-card";
	import DollarSignIcon from "@lucide/svelte/icons/dollar-sign";
	import DownloadIcon from "@lucide/svelte/icons/download";
	import UsersIcon from "@lucide/svelte/icons/users";
	import DashboardMainNav from "./main-nav.svelte";
	import Overview from "./overview.svelte";
	import RecentSales from "./recent-sales.svelte";
	import Search from "./search.svelte";
	import TeamSwitcher from "./team-switcher.svelte";
	import UserNav from "./user-nav.svelte";

	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Tabs from "$lib/registry/ui/tabs/index.js";
	import DatePickerWithRange from "$lib/registry/examples/date-picker-with-range.svelte";
</script>

<div class="md:hidden">
	<img src="/img/examples/dashboard-light.png" alt="Dashboard" class="block dark:hidden" />
	<img src="/img/examples/dashboard-dark.png" alt="Dashboard" class="hidden dark:block" />
</div>
<div class="hidden flex-col md:flex">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<TeamSwitcher />
			<DashboardMainNav class="mx-6" />
			<div class="ml-auto flex items-center space-x-4">
				<Search />
				<UserNav />
			</div>
		</div>
	</div>
	<div class="flex-1 space-y-4 p-8 pt-6">
		<div class="flex items-center justify-between space-y-2">
			<h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
			<div class="flex items-center space-x-2">
				<DatePickerWithRange />
				<Button size="sm">
					<DownloadIcon class="mr-2 size-4" />
					Download
				</Button>
			</div>
		</div>
		<Tabs.Root value="overview" class="space-y-4">
			<Tabs.List>
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="analytics" disabled>Analytics</Tabs.Trigger>
				<Tabs.Trigger value="reports" disabled>Reports</Tabs.Trigger>
				<Tabs.Trigger value="notifications" disabled>Notifications</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="overview" class="space-y-4">
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card.Root>
						<Card.Header
							class="flex flex-row items-center justify-between space-y-0 pb-2"
						>
							<Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
							<DollarSignIcon class="text-muted-foreground size-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">$45,231.89</div>
							<p class="text-muted-foreground text-xs">+20.1% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header
							class="flex flex-row items-center justify-between space-y-0 pb-2"
						>
							<Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
							<UsersIcon class="text-muted-foreground size-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+2350</div>
							<p class="text-muted-foreground text-xs">+180.1% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header
							class="flex flex-row items-center justify-between space-y-0 pb-2"
						>
							<Card.Title class="text-sm font-medium">Sales</Card.Title>
							<CreditCardIcon class="text-muted-foreground size-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+12,234</div>
							<p class="text-muted-foreground text-xs">+19% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header
							class="flex flex-row items-center justify-between space-y-0 pb-2"
						>
							<Card.Title class="text-sm font-medium">Active Now</Card.Title>
							<ActivityIcon class="text-muted-foreground size-4" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+573</div>
							<p class="text-muted-foreground text-xs">+201 since last hour</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card.Root class="col-span-4">
						<Card.Header>
							<Card.Title>Overview</Card.Title>
						</Card.Header>
						<Card.Content>
							<Overview />
						</Card.Content>
					</Card.Root>
					<Card.Root class="col-span-3">
						<Card.Header>
							<Card.Title>Recent Sales</Card.Title>
							<Card.Description>You made 265 sales this month.</Card.Description>
						</Card.Header>
						<Card.Content>
							<RecentSales />
						</Card.Content>
					</Card.Root>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
