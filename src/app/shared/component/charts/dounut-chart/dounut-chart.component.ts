import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { getData, d3Colors } from '../../../models/general/d3data.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-dounut-chart',
  templateUrl: './dounut-chart.component.html',
  styleUrls: ['./dounut-chart.component.scss']
})
export class DounutChartComponent implements OnInit {

  @ViewChild('chart', null) private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  @Input() private title: string;
  @Input() private backgroundColor: string;
  arc: any;
  chartConfig: any;
  element: any;
  chartData: any;
  color: string[] = d3Colors();

  constructor() {
    this.chartConfig = {
      width: 300,
      height: 300,
      thickness: 20,
      grow: 18,
      labelPadding: 20,
      labelPaddingOver: 42,
      duration: 200,
      margin: {
        top: 50,
        right: 20,
        bottom: 60,
        left: 20
      }
    };
    this.chartData = getData();
  }

  ngOnInit() {
    this.element = this.chartContainer.nativeElement;
    const chartData = this.getChartData(this.chartData.topDimensionMix);
    for (let row of chartData.values) {
      row['id'] = row.scopeId;
      row['label'] = row.scopeName;
      row['value'] =  +row.tableData.increasePercent;
      row['revenue'] = +row.tableData.recommended;
    }

    const d3ChartEl = d3.select(this.element);
    this.chartConfig.width = parseInt(d3ChartEl.style('width')) || this.chartConfig.width;
    this.chartConfig.height = parseInt(d3ChartEl.style('height')) || this.chartConfig.height;
    this.drawChart(chartData, this.chartConfig);
  }

  getChartData(d: any) {
    return {
      center: {
        label: 'Revenue Lift',
        value: 1520000
      },
      values: d
    };
  }

  drawChart(chartData, chartConfig) {
    let width = chartConfig.width;
    let height = chartConfig.height;
    let radius;
    const margin = chartConfig.margin;
    const grow = chartConfig.grow;
    let labelRadius;
    const duration = chartConfig.duration;

    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom,
    radius = Math.min(width, height) / 2,
    labelRadius = radius + chartConfig.labelPadding;

    const color = d3.scaleLinear()
      .domain(chartData.values.map( (item) => {
        return item.label;
      }));

    const thickness = chartConfig.thickness || Math.floor(radius / 5);

    this.arc = d3.arc().outerRadius(radius).innerRadius(radius - thickness);
    const arcOver = d3.arc().outerRadius(radius + grow).innerRadius(radius - thickness);

    const formatNumber = d3.format('s');

    const pieFn = d3.pie()
    .sort(null)
    .value((d) => {
      return d['value'];
    });

    const centerLabel = '';//(!!chartData.center.label) ? chartData.center.label : '';
    const centerValue = this.title;//(!!chartData.center.value) ? chartData.center.value : '';

    const d3ChartEl = d3.select(this.element);

    d3ChartEl.select('svg').remove();

    const gRoot = d3ChartEl.append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g');
    gRoot.attr('transform', 'translate(' + (width / 2 + margin.left) + ',' + (height / 2 + margin.top) + ')');

    const middleCircle = gRoot.append('svg:circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', radius)
      .style('fill', this.backgroundColor);

    const arcs = gRoot.selectAll('g.arc')
      .data(pieFn(chartData.values))
      .enter()
      .append('g')
      .attr('class', 'arc');

    let _current = {};
    const partition = arcs.append('svg:path')
      .style('fill', (d, i) => {
        return this.color[i];
      })
      .style('stroke', '#fff')
      .attr('data-arc-data', (d) => {
        return d.data['value'];
      })
      .each(() => {
        _current = {
          startAngle: 0,
          endAngle: 0
        };
      })
      .attr('d', this.arc)
      .transition()
      .duration(1000)
      .attrTween('d', (d) => {
        const interpolate = d3.interpolate(_current, d);
        _current = interpolate(0);
        return (t) => {
          return this.arc(interpolate(t));
        };
      })
      .each(() => {
        d3.selectAll('.arc text')
          .transition()
          .delay(duration)
          .style('fill-opacity', 1);
      });

    const legend = arcs.append("svg:text")
      .style('fill-opacity', 0)
      .attr('class', 'legend')
      .attr('transform', (d: any) => {
          const x = this.arc.centroid(d)[0];
          const y = this.arc.centroid(d)[1];
          const hei = Math.sqrt(x * x + y * y);
          return 'translate(' + (x / hei * labelRadius) + ',' + (y / hei * labelRadius) + ')';
      })
      .attr("text-anchor", function(d) {
        return (d.endAngle + d.startAngle) / 2 > Math.PI ?
          "end" : "start";
      });

    legend.append('tspan')
      .attr('class', 'percentage')
      .style("fill-opacity", 1)
      .style("fill", '#666')
      .attr('x', 0)
      .text( (d, i) => {
        return d.value + '%';
      });

    /*legend.append('tspan')
      .attr('class', 'revenue')
      .attr('x', 0)
      .attr("dy", "1em")
      .style("fill-opacity", 1)
      .text((d, i) => {
        return '$' + formatNumber(d.data['revenue']);
      }); */

    const centerText = gRoot.append('svg:text')
      .attr('class', 'center-label')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle');

    centerText.append('tspan')
      //.text('$' + formatNumber(centerValue))
      .text(centerValue)
      .attr('x', 0)
      .style('text-anchor', 'middle')
      .attr('dx', '-0.1em')
      .attr("class", 'center-value');
    centerText.append('tspan')
      .text(centerLabel)
      .attr('x', 0)
      .attr('dy', '1.4em')
      .attr('class', 'center-text');
  }

}
