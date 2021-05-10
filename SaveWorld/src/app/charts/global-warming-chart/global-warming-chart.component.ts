import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from  'highcharts'
import { Options } from 'highcharts';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { SaveWorldService } from '../../services/save-world.service'
@Component({
  selector: 'app-global-warming-chart',
  templateUrl: './global-warming-chart.component.html',
  styleUrls: ['./global-warming-chart.component.css']
})
export class GlobalWarmingChartComponent implements OnInit {
  Highcharts=Highcharts;
allData:any[];values=[];an=[]
url: string = 'http://localhost:61382/api/SaveWorld/GlobalWarming'
  constructor(private _SaveWrorldService:SaveWorldService) { }
chartOptions;
chartOptions2;
updateFlag = false;
  ngOnInit() {
    this.initialChart()
  }
initialChart(){
  this._SaveWrorldService.Data(this.url).subscribe(res => {
    this.allData = res;


  this.values = this.allData.reduce((r, e) => {
    r.push([ e.valoare])
    return r;
  }, [])
 this.an=this.allData.reduce((r, e) => {
  r.push([ e.an])
  return r;
}, [])
 console.log(this.values[0].slice())


this.chartOptions={
  
  chart:{
    type:'line'
  },
  title:{
    text:'Evolutia incalzirii globale 1850-2020'
  },
   credits:{
     enabled:false
   },
   xAxis:{
     categories:this.an,
     tickInterval:1
   },
   series:[{
     name:'Temperatura',
     type:'line',
     data:this.values
   }]
}
  });
  }
 newChart(){

 

     const myArray = [];
    var counter = 0;
    var run = 0;
  
    var interval = setInterval(() => {

      if (run > this.values.length) {
        clearInterval(interval)
      }

      run++;
      this.chartOptions={
  
        chart:{
          type:'line'
        },
        title:{
          text:'Evolutia incalzirii globale 1850-2020'
        },
         credits:{
           enabled:false
         },
         xAxis:{
           categories:this.an,
           tickInterval:1
         },
         series:[{
           name:'Temperatura',
           type:'line',
           data:myArray
         }]
      }
   
 myArray.push(this.values[counter])
      counter++;
    }, 1300);

    this.chartOptions = this.chartOptions;
 }
  

}
