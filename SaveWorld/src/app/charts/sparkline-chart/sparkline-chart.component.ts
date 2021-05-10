
import { Component, Input, SimpleChanges, OnChanges, OnInit } from "@angular/core";
import * as  Highcharts from "highcharts";
import { Options } from "highcharts";

@Component({
  selector: 'app-sparkline-chart',
  templateUrl: './sparkline-chart.component.html',
  styleUrls: ['./sparkline-chart.component.css']
})
export class SparklineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Highcharts: typeof Highcharts = Highcharts;
  @Input() data: Array<number>;
  @Input() name: string;
  updateFlag = false;
  chartOptions: Options = {
    chart: {
  backgroundColor: 'transparent',
  borderWidth: 0,
  type: "column",
  margin: [2, 0, 2,0],
  width: 250,
  height: 50,
  style: {
    overflow: "visible"
  }
},
title: {
  text: ""
},
credits: {
  enabled: false
},

xAxis: {
  labels: {
    enabled: false
  },
  title: {
    text: null
  },
  lineColor:'white',
  startOnTick: false,
  endOnTick: false,
  tickPositions: []
},
yAxis: {
  endOnTick: false,
  startOnTick: false,
  
  labels: {
    enabled: false
  },
  title: {
    text: null
  },
  tickPositions: [0]
},
legend: {
  enabled: false
},
plotOptions:{
column:{
  borderWidth: 1,
                        pointPadding:.47,
                        groupPadding:0,
                        pointRange:15,
  //groupPadding: 130,
 
 borderColor: '#303030',
  //borderWidth: 0
  zones:[
    {
      value:10,
      color:'#B4F3A2'
       },
       {
        value:15,
        color:'#9CDF54'
         },
         {
 value:20,
 color:'green'
  },{
    value:25,
color:'#CDF70E'
},{
  value:30,
color:'#E8F842'
},{
value:40,
color:'#F9EF22'
}
]
}
},
tooltip:{
enabled:false
},

series: [
  {
    name: '',
    type: 'column',
    data: [],
 
  }
] 
  }
  ngOnChanges(change: SimpleChanges) {
      this.chartOptions.series = [{
        name: change.name ? change.name.currentValue : null,
        type: 'column',
        data: change.data.currentValue,
      }];
      this.updateFlag = true;
    }

}

  

