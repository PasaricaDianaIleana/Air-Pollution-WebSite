import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import * as  Highcharts from "highcharts";
import { Options } from "highcharts";


@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

@Input() data: number;
@Input() name: string;
updateFlag=false;
  constructor() { }
  ngOnInit(): void {
   
  }
 
 
 
  chartOptions:Options={
    chart:{
      type:'gauge',
      backgroundColor:'none'
    },
    
    credits:{
      enabled:false
    },
    title:{
      text:'',
     
    },
    legend:{
     enabled:false
  
    },
    exporting:{
      buttons:{
        exportButtons:{
          symbolFill:'#424242',
          symbolStroke:'#424242',
        
        },
        printButton:{
          enabled:false
        }
      }
    },
    pane:{
      startAngle:-90,
      endAngle:90,
      background:null
    },
    yAxis:[{
      min:0,
      max:300,
      lineColor:'transparent',
      tickWidth:1,
      tickInterval:50,
      tickLength:80,
      tickColor:'white',
      minorTickColor:'transparent',
      minorTickLength:0,
      minTickInterval:0,
      labels:{
        rotation:null,
        distance:5,
        zIndex:1,
        enabled:false
        
      
      },
      plotBands:[{
        from:0,
        to:50,
        color:'#009966',
        innerRadius:'77%',
        outerRadius:'60%'
      },{
        from:50,
        to:100,
        color:'#ffde33',
        innerRadius:'77%',
        outerRadius:'60%'
      },{
        from:100,
        to:150,
        color:'#ff9933',
        innerRadius:'77%',
        outerRadius:'60%'
      },{
        from:150,
        to:200,
        color:'#cc0033',
        innerRadius:'77%',
        outerRadius:'60%'
      },
      {
        from:200,
        to:300,
        color:'#660099',
        innerRadius:'77%',
        outerRadius:'60%'
      },
      {
        from:300,
       
        color:'#7e0023',
        innerRadius:'68%',
        outerRadius:'100%'
      }
      
      ],
      pane:0
    }],
    plotOptions:{
      gauge:{
        dial:{
          radius:'78%',
          baseWidth:7,
          baseLength:'14',
          rearLength:'0',
        },
        pivot:{
          radius:0,
         
        },
        showInLegend:false
      },
      series:{
        dataLabels:{
          enabled:true,
          align:'center',
          color:'black',
          backgroundColor:'transparent',
          borderColor:'transparent',
          x:0,
          y:-60,
          style:{
            width:20,
            fontSize:'35',
            fontFamily:'Rubik,Trebuchet MS,Helvetica,sans-serif',
            fontWeight:'400',
            
            

          }
        }
      }
    },
    series: [{
      name: '',
      type:'gauge',
      data: []
     
  }]


    }
    ngOnChanges(change:SimpleChanges) {
      // console.log(change)
      this.chartOptions.series=[{
        name:change.name?change.name.currentValue:null,
        type:'gauge',
        data:change.data.currentValue
      }],
      this.updateFlag=true;
      }
  }



