---
title: Introduction
description: Re-usable components built with Bits UI and Tailwind CSS.
---

<script>
  import * as Accordion from '$lib/registry/ui/accordion';
  import { Callout } from '$lib/components/docs';
</script>

An unofficial, community-led [Svelte](https://svelte.dev) port of [shadcn/ui](https://ui.shadcn.com). We are not affiliated with [shadcn](https://twitter.com/shadcn), but we did get his blessing before creating a Svelte version of his work. This project was born out of the need for a similar project for the Svelte ecosystem.

**This is not a component library. It is how you build your component library.**

You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.

This approach works well until you need to customize a component to fit your design system or require one that isn’t included in the library. **Often, you end up wrapping library components, writing workarounds to override styles, or mixing components from different libraries with incompatible APIs.**

This is what shadcn-svelte aims to solve. It is built around the following principles:

- **Open Code:** The top layer of your component code is open for modification.
- **Composition:** Every component uses a common, composable interface, making them predictable.
- **Distribution:** A flat-file schema and command-line tool make it easy to distribute components.
- **Beautiful Defaults:** Carefully chosen default styles, so you get great design out-of-the-box.
- **AI-Ready:** Open code for LLMs to read, understand, and improve.

## Open Code

shadcn-svelte hands you the actual component code. You have full control to customize and extend the components to your needs. This means:

- **Full Transparency:** You see exactly how each component is built.
- **Easy Customization:** Modify any part of a component to fit your design and functionality requirements.
- **AI Integration:** Access to the code makes it straightforward for LLMs to read, understand, and even improve your components.

_In a typical library, if you need to change a button’s behavior, you have to override styles or wrap the component. With shadcn-svelte, you simply edit the button code directly._

<Accordion.Root type="single">

<Accordion.Item value="faq-1" class="border-none">

<Accordion.Trigger>
How do I pull upstream updates in an Open Code approach?
</Accordion.Trigger>

<Accordion.Content>

shadcn-svelte follows a headless component architecture. This means the core of your app can receive fixes by updating your dependencies, for instance, bits-ui or paneforge.

<p class="mt-4">
The topmost layer, i.e., the one closest to your design system, is not
        coupled with the implementation of the library. It stays open for
        modification.
</p>
</Accordion.Content>
</Accordion.Item>
</Accordion.Root>

## Composition

Every component in shadcn-svelte shares a common, composable interface. **If a component does not exist, we bring it in, make it composable, and adjust its style to match and work with the rest of the design system.**

_A shared, composable interface means it's predictable for both your team and LLMs. You are not learning different APIs for every new component. Even for third-party ones._

## Distribution

shadcn-svelte is also a code distribution system. It defines a schema for components and a CLI to distribute them.

- **Schema:** A flat-file structure that defines the components, their dependencies, and properties.
- **CLI:** A command-line tool to distribute and install components across projects with cross-framework support.

_You can use the schema to distribute your components to other projects or have AI generate completely new components based on existing schema._

## Beautiful Defaults

shadcn-svelte comes with a large collection of components that have carefully chosen default styles. They are designed to look good on their own and to work well together as a consistent system:

- **Good Out-of-the-Box:** Your UI has a clean and minimal look without extra work.
- **Unified Design:** Components naturally fit with one another. Each component is built to match the others, keeping your UI consistent.
- **Easily Customizable:** If you want to change something, it's simple to override and extend the defaults.

## AI-Ready

The design of shadcn-svelte makes it easy for AI tools to work with your code. Its open code and consistent API allow AI models to read, understand, and even generate new components.

_An AI model can learn how your components work and suggest improvements or even create new components that integrate with your existing design._
