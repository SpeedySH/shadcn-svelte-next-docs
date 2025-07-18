<script lang="ts">
	import * as Card from "$lib/registry/ui/card/index.js";
	import * as Chart from "$lib/registry/ui/chart/index.js";
	import { PeriodType } from "@layerstack/utils";
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
		<Card.Title>Area Chart - Stacked</Card.Title>
		<Card.Description>Showing total visitors for the last 6 months</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<AreaChart
				data={chartData}
				x="date"
				xScale={scaleUtc()}
				yPadding={[0, 25]}
				axis="x"
				series={[
					{
						key: "mobile",
						label: "Mobile",
						color: "var(--color-mobile)",
					},
					{
						key: "desktop",
						label: "Desktop",
						color: "var(--color-desktop)",
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
					xAxis: { format: PeriodType.Month },
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip
						indicator="dot"
						labelFormatter={(v: Date) => {
							return v.toLocaleDateString("en-US", {
								month: "long",
							});
						}}
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
