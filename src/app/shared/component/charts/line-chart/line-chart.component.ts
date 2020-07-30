import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LineChartComponent implements OnInit {

  @Input() public data2: any[];
  @ViewChild('container', null) private chartContainer: ElementRef;
  public title = 'Line Chart';
  private data: any[];

  private margin = {top: 40, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>; // this is line defincurrentColoration

  constructor () {
    // configure margins and width/height of the graph
    this.width = 1200 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom;
  }
  public ngOnInit(): void {
    this.data = [
      {date: new Date('2010-01-01'), value: 40},
      {date: new Date('2010-01-04'), value: 93},
      {date: new Date('2010-01-05'), value: 95},
      {date: new Date('2010-01-06'), value: 130},
      {date: new Date('2010-01-07'), value: 110},
      {date: new Date('2010-01-08'), value: 120},
      {date: new Date('2010-01-09'), value: 129},
      {date: new Date('2010-01-10'), value: 107},
      {date: new Date('2010-01-11'), value: 140},
    ];
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
  }
  
  private buildSvg() {
    this.svg = d3.select(this.chartContainer.nativeElement).select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }
  private addXandYAxis() {
    // range of data configuring
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.data, (d) => d.date ));
    this.y.domain(d3Array.extent(this.data, (d) => d.value ));
    
    //Add CHF At Y axis
    this.svg.append('g')
    .attr('class', 'y axis')
    .append('text')
    .attr('y', '-40')
    .attr('dy', '.71em')
    .style('font-weight', 'bold')
    .style('font-size', '1.25rem')
    .style('fill', '#000')
    .style('text-anchor', 'middle')
    .text('CHF');

    // Configure the X Axis
    this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));

    //adjust y axis longer line
    this.svg.selectAll('g.tick line')
    .attr('y2', `-${this.height}`)
    .attr('stroke', `#9E9E9E`)
    ;

    // Configure the Y Axis
    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y));
    
  }

  private drawLineAndPath() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x(d.date) )
        .y( (d: any) => this.y(d.value) );
    // Configuring line path
    this.svg.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', this.line);
  }
  

  /*@Input() public data: any[];
  @ViewChild('container', null) private chartContainer: ElementRef;

  private host;
  private svg;
  private margin;
  private width;
  private height;
  private xScale;
  private yScale;
  private xAxis;
  private yAxis;

  curveArray = [
    {'curve': d3.curveLinear, 'curveTitle': 'curveLinear'},
    {'curve': d3.curveStep, 'curveTitle': 'curveStep'},
    {'curve': d3.curveStepBefore, 'curveTitle': 'curveStepBefore'},
    {'curve': d3.curveStepAfter, 'curveTitle': 'curveStepAfter'},
    {'curve': d3.curveBasis, 'curveTitle': 'curveBasis'},
    {'curve': d3.curveCardinal, 'curveTitle': 'curveCardinal'},
    {'curve': d3.curveMonotoneX, 'curveTitle': 'curveMonotoneX'},
    {'curve': d3.curveCatmullRom, 'curveTitle': 'curveCatmullRom'}
  ];

  selectedCurve = 'curveLinear';

  constructor() { }
  ngOnInit() {
    console.log('ngOnInit()');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit(2)');
    this.setup();
  }

  ngOnChanges(): void {
    console.log('ngOnChanges()');
    this.setup();
  }

  onCurveChange(curve: string) {
    console.log(4);
    this.selectedCurve = curve;
    this.setup();
  }

  private setup(): void {
    this.host = d3.select(this.chartContainer.nativeElement).select('svg');
    this.margin = {top: 20, right: 20, bottom: 30, left: 50};
    this.width = 480 - this.margin.left - this.margin.right;
    this.height = 250 - this.margin.top - this.margin.bottom;
    this.xScale = d3.scaleTime().range([0, this.width]);
    this.yScale = d3.scaleLinear().range([this.height, 0]);
    this.buildChart();
  }

  private buildChart() {
    this.xAxis = d3.axisBottom(this.xScale);
    this.yAxis = d3.axisLeft(this.yScale);
    this.host.html('');

    let self = this;

    let line = d3.line()
      .curve(this.curveArray.find((item) => item.curveTitle === this.selectedCurve).curve || d3.curveLinear)
      .x((d: any) => { return self.xScale(d.date) })
      .y((d: any) => { return self.yScale(d.close); });

    this.svg = this.host
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
    this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // d3.tsv('assets/testdata.tsv', this.type, function(error, data) {

    this.data.forEach(( dataV, i) => {

      const d = this.type(dataV);
      self.xScale.domain(d3.extent(dataV, (d: any) => { console.log('self.xScale.domain: ', d.date); return d.date; }));
      self.yScale.domain(d3.extent(dataV, (d: any) => { return d.close; }));

      self.svg.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + self.height + ')')
          .call(self.xAxis);

      self.svg.append('g')
          .attr('class', 'y axis')
          .call(self.yAxis)
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '.71em')
          .style('text-anchor', 'end')
          .text('CHF');

      self.svg.append('path')
          .datum(dataV)
          .attr('class', 'line')
          .attr('d', line);
    });
  }

  private type(d: any) {
    //const formatDate = d3.timeParse('%d-%b-%y');
    //const newD = new Date(d.date);

    //console.log('type: ', d.date);

    //d.date = formatDate(d.date);
    //d.date = formatDate(newD.toDateString());
    //console.log('type: ', d.date);
    d.close = +d.close;
    return d;
  }*/

}
