import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { SaveWorldService } from '../../services/save-world.service'
var Highcharts = require('highcharts/highmaps.js');
var map = require('@highcharts/map-collection/custom/world.geo.json');
interface ExtendedChart extends Highcharts.Chart {
  sequenceTimer?;
}

@Component({
  selector: 'app-evolution-chart',
  templateUrl: './evolution-chart.component.html',
  styleUrls: ['./evolution-chart.component.css']
})
export class EvolutionChartComponent {


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions;
  chartConstructor = "mapChart";
  chartData = [{ cod3: "ABW", z: 105 }, { cod3: "AFG", z: 35530 }];
  series: any[]; series2: any[]; series3: any[]; series4: any[]; series5: any[]; series6: any[]; series7: any[];
  @ViewChild("playPauseButton", { static: true }) playPauseButton;
  @ViewChild("playRange", { static: true }) playRange;
  @ViewChild("playOutput", { static: true }) playOutput;
  chartRef: ExtendedChart;
  dataSequence: any[]
  allData: any[];

  constructor(private _SaveWrorldService: SaveWorldService) { }
  Chart() {


    this._SaveWrorldService.evolutionChart().subscribe(res => {
      this.allData = res;

      error => console.log(error)
      console.log(this.allData);
    
        this.allData.forEach(elem => {
          if (elem['an'] == 2014) {
            this.series = this.allData.reduce((r, e) => {
              r.push([e.cod3, e.valoare])
              return r;
            }, [])
          } else if (elem['an'] == 2015) {
            this.series2 = this.allData.reduce((r, e) => {
              r.push([e.cod3, e.valoare])
              return r;
            }, [])
          }
          else if (elem['an'] == 2016) {
            this.series3 = this.allData.reduce((r, e) => {
              r.push([e.cod3, e.valoare])
              return r;
            }, [])
          }
          else if (elem['an'] == 2017) {
            this.series4 = this.allData.reduce((r, e) => {
              r.push([e.cod3, e.valoare])
              return r;
            }, [])
          }
          else if (elem['an'] == 2018) {
            this.series5 = this.allData.reduce((r, e) => {
              r.push([e.cod3, e.valoare])
              return r;
            }, [])
          }
          else if (elem['an'] == 2019) {
            this.series6 = this.allData.reduce((r, e) => {
              r.push([e.cod3, e.valoare])
              return r;
            }, [])
          } else if (elem['an'] == 2020) {
            this.series7 = this.allData.reduce((r, e) => {
              r.push([e.cod3, e.valoare])
              return r;
            }, [])
          }
          
        })

        /// console.log(this.allData[i]); merge



      this.dataSequence = [

        {
          name: '2014',
          data: this.series
        }, {
          name: '2015',
          data: this.series2
        }, {
          name: '2016',
          data: this.series3
        }, {
          name: '2017',
          data: this.series4
        }, {
          name: '2018',
          data: this.series5
        }, {
          name: '2019',
          data: this.series6
        }, {
          name: '2020',
          data: this.series7
        }
      ]

      this.chartOptions = {
        chart: {
          map: map as any

        },
        title: {
          text: 'Emisia de CO2 intre anii 2014-2020'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        colorAxis: {
          dataClasses: [{
            to: 0,
            name: 'No data'
          }, {
            from: 0,
            to: 50000000,
            name: '0-50 mil t',
            color: "#fffafb"

          },
          {
            from: 50000000,
            to: 100000000,
            name: '50-100 mil t',
            color: "#ffe6e6"
          }, {
            from: 100000000,
            to: 250000000,
            name: '100-250 mil t',
            color: "#faeceb"
          },
          {
            from: 250000000,
            to: 500000000,
            name: '250-500 mil t',
            color: "#e6acac"
          }, {
            from: 500000000,
            to: 1000000000,
            name: '500-1 t',
            color: "#f07d7d"
          }, {
            from: 1000000000,
            to: 2500000000,
            color: "#d63e3e",
            name: '1-2.5 b t'
          },

          {
            from: 2500000000,
            to: 5000000000,
            name: '2.5-5 b t',
            color: "#d6330b"
          }, {

            from: 5000000000,
            to: 7500000000,
            name: '5-7.5 b t',
            color: "#990606"
          },
          {
            from: 7500000000,
            to: 12000000000
          }]
        },
        series: [{
          data: this.dataSequence[0].data.slice(),
          name: 'CO2',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }]
      }

    })
  }


  chartCallback: Highcharts.ChartCallbackFunction = chart => {
    this.chartRef = chart;
  };
  play(button) {
    button.title = "pause";
    button.className = "fa fa-pause";
    this.chartRef.sequenceTimer = setInterval(() => {
      this.update(1);
    }, 1000);
  }
  update(increment) {
    var input = this.playRange.nativeElement;
    var output = this.playOutput.nativeElement;

    if (increment) {
      input.value = parseInt(input.value) + increment;
    }
    this.chartRef.series[0].setData(this.dataSequence[input.value].data);

    output.innerHTML = this.dataSequence[input.value].name;
    if (input.value >= input.max) {
      this.pause(this.playPauseButton.nativeElement);
    }
  }
  pause(button) {
    button.title = "play";
    button.className = "fa fa-play";
    clearTimeout(this.chartRef.sequenceTimer);
    this.chartRef.sequenceTimer = undefined;
  }
  togglePlay() {
    if (this.chartRef.sequenceTimer == undefined) {
      this.play(this.playPauseButton.nativeElement);
    } else {
      this.pause(this.playPauseButton.nativeElement);
    }
  }
  ngOnInit() {
    this.Chart();
  }
  
}
