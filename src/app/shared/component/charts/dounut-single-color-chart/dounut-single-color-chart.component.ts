import { Component, OnInit, ViewChild, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dounut-single-color-chart',
  templateUrl: './dounut-single-color-chart.component.html',
  styleUrls: ['./dounut-single-color-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DounutSingleColorChartComponent implements OnInit {

  @ViewChild('pie1', null) private chartContainer: ElementRef;
  @Input() private title: string;
  @Input() private pieName: string;
  @Input() private backgroundColor: string;
  @Input() private pieValue: any;

  height: number; //{ return parseInt(d3.select('body').style('height'), 9); }
  width: number; //{ return parseInt(d3.select('body').style('width'), 9); }
  radius: number;
  // Arcs & pie
  private arc: any;  private pie: any;  private slices: any;
  private color: any;
  // Drawing containers
  private svg: any;
  private mainContainer: any;
  // Data
  dataSource: any[];

  constructor() {
    this.dataSource = [];
  }

  ngOnInit() {
    // put in after init because pieName isn't processed on time in oninit
    const fullVal = (100 - this.pieValue);
    this.dataSource.push(
      { name: 'Real Value', value: this.pieValue, abs: Math.abs(this.pieValue)},
      { name: 'Remaining', value: fullVal, abs: Math.abs(fullVal)},
    );

    this.svg = d3.select(this.chartContainer.nativeElement).select('svg');
    this.setSVGDimensions();
    //this.color = d3.scaleOrdinal(d3.schemeCategory10);
    this.color = ['#fccb44', '#E7E7E7'];
    this.mainContainer = this.svg.append('g').attr('transform', `translate(${this.radius},${this.radius})`);
    this.pie = d3.pie().sort(null).value((d: any) => d.abs);
    this.draw();
  }

  private setSVGDimensions() {

    this.width = parseInt(this.svg.style('width')) || 300;
    this.height = parseInt(this.svg.style('height')) || 300;
    this.radius = (Math.min(this.width, this.height)) / 2;
    this.svg.attr('width', 2 * this.radius).attr('height', 2 * this.radius);

  }

  private draw() {
    this.setArcs();
    this.drawSlices();
  }

  private setArcs() {
    const arcFatness = this.radius * .75;
    this.arc = d3.arc().outerRadius(this.radius).innerRadius( () => {
      return arcFatness;
    });
  }

  private drawSlices() {
    this.slices = this.mainContainer.selectAll('path')
      .remove().exit()
      .data(this.pie(this.dataSource))
      .enter().append('g').append('path')
      .attr('d', this.arc);
    this.slices.attr('fill', (d, i) => this.color[i]);
    // make the remaining value thinner
    // this.mainContainer.select('g:nth-child(2) path').attr('stroke-width', '.25');

    const centerText = this.mainContainer.append('svg:text')
      .attr('class', 'center-label')
      .style('font-weight', 'bold')

    centerText.append('tspan')
      .text(this.title)
      .attr('x', 0)
      .style('text-anchor', 'middle')
      .attr('dx', '-0.1em')
      .attr('class', 'center-value');
  }

}
