<script lang="ts" module>
	import { z } from "zod";
	export const formSchema = z.object({
		mobile: z.boolean().default(false),
	});
	export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
	import SuperDebug, { type Infer, type SuperValidated, superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { toast } from "svelte-sonner";
	import { browser } from "$app/environment";
	import { page } from "$app/stores";
	import * as Form from "$lib/registry/ui/form/index.js";
	import { Checkbox } from "$lib/registry/ui/checkbox/index.js";

	let { form: data = $page.data.checkboxSingle }: { form: SuperValidated<Infer<FormSchema>> } =
		$props();

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdated: ({ form: f }) => {
			if (f.valid) {
				toast.success(`You submitted ${JSON.stringify(f.data, null, 2)}`);
			} else {
				toast.error("Please fix the errors in the form.");
			}
		},
	});

	const { form: formData, enhance } = form;
</script>

<form action="/?/checkboxSingle" method="POST" class="space-y-6" use:enhance>
	<Form.Field
		{form}
		name="mobile"
		class="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
	>
		<Form.Control>
			{#snippet children({ props })}
				<Checkbox {...props} bind:checked={$formData.mobile} />
				<div class="space-y-1 leading-none">
					<Form.Label>Use different settings for my mobile devices</Form.Label>
					<Form.Description>
						You can manage your mobile notifications in the <a href="/examples/forms"
							>mobile settings</a
						> page.
					</Form.Description>
				</div>
			{/snippet}
		</Form.Control>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
	{#if browser}
		<SuperDebug data={$formData} />
	{/if}
</form>
