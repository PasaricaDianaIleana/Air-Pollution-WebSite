import { Component, OnInit } from '@angular/core';
import {SaveWorldService} from '../../services/save-world.service'
import * as Highcharts from 'highcharts'


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _SaveWorldService:SaveWorldService) { }
Highcharts=Highcharts;allData: any[];
chartOptions;values=[];
  ngOnInit() {
    this.createChart()
  }
  AddImage(imgSrc) {
    return '<img src=' + imgSrc + ' ' + 'style="width: 20px; height: 20px;margin-left:10px"/>';
  };
createChart(){
let categories=[]
  this._SaveWorldService.ColumnHealthChart().subscribe(res=>{
this.allData=res;
error => console.log(error)
console.log(this.allData);


  this.allData.forEach(elem => {
  this.values.push(elem['valoareDecese'])
categories.push(elem['tara'])
});



  this.chartOptions={

  chart: {
    type: 'bar'
  },
  title:{
    text:' '
  },
  subtitle:{
    text:'Tarile care au inregistrat cele mai multe decese prematura din cauza poluarii aerului in Europa'
  },
  exporting: {
    allowHTML: true
  },

  plotOptions: {
    series: {
      grouping: false,
      color:'grey'
    }
  },
  legend:{
    enabled:false
  },
  yAxis:{
    labels: {
      enabled: false
  }
  },
  credits:{
    enabled:false
  },
  xAxis: [{
    type: 'category',
    labels: {
      useHTML: true
    }
  }, {
    opposite: true,
    type: 'category'
  }],
  

  series: [{
    data: [
      {

      y: this.values[0],
      name: 'Germania'+this.AddImage('../../../assets/images/1200px-Flag_of_Germany.svg.webp') 
    }, {
      y: this.values[1],
      name: 'Italia'+this.AddImage('../../../assets/images/italy-flag-png-large.png')
    }, {
      y: this.values[2],
      name:'Polonia'+this.AddImage('../../../assets/images/1280px-Flag_of_Poland_(1928–1980).svg.png')
    }, {
      y: this.values[3],
      name:'Franta'+ this.AddImage('../../../assets/images/france-flag.jpg')
    }, {
      y: this.values[4],
      name: 'UK'+this.AddImage('../../../assets/images/uk.png')
    },{
      y:this.values[5],
      name:'Spania'+this.AddImage('../../../assets/images/spain.jpg')
    }
    ,{
      y:this.values[6],
      name:'Romania'+this.AddImage('../../../assets/images/romania-flag.jpg')
    },
    {
      y:this.values[7],
      name:'Bulgaria'+this.AddImage('../../../assets/images/bulgaria.png')
    },
    {
      y:this.values[8],
      name:'Ungaria'+this.AddImage('../../../assets/images/hungary-flag.jpg')
    },
    {
      y:this.values[9],
      name:'Grecia'+this.AddImage('../../../assets/images/Flag-Greece.jpg')
    }
   ] }, {
    data: [{
      y: null,
      name: '<span style="margin-top:20px">Procentul din populatie</span><br/>0.08%'
    }, {
      y: null,
      name: '0.10%  <img src="../../../assets/images/Flag-Greece.jpg"/>' 
    }, {
      y: null,
      name: '0.12%'
    }, {
      y: null,
      name: '0.05%'
    }, {
      y: null,
      name: '0.05%'
    }, {
      y: null,
      name: '0.06%'
    } ,{
      y: null,
      name: '0.13%'
    }, {
      y: null,
      name: '0.20%'
    }, {
      y: null,
      name: '0.14%'
    }, {
      y: null,
      name: '0.11%'
    }],
    xAxis: 1
  }]
}
})
}
}
