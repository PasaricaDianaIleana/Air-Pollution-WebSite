import { Component, OnInit } from '@angular/core';

import SimpleScrollbar from 'simple-scrollbar'
import 'simple-scrollbar/simple-scrollbar.css'
@Component({
  selector: 'app-pollution-evolution',
  templateUrl: './pollution-evolution.component.html',
  styleUrls: ['./pollution-evolution.component.css']
})
export class PollutionEvolutionComponent implements OnInit {
pStyle:string;
  constructor() { }
  test: string ;
  aqi=50;
  aqi2=54;
  aqi3=59;
  ngOnInit() {
  

  }
generalInf(){
  console.log('General inf')
 this.test='test1'
}
activitatiInf(){
  console.log('activitati inf')
  this.test='test2'

}
CopiiInf(){
  console.log('copii inf')
  this.test='test3'

}
}
