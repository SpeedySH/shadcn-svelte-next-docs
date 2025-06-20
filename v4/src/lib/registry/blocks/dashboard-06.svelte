<script lang="ts">
	import FileIcon from "@lucide/svelte/icons/file";
	import HouseIcon from "@lucide/svelte/icons/house";
	import ChartLineIcon from "@lucide/svelte/icons/chart-line";
	import ListFilterIcon from "@lucide/svelte/icons/list-filter";
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import PackageIcon from "@lucide/svelte/icons/package";
	import Package2Icon from "@lucide/svelte/icons/package-2";
	import PanelLeftIcon from "@lucide/svelte/icons/panel-left";
	import CirclePlusIcon from "@lucide/svelte/icons/circle-plus";
	import SearchIcon from "@lucide/svelte/icons/search";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import ShoppingCartIcon from "@lucide/svelte/icons/shopping-cart";
	import UsersRoundIcon from "@lucide/svelte/icons/users-round";

	import { Badge } from "$lib/registry/ui/badge/index.js";
	import * as Breadcrumb from "$lib/registry/ui/breadcrumb/index.js";
	import { Button } from "$lib/registry/ui/button/index.js";
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as DropdownMenu from "$lib/registry/ui/dropdown-menu/index.js";
	import { Input } from "$lib/registry/ui/input/index.js";
	import * as Sheet from "$lib/registry/ui/sheet/index.js";
	import * as Table from "$lib/registry/ui/table/index.js";
	import * as Tabs from "$lib/registry/ui/tabs/index.js";
	import * as Tooltip from "$lib/registry/ui/tooltip/index.js";
</script>

<div class="bg-muted/40 flex min-h-screen w-full flex-col">
	<aside class="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
		<nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
			<a
				href="##"
				class="bg-primary text-primary-foreground group flex size-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"
			>
				<Package2Icon class="size-4 transition-all group-hover:scale-110" />
				<span class="sr-only">Acme Inc</span>
			</a>
			<Tooltip.Provider>
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<a
								href="##"
								class="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
								{...props}
							>
								<HouseIcon class="size-5" />
								<span class="sr-only">Dashboard</span>
							</a>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="right">Dashboard</Tooltip.Content>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<a
								href="##"
								class="bg-accent text-accent-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
								{...props}
							>
								<ShoppingCartIcon class="size-5" />
								<span class="sr-only">Orders</span>
							</a>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="right">Orders</Tooltip.Content>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<a
								href="##"
								class="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
								{...props}
							>
								<PackageIcon class="size-5" />
								<span class="sr-only">Products</span>
							</a>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="right">Products</Tooltip.Content>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<a
								href="##"
								class="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
								{...props}
							>
								<UsersRoundIcon class="size-5" />
								<span class="sr-only">Customers</span>
							</a>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="right">Customers</Tooltip.Content>
				</Tooltip.Root>
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<a
								href="##"
								class="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
								{...props}
							>
								<ChartLineIcon class="size-5" />
								<span class="sr-only">Analytics</span>
							</a>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="right">Analytics</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
		</nav>
		<nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
			<Tooltip.Provider>
				<Tooltip.Root>
					<Tooltip.Trigger>
						{#snippet child({ props })}
							<a
								href="##"
								class="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
								{...props}
							>
								<SettingsIcon class="size-5" />
								<span class="sr-only">Settings</span>
							</a>
						{/snippet}
					</Tooltip.Trigger>
					<Tooltip.Content side="right">Settings</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
		</nav>
	</aside>
	<div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
		<header
			class="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
		>
			<Sheet.Root>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="outline" size="icon" class="sm:hidden">
							<PanelLeftIcon class="size-5" />
							<span class="sr-only">Toggle Menu</span>
						</Button>
					{/snippet}
				</Sheet.Trigger>
				<Sheet.Content side="left" class="sm:max-w-xs">
					<nav class="grid gap-6 text-lg font-medium">
						<a
							href="##"
							class="bg-primary text-primary-foreground group flex size-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
						>
							<Package2Icon class="size-5 transition-all group-hover:scale-110" />
							<span class="sr-only">Acme Inc</span>
						</a>
						<a
							href="##"
							class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
						>
							<HouseIcon class="size-5" />
							Dashboard
						</a>
						<a
							href="##"
							class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
						>
							<ShoppingCartIcon class="size-5" />
							Orders
						</a>
						<a href="##" class="text-foreground flex items-center gap-4 px-2.5">
							<PackageIcon class="size-5" />
							Products
						</a>
						<a
							href="##"
							class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
						>
							<UsersRoundIcon class="size-5" />
							Customers
						</a>
						<a
							href="##"
							class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
						>
							<ChartLineIcon class="size-5" />
							Analytics
						</a>
					</nav>
				</Sheet.Content>
			</Sheet.Root>
			<Breadcrumb.Root class="hidden md:flex">
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="##">Dashboard</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Link href="##">Products</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page>All Products</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
			<div class="relative ml-auto flex-1 md:grow-0">
				<SearchIcon class="text-muted-foreground absolute left-2.5 top-2.5 size-4" />
				<Input
					type="search"
					placeholder="Search..."
					class="bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px]"
				/>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<Button {...props} size="icon" class="overflow-hidden rounded-full">
							<img
								src="/img/placeholder-user.jpg"
								width={36}
								height={36}
								alt="Avatar"
								class="overflow-hidden rounded-full"
							/>
						</Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Settings</DropdownMenu.Item>
						<DropdownMenu.Item>Support</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Logout</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>
		<main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<Tabs.Root value="all">
				<div class="flex items-center">
					<Tabs.List>
						<Tabs.Trigger value="all">All</Tabs.Trigger>
						<Tabs.Trigger value="active">Active</Tabs.Trigger>
						<Tabs.Trigger value="draft">Draft</Tabs.Trigger>
						<Tabs.Trigger value="archived" class="hidden sm:flex">
							Archived
						</Tabs.Trigger>
					</Tabs.List>
					<div class="ml-auto flex items-center gap-2">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								{#snippet child({ props })}
									<Button {...props} size="sm" class="h-8 gap-1">
										<ListFilterIcon class="size-3.5" />
										<span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
											Filter
										</span>
									</Button>
								{/snippet}
							</DropdownMenu.Trigger>
							<DropdownMenu.Content align="end">
								<DropdownMenu.Group>
									<DropdownMenu.Label>Filter by</DropdownMenu.Label>
									<DropdownMenu.Separator />
									<DropdownMenu.CheckboxItem checked>
										Active
									</DropdownMenu.CheckboxItem>
									<DropdownMenu.CheckboxItem>Draft</DropdownMenu.CheckboxItem>
									<DropdownMenu.CheckboxItem>Archived</DropdownMenu.CheckboxItem>
								</DropdownMenu.Group>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						<Button size="sm" variant="outline" class="h-8 gap-1">
							<FileIcon class="size-3.5" />
							<span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
								Export
							</span>
						</Button>
						<Button size="sm" class="h-8 gap-1">
							<CirclePlusIcon class="size-3.5" />
							<span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
								Add Product
							</span>
						</Button>
					</div>
				</div>
				<Tabs.Content value="all">
					<Card.Root
						data-x-chunk-name="dashboard-06-chunk-0"
						data-x-chunk-description="A list of products in a table with actions. Each row has an image, name, status, price, total sales, created at and actions."
					>
						<Card.Header>
							<Card.Title>Products</Card.Title>
							<Card.Description>
								Manage your products and view their sales performance.
							</Card.Description>
						</Card.Header>
						<Card.Content>
							<Table.Root>
								<Table.Header>
									<Table.Row>
										<Table.Head class="hidden w-[100px] sm:table-cell">
											<span class="sr-only">Image</span>
										</Table.Head>
										<Table.Head>Name</Table.Head>
										<Table.Head>Status</Table.Head>
										<Table.Head class="hidden md:table-cell">Price</Table.Head>
										<Table.Head class="hidden md:table-cell">
											Total Sales
										</Table.Head>
										<Table.Head class="hidden md:table-cell">
											Created at
										</Table.Head>
										<Table.Head>
											<span class="sr-only">Actions</span>
										</Table.Head>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									<Table.Row>
										<Table.Cell class="hidden sm:table-cell">
											<img
												alt="Product example"
												class="aspect-square rounded-md object-cover"
												height="64"
												src="/img/placeholder.svg"
												width="64"
											/>
										</Table.Cell>
										<Table.Cell class="font-medium">
											Laser Lemonade Machine
										</Table.Cell>
										<Table.Cell>
											<Badge variant="outline">Draft</Badge>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											$499.99
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">25</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											2023-07-12 10:42 AM
										</Table.Cell>
										<Table.Cell>
											<DropdownMenu.Root>
												<DropdownMenu.Trigger>
													{#snippet child({ props })}
														<Button
															{...props}
															size="icon"
															variant="ghost"
														>
															<EllipsisIcon class="size-4" />
															<span class="sr-only">Toggle menu</span>
														</Button>
													{/snippet}
												</DropdownMenu.Trigger>
												<DropdownMenu.Content align="end">
													<DropdownMenu.Group>
														<DropdownMenu.Label>
															Actions
														</DropdownMenu.Label>
														<DropdownMenu.Item>Edit</DropdownMenu.Item>
														<DropdownMenu.Item>Delete</DropdownMenu.Item
														>
													</DropdownMenu.Group>
												</DropdownMenu.Content>
											</DropdownMenu.Root>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell class="hidden sm:table-cell">
											<img
												alt="Product"
												class="aspect-square rounded-md object-cover"
												height="64"
												src="/img/placeholder.svg"
												width="64"
											/>
										</Table.Cell>
										<Table.Cell class="font-medium">
											Hypernova Headphones
										</Table.Cell>
										<Table.Cell>
											<Badge variant="outline">Active</Badge>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											$129.99
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">100</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											2023-10-18 03:21 PM
										</Table.Cell>
										<Table.Cell>
											<DropdownMenu.Root>
												<DropdownMenu.Trigger>
													{#snippet child({ props })}
														<Button
															{...props}
															aria-haspopup="true"
															size="icon"
															variant="ghost"
														>
															<EllipsisIcon class="size-4" />
															<span class="sr-only">Toggle menu</span>
														</Button>
													{/snippet}
												</DropdownMenu.Trigger>
												<DropdownMenu.Content align="end">
													<DropdownMenu.Group>
														<DropdownMenu.Label>
															Actions
														</DropdownMenu.Label>
														<DropdownMenu.Item>Edit</DropdownMenu.Item>
														<DropdownMenu.Item>Delete</DropdownMenu.Item
														>
													</DropdownMenu.Group>
												</DropdownMenu.Content>
											</DropdownMenu.Root>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell class="hidden sm:table-cell">
											<img
												alt="Product"
												class="aspect-square rounded-md object-cover"
												height="64"
												src="/img/placeholder.svg"
												width="64"
											/>
										</Table.Cell>
										<Table.Cell class="font-medium">
											AeroGlow Desk Lamp
										</Table.Cell>
										<Table.Cell>
											<Badge variant="outline">Active</Badge>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">$39.99</Table.Cell>
										<Table.Cell class="hidden md:table-cell">50</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											2023-11-29 08:15 AM
										</Table.Cell>
										<Table.Cell>
											<DropdownMenu.Root>
												<DropdownMenu.Trigger>
													{#snippet child({ props })}
														<Button
															{...props}
															aria-haspopup="true"
															size="icon"
															variant="ghost"
														>
															<EllipsisIcon class="size-4" />
															<span class="sr-only">Toggle menu</span>
														</Button>
													{/snippet}
												</DropdownMenu.Trigger>
												<DropdownMenu.Content align="end">
													<DropdownMenu.Group>
														<DropdownMenu.Label>
															Actions
														</DropdownMenu.Label>
														<DropdownMenu.Item>Edit</DropdownMenu.Item>
														<DropdownMenu.Item>Delete</DropdownMenu.Item
														>
													</DropdownMenu.Group>
												</DropdownMenu.Content>
											</DropdownMenu.Root>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell class="hidden sm:table-cell">
											<img
												alt="Product"
												class="aspect-square rounded-md object-cover"
												height="64"
												src="/img/placeholder.svg"
												width="64"
											/>
										</Table.Cell>
										<Table.Cell class="font-medium">
											TechTonic Energy Drink
										</Table.Cell>
										<Table.Cell>
											<Badge variant="secondary">Draft</Badge>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">$2.99</Table.Cell>
										<Table.Cell class="hidden md:table-cell">0</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											2023-12-25 11:59 PM
										</Table.Cell>
										<Table.Cell>
											<DropdownMenu.Root>
												<DropdownMenu.Trigger>
													{#snippet child({ props })}
														<Button
															{...props}
															aria-haspopup="true"
															size="icon"
															variant="ghost"
														>
															<EllipsisIcon class="size-4" />
															<span class="sr-only">Toggle menu</span>
														</Button>
													{/snippet}
												</DropdownMenu.Trigger>
												<DropdownMenu.Content align="end">
													<DropdownMenu.Group>
														<DropdownMenu.Label>
															Actions
														</DropdownMenu.Label>
														<DropdownMenu.Item>Edit</DropdownMenu.Item>
														<DropdownMenu.Item>Delete</DropdownMenu.Item
														>
													</DropdownMenu.Group>
												</DropdownMenu.Content>
											</DropdownMenu.Root>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell class="hidden sm:table-cell">
											<img
												alt="Product"
												class="aspect-square rounded-md object-cover"
												height="64"
												src="/img/placeholder.svg"
												width="64"
											/>
										</Table.Cell>
										<Table.Cell class="font-medium">
											Gamer Gear Pro Controller
										</Table.Cell>
										<Table.Cell>
											<Badge variant="outline">Active</Badge>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">$59.99</Table.Cell>
										<Table.Cell class="hidden md:table-cell">75</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											2024-01-01 12:00 AM
										</Table.Cell>
										<Table.Cell>
											<DropdownMenu.Root>
												<DropdownMenu.Trigger>
													{#snippet child({ props })}
														<Button
															{...props}
															aria-haspopup="true"
															size="icon"
															variant="ghost"
														>
															<EllipsisIcon class="size-4" />
															<span class="sr-only">Toggle menu</span>
														</Button>
													{/snippet}
												</DropdownMenu.Trigger>
												<DropdownMenu.Content align="end">
													<DropdownMenu.Group>
														<DropdownMenu.Label>
															Actions
														</DropdownMenu.Label>
														<DropdownMenu.Item>Edit</DropdownMenu.Item>
														<DropdownMenu.Item>Delete</DropdownMenu.Item
														>
													</DropdownMenu.Group>
												</DropdownMenu.Content>
											</DropdownMenu.Root>
										</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell class="hidden sm:table-cell">
											<img
												alt="Product"
												class="aspect-square rounded-md object-cover"
												height="64"
												src="/img/placeholder.svg"
												width="64"
											/>
										</Table.Cell>
										<Table.Cell class="font-medium">
											Luminous VR Headset
										</Table.Cell>
										<Table.Cell>
											<Badge variant="outline">Active</Badge>
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											$199.99
										</Table.Cell>
										<Table.Cell class="hidden md:table-cell">30</Table.Cell>
										<Table.Cell class="hidden md:table-cell">
											2024-02-14 02:14 PM
										</Table.Cell>
										<Table.Cell>
											<DropdownMenu.Root>
												<DropdownMenu.Trigger>
													{#snippet child({ props })}
														<Button
															{...props}
															aria-haspopup="true"
															size="icon"
															variant="ghost"
														>
															<EllipsisIcon class="size-4" />
															<span class="sr-only">Toggle menu</span>
														</Button>
													{/snippet}
												</DropdownMenu.Trigger>
												<DropdownMenu.Content align="end">
													<DropdownMenu.Group>
														<DropdownMenu.Label>
															Actions
														</DropdownMenu.Label>
														<DropdownMenu.Item>Edit</DropdownMenu.Item>
														<DropdownMenu.Item>Delete</DropdownMenu.Item
														>
													</DropdownMenu.Group>
												</DropdownMenu.Content>
											</DropdownMenu.Root>
										</Table.Cell>
									</Table.Row>
								</Table.Body>
							</Table.Root>
						</Card.Content>
						<Card.Footer>
							<div class="text-muted-foreground text-xs">
								Showing <strong>1-10</strong> of <strong>32</strong> products
							</div>
						</Card.Footer>
					</Card.Root>
				</Tabs.Content>
			</Tabs.Root>
		</main>
	</div>
</div>
