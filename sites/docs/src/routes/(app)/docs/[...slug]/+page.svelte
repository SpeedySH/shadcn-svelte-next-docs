<script lang="ts">
	import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
	import CodeIcon from "@lucide/svelte/icons/code";
	import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
	import type { PageData } from "./$types.js";
	import DocsPager from "$lib/components/docs/docs-pager.svelte";
	import TableOfContents from "$lib/components/docs/table-of-contents.svelte";
	import { badgeVariants } from "$lib/registry/ui/badge/index.js";
	import { cn } from "$lib/utils.js";
	import Carbon from "$lib/components/docs/carbon.svelte";
	import { page } from "$app/state";

	let { data }: { data: PageData } = $props();

	const Markdown = $derived(data.component);
	const doc = $derived(data.metadata);
	const componentSource = $derived(data.metadata.links?.source);
	const apiLink = $derived(doc.links?.api);
	const docLink = $derived(doc.links?.doc);
</script>

<main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
	<div class="mx-auto w-full min-w-0 max-w-2xl">
		<div class="text-muted-foreground mb-4 flex items-center space-x-1 text-sm leading-none">
			<a href="/docs" class="truncate"> Docs </a>
			<ChevronRightIcon class="size-3.5" />
			<div class="text-foreground">{doc.title}</div>
		</div>
		<div class="space-y-2">
			<h1 class={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
				{doc.title}
			</h1>
			{#if doc.description}
				<p class="text-muted-foreground text-balance text-base">
					{doc.description}
				</p>
			{/if}
		</div>
		{#if apiLink || componentSource || docLink}
			<div class="flex items-center space-x-2 pt-4">
				{#if docLink}
					<a
						href={docLink}
						target="_blank"
						rel="noreferrer"
						class={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
					>
						Docs
						<ExternalLinkIcon class="size-3" />
					</a>
				{/if}
				{#if apiLink}
					<a
						href={apiLink}
						target="_blank"
						rel="noreferrer"
						class={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
					>
						API Reference
						<ExternalLinkIcon class="size-3" />
					</a>
				{/if}
				{#if componentSource}
					<a
						href={componentSource}
						target="_blank"
						rel="noreferrer"
						class={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
					>
						Component Source
						<CodeIcon class="size-3" />
					</a>
				{/if}
			</div>
		{/if}
		<div class="pb-12 pt-8" id="markdown">
			<div class="markdown">
				<Markdown form={data.form} />
			</div>
		</div>
		<DocsPager />
	</div>
	<div class="hidden text-sm xl:block">
		<div class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
			<div class="no-scrollbar h-full overflow-auto pb-10">
				{#key page.url.pathname}
					<TableOfContents />
				{/key}
			</div>
			<div class="z-10 pt-4">
				<Carbon />
			</div>
		</div>
	</div>
</main>
