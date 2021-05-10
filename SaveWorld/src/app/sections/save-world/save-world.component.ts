import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap';
import Draggable from 'gsap/Draggable'
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-save-world',
  templateUrl: './save-world.component.html',
  styleUrls: ['./save-world.component.css']
})
export class SaveWorldComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger,Draggable);
    this.initScrollTriggers();
  }

  initScrollTriggers(){
    document.querySelectorAll(".panels").forEach(panels =>{
      const scrollPanel=gsap.timeline({
      scrollTrigger:{
        trigger:panels,//elem care declanseaza efectul
        pin:true,
        toggleActions: "restart play none reverse",
        start: "bottom bottom", //efectul porneste de la sfarsit
            end: "+=1200px",
            markers: false,
            scrub: 1,
            pinSpacing:false,
      }
      });
      scrollPanel.from(panels,{y: 0, opacity: 50, xProcent: 100 });
    })
  }
}
