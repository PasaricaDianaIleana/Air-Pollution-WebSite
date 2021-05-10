import { Component, ComponentFactoryResolver, ComponentRef, Injector, Input, OnInit } from '@angular/core';
import { SaveWorldService } from "../../services/save-world.service"
import  * as Highcharts from 'highcharts';
import {MapComponent}  from '../map/map.component'
import { Router } from '@angular/router';
interface MarkerMetaData {
  name: String;
  componentInstance2: ComponentRef<MapComponent>
}
@Component({
  selector: 'app-marker-component',
  templateUrl:'./marker-component.component.html' ,
  styleUrls: ['./marker-component.component.css']
})
export class MarkerComponentComponent implements OnInit {
  highcharts=Highcharts;

city; message;  aqi=[]; date;statie;response
pm10=[] ; pm25=[] ;o3=[]
array:any;myData;val1=[];val2=[];val3=[]
  constructor( private _SaveWorldService:SaveWorldService) { }

  ngOnInit() {
    this.popupData();
  }


  popupData(){
   
    var request=this.message;
   // console.log("get request from aqiMap",request);
    this.city = request.data.city.name
    this.aqi = request.data.aqi
    this.date=request.data.time.s;

     
    //console.log("Statie de",this.statie)
    //console.log("Statie de",this.response)
  
    this.response.forEach(element => {
      if(element['statie']===this.statie && element['poluant']==='o3'){
         this.o3.push(element.valoare)
         //this.dayO3.push(element.day)
      }else  if(element['statie']===this.statie && element['poluant']==='pm10'){
        this.pm10.push(element.valoare)
      //  this.dayPm10.push(element.day)
     }else if(element['statie']===this.statie&& element['poluant']==='pm25') {
       this.pm25.push(element.valoare)
       //this.dayPm25.push(element.day)
     }
    })
//console.log(this.pm10)
    this.myData = [
      { pm10Values: this.pm10, name: "PM10" },
      { data: this.pm25, name: "PM25" },
      { data: this.o3, name: "03" },
      {data:this.aqi,name:"aaa"}
    ];
  }
  
 createComponent(){

         //trimite un  request catre service 
  this._SaveWorldService.sendRequest(this.message);
            
  }
  }

