import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dougnnut-financialfitness',
  templateUrl: './dougnnut-financialfitness.component.html',
  styleUrls: ['./dougnnut-financialfitness.component.scss']
})
export class DougnnutFinancialfitnessComponent implements OnInit, OnChanges  {

  @ViewChild('chart', null) private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 210, bottom: 50, left: 50, right: 50};
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor() { }

  ngOnInit() {
    const element = this.chartContainer.nativeElement;
    const myDuration = 600;
    const firstTime = true;

    const width = 960;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    /*const pie = d3.pie()
    .value(function(d) { return d.count; })
    .sort(null); */

    const arc = d3.arc()
    .innerRadius(radius - 100)
    .outerRadius(radius - 20);

    const svg = d3.select(element).append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    if (this.data) {
      this.updateChart();
    }

  }

  ngOnChanges() {}

  updateChart() {/*
    this.data.forEach( data => {
      const regionsByFruit = d3.nest()
      .key(function(d) { return d.fruit; })
      .entries(data)
      .reverse();
  
      var label = d3.select("form").selectAll("label")
      .data(regionsByFruit)
      .enter().append("label");
  
      label.append("input")
      .attr("type", "radio")
      .attr("name", "fruit")
      .attr("value", function(d) { return d.key; })
      .on("change", change)
      .filter(function(d, i) { return !i; })
      .each(change)
      .property("checked", true);
  
      label.append("span")
      .text(function(d) { return d.key; });
      
  
      function change(region) {
        var path = svg.selectAll("path");
        var data0 = path.data(),
        data1 = pie(region.values);
  
        path = path.data(data1, key);
  
        path
        .transition()
        .duration(myDuration)
        .attrTween("d", arcTween)
  
  
        path
        .enter()
        .append("path")
        .each(function(d, i) {
          var narc = findNeighborArc(i, data0, data1, key) ;
          if(narc) {          
            this._current = narc;
            this._previous = narc;
          } else {          
            this._current = d;
          }
        }) 
        .attr("fill", function(d,i) { 
         return color(d.data.region)
       })
        .transition()
        .duration(myDuration)
        .attrTween("d", arcTween)
  
  
        path
        .exit()
        .transition()
        .duration(myDuration)
        .attrTween("d", function(d, index) {
  
          var currentIndex = this._previous.data.region;
          var i = d3.interpolateObject(d,this._previous);
          return function(t) {
            return arc(i(t))
          }
  
        })
        .remove()
  
  
        firstTime = false;
  
  
      }
    });
  
    function key(d) {
      return d.data.region;
    }
  
    function type(d) {
      d.count = +d.count;
      return d;
    }
  
    function findNeighborArc(i, data0, data1, key) {
      var d;
      if(d = findPreceding(i, data0, data1, key)) {
  
        var obj = cloneObj(d)
        obj.startAngle = d.endAngle;
        return obj;
  
      } else if(d = findFollowing(i, data0, data1, key)) {
  
        var obj = cloneObj(d)
        obj.endAngle = d.startAngle;
        return obj;
  
      }
  
      return null
  
  
    }
  
  // Find the element in data0 that joins the highest preceding element in data1.
  function findPreceding(i, data0, data1, key) {
    var m = data0.length;
    while (--i >= 0) {
      var k = key(data1[i]);
      for (var j = 0; j < m; ++j) {
        if (key(data0[j]) === k) return data0[j];
      }
    }
  }
  
  // Find the element in data0 that joins the lowest following element in data1.
  function findFollowing(i, data0, data1, key) {
    var n = data1.length, m = data0.length;
    while (++i < n) {
      var k = key(data1[i]);
      for (var j = 0; j < m; ++j) {
        if (key(data0[j]) === k) return data0[j];
      }
    }
  }
  
  function arcTween(d) {
  
    var i = d3.interpolate(this._current, d);
  
    this._current = i(0);
  
    return function(t) {
      return arc(i(t))
    }
  
  }
  
  
  function cloneObj(obj) {
    var o = {};
    for(var i in obj) {
      o[i] = obj[i];
    }
    return o;
  }
*/}

  /*ngOnInit() {
    this.createChart();
    if (this.data) {
      this.updateChart();
    }
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  createChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    console.log('this.width: ', this.width);
    console.log('this.height: ', this.height);

    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    // chart plot area
    this.chart = svg.append('g')
      .attr('class', 'bars')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // define X & Y domains
    let xDomain = this.data.map(d => d[0]);
    let yDomain = [0, d3.max(this.data, d => d[1])];

    // create scales
    this.xScale = d3.scaleBand().padding(0.1).domain(xDomain).rangeRound([0, this.width]);
    this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    // bar colors
    this.colors = d3.scaleLinear().domain([0, this.data.length]).range(<any[]>['red', 'blue']);

    // x & y axis
    this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScale));
    this.yAxis = svg.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScale));
  }

  updateChart() {
    // update scales & axis
    this.xScale.domain(this.data.map(d => d[0]));
    this.yScale.domain([0, d3.max(this.data, d => d[1])]);
    this.colors.domain([0, this.data.length]);
    this.xAxis.transition().call(d3.axisBottom(this.xScale));
    this.yAxis.transition().call(d3.axisLeft(this.yScale));

    let update = this.chart.selectAll('.bar')
      .data(this.data);

    // remove exiting bars
    update.exit().remove();

    // update existing bars
    this.chart.selectAll('.bar').transition()
      .attr('x', d => this.xScale(d[0]))
      .attr('y', d => this.yScale(d[1]))
      .attr('width', d => this.xScale.bandwidth())
      .attr('height', d => this.height - this.yScale(d[1]))
      .style('fill', (d, i) => this.colors(i));

    // add new bars
    update
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => this.xScale(d[0]))
      .attr('y', d => this.yScale(0))
      .attr('width', this.xScale.bandwidth())
      .attr('height', 0)
      .style('fill', (d, i) => this.colors(i))
      .transition()
      .delay((d, i) => i * 10)
      .attr('y', d => this.yScale(d[1]))
      //.attr('height', d => this.height - this.yScale(d[1]) );
      .attr('height', d => 30 );
  } */

}
