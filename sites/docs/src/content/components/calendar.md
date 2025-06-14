---
title: Calendar
description: A calendar component that allows users to select dates.
component: true
links:
  source: https://github.com/huntabyte/shadcn-svelte/tree/next/sites/docs/src/lib/registry/ui/calendar
  doc: https://bits-ui.com/docs/components/calendar
  api: https://bits-ui.com/docs/components/calendar#api-reference
---

<script>
    import { ComponentPreview, Callout, PMAddComp, PMInstall, Step, Steps, InstallTabs } from '$lib/components/docs';
</script>

<ComponentPreview name="calendar-demo">

<div></div>

</ComponentPreview>

## About

The `<Calendar />` component is built on top of the [Bits Calendar](https://www.bits-ui.com/docs/components/calendar) component, which uses the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package to handle dates.

If you're looking for a range calendar, check out the [Range Calendar](/docs/components/range-calendar) component.

## Installation

<InstallTabs>
{#snippet cli()}
<PMAddComp name="calendar" />
{/snippet}
{#snippet manual()}
<Steps>

### Install `bits-ui` and `@internationalized/date`:

<PMInstall command="bits-ui @internationalized/date -D" />

### Copy and paste the component source files linked at the top of this page into your project.

</Steps>
{/snippet}
</InstallTabs>

## Date Picker

You can use the `<Calendar />` component to build a date picker. See the [Date Picker](/docs/components/date-picker) page for more information.

## Examples

### Form

<ComponentPreview name="date-picker-demo">

<div></div>

</ComponentPreview>

## Advanced Customization

The `<Calendar />` component can be combined with other components to create a more complex calendar.

<Callout>
    By default, we export the combined Calendar component as <code>Calendar</code> as there are quite a few pieces that need to be combined to create it. We're modifying that component in the examples below.
</Callout>

### Month & Year Selects

Here's an example of how you could create a calendar with month and year select dropdowns instead of the previous and next buttons.

<ComponentPreview name="calendar-with-selects">

<div></div>

</ComponentPreview>
