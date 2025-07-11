<script lang="ts">
	import ChartDisplay from "$lib/components/docs/chart-display.svelte";
	import * as Charts from "./charts.js";
	import { Separator } from "$lib/registry/ui/separator/index.js";

	let { data } = $props();
</script>

<div class="grid gap-4">
	<div class="gap-6 md:flex md:flex-row-reverse md:items-start">
		<div class="grid flex-1 gap-12">
			<h2 class="sr-only">Examples</h2>
			<div
				id="examples"
				class="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay chartData={data.chartData} name="chart-area-stacked">
					<Charts.ChartAreaStacked />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-multiple">
					<Charts.ChartBarMultiple />
				</ChartDisplay>
				<ChartDisplay
					chartData={data.chartData}
					name="chart-pie-donut-text"
					class="[&_[data-chart]]:xl:max-h-[243px]"
				>
					<Charts.ChartPieDonutText />
				</ChartDisplay>
			</div>
			<Separator />
			<div
				id="area-chart"
				class="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay chartData={data.chartData} name="chart-area-default">
					<Charts.ChartAreaDefault />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-area-linear">
					<Charts.ChartAreaLinear />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-area-step">
					<Charts.ChartAreaStep />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-area-stacked">
					<Charts.ChartAreaStacked />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-area-stacked-expand">
					<Charts.ChartAreaStackedExpand />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-area-legend">
					<Charts.ChartAreaLegend />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-area-icons">
					<Charts.ChartAreaIcons />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-area-gradient">
					<Charts.ChartAreaGradient />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-area-axes">
					<Charts.ChartAreaAxes />
				</ChartDisplay>
				<div class="md:col-span-2 lg:col-span-3">
					<ChartDisplay chartData={data.chartData} name="chart-area-interactive">
						<Charts.ChartAreaInteractive />
					</ChartDisplay>
				</div>
			</div>
			<Separator />
			<div
				id="bar-chart"
				class="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay chartData={data.chartData} name="chart-bar-default">
					<Charts.ChartBarDefault />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-horizontal">
					<Charts.ChartBarHorizontal />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-multiple">
					<Charts.ChartBarMultiple />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-label">
					<Charts.ChartBarLabel />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-label-custom">
					<Charts.ChartBarLabelCustom />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-mixed">
					<Charts.ChartBarMixed />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-stacked">
					<Charts.ChartBarStacked />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-active">
					<Charts.ChartBarActive />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-bar-negative">
					<Charts.ChartBarNegative />
				</ChartDisplay>
				<div class="md:col-span-2 lg:col-span-3">
					<ChartDisplay chartData={data.chartData} name="chart-bar-interactive">
						<Charts.ChartBarInteractive />
					</ChartDisplay>
				</div>
			</div>
			<Separator />
			<div
				id="line-chart"
				class="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay chartData={data.chartData} name="chart-line-default">
					<Charts.ChartLineDefault />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-line-linear">
					<Charts.ChartLineLinear />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-line-step">
					<Charts.ChartLineStep />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-line-multiple">
					<Charts.ChartLineMultiple />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-line-dots">
					<Charts.ChartLineDots />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-line-dots-custom">
					<Charts.ChartLineDotsCustom />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-line-dots-colors">
					<Charts.ChartLineDotsColors />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-line-label">
					<Charts.ChartLineLabel />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-line-label-custom">
					<Charts.ChartLineLabelCustom />
				</ChartDisplay>
				<div class="md:col-span-2 lg:col-span-3">
					<ChartDisplay chartData={data.chartData} name="chart-line-interactive">
						<Charts.ChartLineInteractive />
					</ChartDisplay>
				</div>
			</div>
			<Separator />
			<div
				id="pie-chart"
				class="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay chartData={data.chartData} name="chart-pie-simple">
					<Charts.ChartPieSimple />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-separator-none">
					<Charts.ChartPieSeparatorNone />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-label">
					<Charts.ChartPieLabel />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-label-custom">
					<Charts.ChartPieLabelCustom />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-label-list">
					<Charts.ChartPieLabelList />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-legend">
					<Charts.ChartPieLegend />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-donut">
					<Charts.ChartPieDonut />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-donut-active">
					<Charts.ChartPieDonutActive />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-donut-text">
					<Charts.ChartPieDonutText />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-stacked">
					<Charts.ChartPieStacked />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-pie-interactive">
					<Charts.ChartPieInteractive />
				</ChartDisplay>
			</div>
			<Separator />
			<div
				id="radar-chart"
				class="grid flex-1 scroll-mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay chartData={data.chartData} name="chart-radar-default">
					<Charts.ChartRadarDefault />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-dots">
					<Charts.ChartRadarDots />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-multiple">
					<Charts.ChartRadarMultiple />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-lines-only">
					<Charts.ChartRadarLinesOnly />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-label-custom">
					<Charts.ChartRadarLabelCustom />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-radius">
					<Charts.ChartRadarRadius />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-grid-custom">
					<Charts.ChartRadarGridCustom />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-grid-fill">
					<Charts.ChartRadarGridFill />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-grid-none">
					<Charts.ChartRadarGridNone />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-grid-circle">
					<Charts.ChartRadarGridCircle />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-grid-circle-no-lines">
					<Charts.ChartRadarGridCircleNoLines />
				</ChartDisplay>
				<!-- <ChartDisplay name="chart-radar-grid-circle-fill">
			<Charts.ChartRadarGridCircleFill />
		  </ChartDisplay> -->
				<ChartDisplay chartData={data.chartData} name="chart-radar-legend">
					<Charts.ChartRadarLegend />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radar-icons">
					<Charts.ChartRadarIcons />
				</ChartDisplay>
			</div>
			<Separator />
			<div
				id="radial-chart"
				class="grid flex-1 scroll-mt-20 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay chartData={data.chartData} name="chart-radial-simple">
					<Charts.ChartRadialSimple />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radial-label">
					<Charts.ChartRadialLabel />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radial-grid">
					<Charts.ChartRadialGrid />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radial-text">
					<Charts.ChartRadialText />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radial-shape">
					<Charts.ChartRadialShape />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-radial-stacked">
					<Charts.ChartRadialStacked />
				</ChartDisplay>
			</div>
			<Separator />
			<div
				id="tooltip"
				class="chart-wrapper grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10"
			>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-default">
					<Charts.ChartTooltipDefault />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-indicator-line">
					<Charts.ChartTooltipIndicatorLine />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-indicator-none">
					<Charts.ChartTooltipIndicatorNone />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-label-custom">
					<Charts.ChartTooltipLabelCustom />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-label-formatter">
					<Charts.ChartTooltipLabelFormatter />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-label-none">
					<Charts.ChartTooltipLabelNone />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-formatter">
					<Charts.ChartTooltipFormatter />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-icons">
					<Charts.ChartTooltipIcons />
				</ChartDisplay>
				<ChartDisplay chartData={data.chartData} name="chart-tooltip-advanced">
					<Charts.ChartTooltipAdvanced />
				</ChartDisplay>
			</div>
		</div>
	</div>
</div>
