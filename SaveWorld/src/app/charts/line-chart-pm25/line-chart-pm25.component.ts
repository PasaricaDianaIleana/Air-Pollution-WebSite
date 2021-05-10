import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material';
import * as Highcharts from 'highcharts';
import customEvents from 'highcharts-custom-events';
customEvents(Highcharts)
@Component({
  selector: 'app-line-chart-pm25',
  templateUrl: './line-chart-pm25.component.html',
  styleUrls: ['./line-chart-pm25.component.css']
})
export class LineChartPm25Component {
  svgElem: any;
  @Input() data: Array<number>;
  @Input() categories:  Array<any>;
  s: any;
  constructor() { }
  Highcharts = Highcharts;

  public options: any ={
    chart:{
      type:'spline',
      borderColor: '#e8e8e8',
      borderWidth: 1,
     margin: [25, 0, 0, 0],
     borderRadius:4
      //margin top ,margin right,,margin bottom,margin left
    },
    tooltip: {
      enabled: false
  },
    title:{
      text:''
    },
    xAxis: {
      categories: [],
      opposite: true,
      labels: {
        style: {
          color: "#bfbfbf",
          textAlign:"center"
        },
        

       
      },
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
      

      tickWidth:1,
      tickLength:20,
  
  
    },
    
    yAxis:{
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
        },
      },
   
    },
    legend:{
      enabled:false
    },
    credits:{
enabled:false
    },

  
    
    series:[{
      name:'pm',
      type:'spline',
      data:[], 
    
  
    }]
  }
  getValue(){
 
  this.s = '<span style="color:#000;font-size:17px;font-weight:500">'+
    this.options.y
    +'</span>' +'<span style="color:#e8e8e8;font-size:14px">/500</span>';
document.getElementById("left").innerHTML=this.s
  
  
 }
updateColor(){
 
    this.svgElem.attr({
      fill:'#F2F2F2'
    })
}

mouseOut(){
  this.svgElem.attr({
    fill:'transparent'
  })
}

ngOnChanges(changes:SimpleChanges){
  console.log(changes)
  this.options.series=[{
    data:changes.data.currentValue,
    type:'spline',  zones:[{
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
  }]
  /*
  this.options.xAxis=[{
        categories:  changes.categories?changes.categories.currentValue:null,

  

*/
}
}
