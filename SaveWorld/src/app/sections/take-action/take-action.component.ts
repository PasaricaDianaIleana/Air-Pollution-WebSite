import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-take-action',
  templateUrl: './take-action.component.html',
  styleUrls: ['./take-action.component.css']
})
export class TakeActionComponent implements OnInit {

  constructor(private  router:Router) { }

  ngOnInit() {
    
  }
  onClick(){
    this.router.navigateByUrl('/Petitie');
       }
}
