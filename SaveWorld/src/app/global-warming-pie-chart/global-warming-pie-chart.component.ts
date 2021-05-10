
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import customEvents from 'highcharts-custom-events';
customEvents(Highcharts)
import {Options} from 'highcharts'
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';

Drilldown(Highcharts);
@Component({
  selector: 'app-global-warming-pie-chart',
  templateUrl: './global-warming-pie-chart.component.html',
  styleUrls: ['./global-warming-pie-chart.component.css']
})
export class GlobalWarmingPieChartComponent implements OnInit {
sliceColors=['#ffcc66','#EAEDED','#5DADE2','#E74C3C ','#1B4F72','#48C9B0']
  constructor() { }
  mainCategories=[];
drillDownCategories=[]
categories=[]
brightness;
data=[]
dataCategories=[]
DrilldownDataLen
Highcharts=Highcharts;
  ngOnInit() {
    this.data5()
  }
  


  

data5(){
  this.categories=['Electricitate','Alte surse','Industrie','Agricultura'];
this.data=[{
  y:73.2,
color:'red',
drilldown:{
  name:'Emisii electricitate',
  categories:['Energia utilizata in Industrie','Transport','Energia utilizata de oameni','Productie Combustibili','Emisii producere caldura','Agricultura'],
  data:[24.2,16.2,17.5,7.8,5.8,1.7],
  color:'red',
}
},{
  y:3.2,
  color:'blue',
  drilldown:{
    name:'Alte surse',
    categories:['depozite de deșeuri'],
    data:[3.2],
    color:'blue'
  }
},{
  y:5.2,
  color:'grey',
  drilldown:{
    name:'Industrie',
    categories:['Chimicale','Utilaje'],
    data:[2.2,3],
    color:'grey'
  }
},{
  y:18.4,
  color:'green',
  drilldown:{
    name:'Agricultura',
    categories:['Terenuri cultivabile','Defrisare','arderea culturilor','soluri agricole','Utilaje'],
    data:[1.5,2.2,3.5,5.4,5.8],
    color:'green'
  }
}]; 
var angle1,angle2,angle3,allY;
  for(var i=0;i<this.data.length;i++){
    this.mainCategories.push({
      name:this.categories[i],
      data:this.data[i].y,
      color:this.data[i].color
    });
  
  this.DrilldownDataLen = this.data[i].drilldown.data.length;
  for (var j = 0; j < this.DrilldownDataLen; j += 1) {
      this.brightness = 0.2 - (j / this.DrilldownDataLen) / 5;
     

      this.drillDownCategories.push({
          name: this.data[i].drilldown.categories[j],
          y: this.data[i].drilldown.data[j],
          color:new  Highcharts.Color(this.data[i].color).brighten(this.brightness).get()
      });
   //   console.log(this.drillDownCategories)
  }

  }

}
  
chartOptions:Options={
  chart:{
    type:"pie",
    plotBackgroundColor:null,
    plotBorderWidth:0,
    plotShadow:false
  },

  plotOptions:{
    pie:{
      allowPointSelect:true,
      cursor:'pointer',
      
      dataLabels:{
        enabled:true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
    rotation:0,
  
      
        alignTo:'center',
        style:{
          fontWeight:'bold',
          color:'white'
        
     }
   }
    }
    
    
  },
  legend:{
    enabled:false
  },
series:[{
  type:'pie',
  data:this.drillDownCategories,
  name:'',
 
  //size: '70%',
  innerSize: 280,
  dataLabels: {
     rotation:0,
     distance:0,
  
    connectorColor: "#000000",
    color: '#ffffff'
}

},{
  type:'pie',
  size:230,
  center: ['57%', '50%'],
  name:'',
  
data:[ { 
   name:'Electricitate', 
    y:73.2,
     color:'#BD0A33',
      dataLabels:{
        distance:-62
      }},
{name:'Alte surse', y:7.2, color:'#2980B9',
dataLabels:{
  
  distance:-55,
  x:-16,
  format:'<b>{point.name}</b>:<br>{point.percentage:.1f} %'

}
},{
  name:'Industrie',
  y:8,
  color:'#929292 ',
  dataLabels:{
alignTo:'center',
    distance:-57,
 x:-16,

    format: '<b>{point.name}</b>:{point.percentage:.1f} %'
  
  },
  
},{
  name:'Agricultura',
  y:18.4,
  color:'#25A964 ',
  
  dataLabels:{
     align:'center',
     distance:-35,
     
    format:'<b>{point.name}</b>:<br>{point.percentage:.1f} %',
    rotationMode:'auto',
   
  }
  
}
],

}],

}
}
