---
title: Navigation Menu
description: A collection of links for navigating websites.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/navigation-menu
  doc: https://bits-ui.com/docs/components/navigation-menu
  api: https://bits-ui.com/docs/components/navigation-menu#api-reference
---

<script>
    import { ComponentPreview, PMAddComp, PMInstall, Step, Steps, InstallTabs } from '$lib/components/docs'
</script>

<ComponentPreview name="navigation-menu-demo">

</ComponentPreview>

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="navigation-menu" />
{/snippet}

{#snippet manual()}
<Steps>
<Step>
Install `bits-ui`:
</Step>
<PMInstall command="bits-ui -D" />
<Step>
Copy and paste the component source files linked at the top of this page into your project.
</Step>
</Steps>
{/snippet}
</InstallTabs>

## Usage

```svelte
<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
</script>

<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <NavigationMenu.Link>Link</NavigationMenu.Link>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
```
