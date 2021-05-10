import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SaveWorldService } from '../../services/save-world.service'
import {gsap} from 'gsap';
import Draggable from 'gsap/Draggable'
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-environmental-impact',
  templateUrl: './environmental-impact.component.html',
  styleUrls: ['./environmental-impact.component.css']
})
export class EnvironmentalImpactComponent implements OnInit {
  chart: Chart;
  allData: any[]
  values: any[]
  categoriesData: any[]
  url: string = 'http://localhost:61382/api/data/'
  constructor(private _SaveWrorldService: SaveWorldService) { }


  ngOnInit() {
   
    gsap.registerPlugin(ScrollTrigger,Draggable);
    this.ScrollTriggers();
  }
  


  ScrollTriggers(){
    document.querySelectorAll(".panels").forEach(panels =>{
      const scrollPanel=gsap.timeline({
      scrollTrigger:{
        trigger:panels,//elem care declanseaza efectul
        pin:true,
        toggleActions: "restart play none reverse",
        start: "bottom bottom", //efectul porneste de la sfarsit
            
            markers: false,
            scrub: 1,
            pinSpacing:false,
      }
      });
      scrollPanel.from(panels,{y: 0, opacity: 50, xProcent: 100 });
    })
  }

}
