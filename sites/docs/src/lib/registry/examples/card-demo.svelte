<script lang="ts">
	import BellRingIcon from "@lucide/svelte/icons/bell-ring";
	import CheckIcon from "@lucide/svelte/icons/check";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import { Switch } from "$lib/registry/ui/switch/index.js";

	const notifications = [
		{
			title: "Your call has been confirmed.",
			description: "1 hour ago",
		},
		{
			title: "You have a new message!",
			description: "1 hour ago",
		},
		{
			title: "Your subscription is expiring soon!",
			description: "2 hours ago",
		},
	];
</script>

<Card.Root class="w-[380px]">
	<Card.Header>
		<Card.Title>Notifications</Card.Title>
		<Card.Description>You have 3 unread messages.</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class=" flex items-center space-x-4 rounded-md border p-4">
			<BellRingIcon />
			<div class="flex-1 space-y-1">
				<p class="text-sm font-medium leading-none">Push Notifications</p>
				<p class="text-muted-foreground text-sm">Send notifications to device.</p>
			</div>
			<Switch />
		</div>
		<div>
			{#each notifications as notification, idx (idx)}
				<div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
					<span class="flex size-2 translate-y-1 rounded-full bg-sky-500"></span>
					<div class="space-y-1">
						<p class="text-sm font-medium leading-none">
							{notification.title}
						</p>
						<p class="text-muted-foreground text-sm">
							{notification.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">
			<CheckIcon class="mr-2 size-4" /> Mark all as read
		</Button>
	</Card.Footer>
</Card.Root>
