<script lang="ts">
	import CommandMenu from "$lib/components/docs/command-menu.svelte";
	import MainNav from "$lib/components/docs/nav/main-nav.svelte";
	import MobileNav from "$lib/components/docs/nav/mobile-nav.svelte";
	import { siteConfig } from "$lib/config/site.js";
	import Button from "$lib/registry/ui/button/button.svelte";
	import ModeSwitcher from "$lib/components/docs/mode-switcher.svelte";
	import GitHubIcon from "$lib/components/docs/icons/github.svelte";
</script>

<header
	class="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
>
	<div class="container-wrapper">
		<div class="container flex h-14 items-center gap-2 md:gap-4">
			<MainNav />
			<MobileNav />
			<div class="ml-auto flex flex-1 items-center gap-2 md:justify-end">
				<div class="w-full flex-1 md:flex md:w-auto md:flex-none">
					<CommandMenu />
				</div>
				<nav class="flex items-center gap-0.5">
					<Button
						variant="ghost"
						size="icon"
						class="size-8 px-0"
						href={siteConfig.links.github}
						target="_blank"
						rel="noreferrer"
					>
						<GitHubIcon class="size-4" />
						<span class="sr-only">GitHub</span>
					</Button>
					<ModeSwitcher />
				</nav>
			</div>
		</div>
	</div>
</header>
