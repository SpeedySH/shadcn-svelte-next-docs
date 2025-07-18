---
title: Avatar
description: An image element with a fallback for representing the user.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/avatar
  doc: https://bits-ui.com/docs/components/avatar
  api: https://bits-ui.com/docs/components/avatar#api-reference
---

<script>
  import { ComponentPreview, PMAddComp, PMInstall, Step, Steps, InstallTabs } from '$lib/components/docs';
</script>

<ComponentPreview name="avatar-demo">

<div></div>

</ComponentPreview>

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="avatar" />
{/snippet}
{#snippet manual()}
<Steps>

### Install `bits-ui`:

<PMInstall command="bits-ui -D" />

### Copy and paste the component source files linked at the top of this page into your project.

</Steps>
{/snippet}
</InstallTabs>

## Usage

```svelte
<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<Avatar.Root>
  <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
  <Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>
```
