<script lang="ts">
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import { scaleUtc } from "d3-scale";
	import { curveNatural } from "d3-shape";
	import { AreaChart } from "layerchart";
	import TrendingUpIcon from "@lucide/svelte/icons/trending-up";

	const chartData = [
		{ date: new Date("2024-01-01"), desktop: 186, mobile: 80 },
		{ date: new Date("2024-02-01"), desktop: 305, mobile: 200 },
		{ date: new Date("2024-03-01"), desktop: 237, mobile: 120 },
		{ date: new Date("2024-04-01"), desktop: 73, mobile: 190 },
		{ date: new Date("2024-05-01"), desktop: 209, mobile: 130 },
		{ date: new Date("2024-06-01"), desktop: 214, mobile: 140 },
	];

	const chartConfig = {
		desktop: { label: "Desktop", color: "var(--chart-1)" },
		mobile: { label: "Mobile", color: "var(--chart-2)" },
	} satisfies Chart.ChartConfig;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Area Chart - Axes</Card.Title>
		<Card.Description>Showing total visitors for the last 6 months</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<AreaChart
				data={chartData}
				x="date"
				xScale={scaleUtc()}
				yDomain={[0, 600]}
				series={[
					{
						key: "mobile",
						label: "Mobile",
						color: chartConfig.mobile.color,
					},
					{
						key: "desktop",
						label: "Desktop",
						color: chartConfig.desktop.color,
					},
				]}
				seriesLayout="stack"
				props={{
					area: {
						curve: curveNatural,
						"fill-opacity": 0.4,
						line: { class: "stroke-1" },
						motion: "tween",
					},
					xAxis: { format: (v) => v.toLocaleDateString("en-US", { month: "short" }) },
					yAxis: { ticks: [0, 300, 600] },
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip
						labelFormatter={(v: Date) => {
							return v.toLocaleDateString("en-US", {
								month: "long",
							});
						}}
						indicator="dot"
					/>
				{/snippet}
			</AreaChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full items-start gap-2 text-sm">
			<div class="grid gap-2">
				<div class="flex items-center gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUpIcon class="size-4" />
				</div>
				<div class="text-muted-foreground flex items-center gap-2 leading-none">
					January - June 2024
				</div>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
