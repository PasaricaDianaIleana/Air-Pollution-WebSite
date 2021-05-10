import { Component, OnInit,ViewChild } from '@angular/core';

import {CountUpModule} from 'ng-count-up-js'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

 

  ex;
    
    
  ngOnInit() {

  }
  /*
  onClick(){
    this.router.navigateByUrl('/TakeAction');
       }
*/
closeResult: string;

  constructor(private modalService: NgbModal) {}

 

  openWindow(content) {
    this.modalService.open(content, { size:'lg' });
  }

  
  openChart(content) {
    this.modalService.open(content, { size:'lg' });
  }

 count={
   countTo:467000,
   from:0,
   duration:3
 }
 count2={
  countTo:600000,
  from:0,
  duration:3
}
count3={
  countTo:30,
  from:0,
  duration:2
}
count4={
  countTo:59,
  from:0,
  duration:2
}

request($event){
  this.ex=$event
  console.log(this.ex)
    }
  
}
