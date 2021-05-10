import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import customEvents from 'highcharts-custom-events';
customEvents(Highcharts)
@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.css']
})
export class TestChartComponent implements OnInit ,  OnChanges{
Highcharts=Highcharts;
updateFlag = false;

  loadArray=[];
  constructor() { }
  svgElem: any;
  @Input() data: Array<number>;
  @Input() categories:  Array<any>;

aqiValue:any
  ngOnInit() {
   

  }
getValue(){
     var s = '<span style="color:#000;font-size:17px;font-weight:500">'+
    this.options.y
    +'</span>' +'<span style="color:#e8e8e8;font-size:14px">/500</span>';
document.getElementById("left").innerHTML=s

this.aqiValue=s;
}
  public options:any= {
    chart: {
    type: "spline",
    borderColor: '#e8e8e8',
    borderWidth: 1,
   margin: [25, 0, 0, 0],
   borderRadius:4,
   events: {

    render:function () {
      for(var i=0;i<this.series[0].processedYData.length;i++){

        this.xAxis[0].addPlotLine({
          color: '#bfbfbf',
          width: 2,
          value: i,
          zIndex: 1.67
        })

        this.xAxis[0].addPlotBand({
          from: i-0.10,
          to: i+0.10,
          color: 'transparent',
          id: 'plot-band ',
          events:{
            mouseover:function() {
              
              this.svgElem.attr({
                fill:'#F2F2F2'
                
            });
            },
            mouseout:function(){
              
              this.svgElem.attr({
                fill:'transparent'
                
            });
          
            }
          }
      });   
      
      }
    },
   }

    },
    tooltip: {
      enabled: false
  },
    title: {
    text: ''
    },
    xAxis:{
    categories:[],
    labels: {
      style: {
          color: '#e8e8e8'
      }
  },
    tickWidth:1,
    tickLength:20,
     
  },
    yAxis: {
    title:{
    text:''
    },
    gridLineColor: 'transparent',
    labels:{
      enabled:true
    }
    },
    plotOptions:{
      series:{
        cursor: 'pointer',
        marker: {
          enabled: false
      },
       point:{
          events:{
          click:this.getValue
  
  },
}
      }
},
    legend:{
      enabled:false
    },
    credits:{
enabled:false
    },
    series: [{
      
    name: '',
    type:'line',
    data: [],
    }]
    };
  

    ngOnChanges(change:SimpleChanges){
     // console.log(change)
    
      this.options.series = [{
        name: 'name',
        type: 'spline',
        data: change.data.currentValue,
        zones:[{
          value:50.00001,
          color:'#009966'
        },{
          value:100.00001,
          color:'#ffde33'
        },
        {
          value:150.00001,
          color:'#ff9933'
        },
        {
          value:200.00001,
          color:'#cc0033'
        },
        {
          value:300.00001,
          color:'#660099'
        },
        {
          color: '#90ed7d'
      }],
      
      }];
      this.options.xAxis=[{
        categories:  change.categories?change.categories.currentValue:null,
        opposite: true,
    labels: {
      style: {
        color: "#bfbfbf",
        textAlign:"center"
      },
      

     
    },
    /*
  plotBands:[{
    color:'transparent',
    from:-0.10,
    to:0.10,
   events:{
     mouseover:this.updateColor,
     mouseout:this.mouseOut
   }
    },
  {
    color:'transparent',
    from:0.90,
    to:1.10,
    events:{
      mouseover:this.updateColor,
      mouseout:this.mouseOut
    }
  },
  {
    color:'transparent',
    from:1.90,
    to:2.10,
    events:{
      mouseover:this.updateColor,
      mouseout:this.mouseOut
    }
  },
  {
    color:'transparent',
    from:2.90,
    to:3.10,
    events:{
      mouseover:this.updateColor,
      mouseout:this.mouseOut
    }
  },
  {
    color:'transparent',
    from:3.90,
    to:4.10,
    events:{
      mouseover:this.updateColor,
      mouseout:this.mouseOut,
     
    }
  }],
    plotLines: [{
      color: '#bfbfbf',
      width: 2,
      value: 0,
      zIndex: 1.67
  },
  {
    color: '#bfbfbf',
    width: 2,
    value: 1,
    zIndex: 1.67
},
{
  color: '#bfbfbf',
  width: 2,
  value: 2,
  zIndex: 1.67
},
{
color: '#bfbfbf',
width: 2,
value: 3,
zIndex: 1.67
},
{
color: '#bfbfbf',
width: 2,
value: 4,
zIndex: 1.67,

}],
    

   

  */
      }]

      this.updateFlag = true;
      
      
  }
}
