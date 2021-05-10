import { Component, OnInit } from '@angular/core';

import { SaveWorldService } from '../../services/save-world.service'
import { Options } from "highcharts";

var Highcharts = require('highcharts/highmaps.js');
var map = require('@highcharts/map-collection/custom/world.geo.json');
@Component({
  selector: 'app-highmap',
  templateUrl: './highmap.component.html',
  styleUrls: ['./highmap.component.css']
})
export class HighmapComponent implements OnInit {

  data1: any[];
  chart2=[]
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartOptions;
  updateFlag = false;
  chartData = [{ cod3: "ABW", z: 105 }, { cod3: "AFG", z: 35530 }];
  constructor(private _SaveWrorldService: SaveWorldService) { }




  ngOnInit() {
    this.Map();

  }
 Map() {
    let chart1 = [];

    this._SaveWrorldService.MapChart().subscribe(res => {
      this.data1 = res;

      error => console.log(error)
      //console.log(this.data1);merge


      // console.log(this.data2)

this.data1.forEach(elem => {
  if(elem['an']==2019){
    chart1 = this.data1.reduce((r, i) => {
      r.push([i.cod3, i.valoare])
      return r;
    }, []);
  }
  else{
    this.chart2 = this.data1.reduce((a, e) => {
      a.push([e.cod3, e.valoare])
      return a;
    }, []);
  }
  
});
     

      this.chartOptions = {

        chart: {
          map: map as any
        },
        title: {
          text: "Decese cauzate de poluarea aerului  in anul 2019"
        },
        subtitle: {
          text: ""
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: "spacingBox"
          }
        },
        legend: {
          enabled: true,
        },
        colorAxis: {

          dataClasses: [{
            to: 0
          }, {
            from: 0,
            to: 2,
            color: "#ccf5ff"

          },
          {
            from: 2,
            to: 4,
            color: "#ffe6e6"
          }, {
            from: 4,
            to: 6,
            color: "#99b3ff"
          },
          {
            from: 6,
            to: 8,
            color: "#6666ff"
          }, {
            from: 8,
            to: 10,
            color: "#bb99ff"
          }, {
            from: 10,
            to: 12,
            color: "#cc6699"
          },

          {
            from: 12,
            color: "#ff8080"
          }]
        },
        series: [{
          type: "map",

          name: "",
          states: {
            hover: {
              color: "#BADA55"
            }
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}"
          },
          allAreas: false,
          data: chart1
        }]
      }
    });

  }
  
  onClick() {
   

      this.chartOptions = {
        title: {
          text: "Decese cauzate de poluarea aerului  in anul 2020"
        },
        series: [
          {
            type: "map",
            data: [...(this.chartOptions.series[0] as any).data, this.chart2]
          }
        ]
      }
      this.updateFlag = true;
    
  }
}


