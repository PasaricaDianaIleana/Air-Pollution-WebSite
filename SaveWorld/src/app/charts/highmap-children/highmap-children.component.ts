import { Component, OnInit } from '@angular/core';
import { Options } from "highcharts";
import { SaveWorldService } from '../../services/save-world.service'

var Highcharts = require('highcharts/highmaps.js');
var map = require('@highcharts/map-collection/custom/world.geo.json');
@Component({
  selector: 'app-highmap-children',
  templateUrl: './highmap-children.component.html',
  styleUrls: ['./highmap-children.component.css']
})
export class HighmapChildrenComponent implements OnInit {


  allData: any[];
  DataChart: any[];
  chartOptions;
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartData = [{ cod3: "ABW", z: 105 }, { cod3: "AFG", z: 35530 }];

  constructor(private _SaveWrorldService: SaveWorldService) { }

  ngOnInit() {
    this.map();
  }


  map() {
    this._SaveWrorldService.HealthChart().subscribe(res => {
      this.allData = res;

      error => console.log(error)
      //console.log(this.allData);take longer to load
      this.DataChart = this.allData.reduce((r, i) => {
        r.push([i.cod3, i.valoare])
        return r;
      }, []);

      //console.log(this.DataChart);

      this.chartOptions = {
        chart: {
          map: map as any
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: "spacingBox"
          }
        },
        legend: {
          enabled: true,
          title: {
            text: '',
            style: {
              color: (
                Highcharts.defaultOptions &&
                Highcharts.defaultOptions.legend &&
                Highcharts.defaultOptions.legend.title &&
                Highcharts.defaultOptions.legend.title.style &&
                Highcharts.defaultOptions.legend.title.style.color
              ) || 'black'
            }
          },
          align: 'left',
          verticalAlign: 'bottom',
          floating: true,
          layout: 'vertical',

          backgroundColor: (
            Highcharts.defaultOptions &&
            Highcharts.defaultOptions.legend &&
            Highcharts.defaultOptions.legend.backgroundColor
          ) || 'rgba(255,255,255,0.85)',
          symbolRadius: 0,
          symbolHeight: 14
        },
        colorAxis: {
          dataClasses: [{
            to: 1
          },
          {
            from: 1,
            to: 10,
            color: ' #00802b'
          }, {
            from: 10,
            to: 50,
            color: '#006600'
          }, {
            from: 50,
            to: 75,
            color: '#39ac73'
          }, {
            from: 75,
            to: 90,
            color: '#0099cc'
          }, {
            from: 90,
            to: 100,
            color: '#004080'
          }]
        },
        series: [
          {
            type: "map",

            name: '',
            states: {
              hover: {
                color: "#006600"
              }
            },
            dataLabels: {
              enabled: true,
              format: "{point.name}"
            },
            allAreas: false,
            data: this.DataChart

          }

        ]

      }
    })
  }

}
