<script lang="ts">
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
	import * as Avatar from "$lib/registry/ui/avatar/index.js";
	import { buttonVariants } from "$lib/registry/ui/button/index.js";
	import { cn } from "$lib/utils.js";
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class={cn(buttonVariants({ variant: "ghost", class: "relative size-8 rounded-full" }))}
	>
		<Avatar.Root class="size-8">
			<Avatar.Image src="/avatars/01.png" alt="@shadcn" />
			<Avatar.Fallback>SC</Avatar.Fallback>
		</Avatar.Root>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="end">
		<DropdownMenu.Group>
			<DropdownMenu.Label class="font-normal">
				<div class="flex flex-col space-y-1">
					<p class="text-sm font-medium leading-none">shadcn</p>
					<p class="text-muted-foreground text-xs leading-none">m@example.com</p>
				</div>
			</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Group>
				<DropdownMenu.Item>
					Profile
					<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					Billing
					<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					Settings
					<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
				<DropdownMenu.Item>New Team</DropdownMenu.Item>
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>
				Log out
				<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
