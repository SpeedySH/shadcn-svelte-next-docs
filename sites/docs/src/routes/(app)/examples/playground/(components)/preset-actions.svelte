<script lang="ts">
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import * as Dialog from "$lib/registry/ui/dialog/index.js";
	import * as AlertDialog from "$lib/registry/ui/alert-dialog/index.js";
	import { Button, buttonVariants } from "$lib/registry/ui/button/index.js";
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";
	import { Switch } from "$lib/registry/ui/switch/index.js";

	let open = $state(false);
	let showDeleteDialog = $state(false);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: "secondary" })}>
		<span class="sr-only">Actions</span>
		<EllipsisIcon />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item onSelect={() => (open = true)}>
			Content filter preferences
		</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.Item onSelect={() => (showDeleteDialog = true)} class="text-red-600">
			Delete preset
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
<Dialog.Root bind:open>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Content filter preferences</Dialog.Title>
			<Dialog.Description>
				The content filter flags text that may violate our content policy. It&apos;s powered
				by our moderation endpoint which is free to use to moderate your OpenAI API traffic.
				Learn more.
			</Dialog.Description>
		</Dialog.Header>
		<div class="py-6">
			<h4 class="text-muted-foreground text-sm">Playground Warnings</h4>
			<div class="flex items-start justify-between space-x-4 pt-3">
				<Switch name="show" id="show" checked />
				<Label class="grid gap-1 font-normal" for="show">
					<span class="font-semibold"> Show a warning when content is flagged </span>
					<span class="text-muted-foreground text-sm">
						A warning will be shown when sexual, hateful, violent or self-harm content
						is detected.
					</span>
				</Label>
			</div>
		</div>
		<Dialog.Footer>
			<Button variant="secondary" onclick={() => (open = false)}>Close</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
<AlertDialog.Root bind:open={showDeleteDialog}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you sure absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. This preset will no longer be accessible by you or
				others you&apos;ve shared it with.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<Button
				variant="destructive"
				onclick={() => {
					showDeleteDialog = false;
				}}
			>
				Delete
			</Button>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
