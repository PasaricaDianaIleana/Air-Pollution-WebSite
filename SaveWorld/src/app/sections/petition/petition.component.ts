import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../classes/users';
import { SaveWorldService } from '../../services/save-world.service';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { element } from 'protractor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Highcharts from "highcharts";
import { Options } from 'highcharts';

const parallelCoordinates = require("highcharts/modules/parallel-coordinates.js");
parallelCoordinates(Highcharts)
@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./petition.component.css']
})


export class PetitionComponent {
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  data = [
    [Date.now() - 3600 * 4, 2],
    [Date.now() - 3600 * 3, 3],
    [Date.now() - 3600 * 2, 1],
    [Date.now() - 3600, 7]
  ];


  chartOptions: Options = {
    xAxis: {
      type: "datetime"
    },
    time: {
      useUTC: true,
      timezoneOffset: -360
    },

    series: [
      {
        type: "line",
        data: this.data
      }
    ]
  };

  onClick() {
    var i = 1;
    this.chartOptions.series = [
      {
        type: "line",
        data: [...this.data, [Date.now(), i]]

      }
    ];
    this.updateFlag = true;
  }

  url: string = 'http://localhost:61382/api/user/';
  addForm: FormGroup;
  constructor(private _SaveWrorldService: SaveWorldService,
    private fromBuilder: FormBuilder, private modalService: NgbModal) { }

  /*
  ngOnInit() {
    this.addForm=this.fromBuilder.group(
      {
     
        Nume:['',Validators.required],
        Email:['',Validators.required],
        Adresa:['',Validators.required],
      });
  }
postApiResponse(formVal,url){
  return this._SaveWrorldService.addUser(this.url,formVal)
  .toPromise().then(res =>{
    return res;
  });
}


onSumbit(){
  console.log(this.addForm.value);
  this.postApiResponse(this.addForm.value,this.url).then(
    data =>{
      if(!data){
        alert('You sign with success')
      }else 
      {
        alert('Something went wrong')
      }
    });
}

openScrollableContent(longContent) {
  this.modalService.open(longContent, { scrollable: true });
}
*/
}
