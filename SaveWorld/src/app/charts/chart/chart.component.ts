import { Component, OnInit } from "@angular/core";
import { SaveWorldService } from '../../services/save-world.service'
import * as Highcharts from "highcharts";

declare module 'highcharts' {
  interface Point {
    highlight: (event: Highcharts.PointerEventObject) => void;
  }
}

Highcharts.Pointer.prototype.reset = function () {
  return undefined;
};


Highcharts.Point.prototype.highlight = function (event) {
  event = this.series.chart.pointer.normalize(event);
  this.onMouseOver(event);
  //this.series.chart.tooltip.refresh(this); // Show the tooltip
  this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
};

@Component({
  selector: "app-chart",
  templateUrl: "chart.component.html"
})
export class ChartComponent implements OnInit {
  Highcharts = Highcharts;
  chartData: any[];

  chartOptions1: Highcharts.Options;
  chartOptions2: Highcharts.Options;
  url: string = 'http://localhost:61382/api/emission/'
  allData2: any[];
  allData: any[];

  ngOnInit() {

    this.GetData();
  }


  GetData() {

    this._SaveWrorldService.EmissionChart().subscribe(res => {
      this.allData = res;
      error => console.log(error)
      console.log(this.allData);

      let series1 = [];
      let series2 = [];
      let series3 = [];
      let series4 = [];
      let years = [];
      this.allData.forEach(element => {
        if (element['source'] === 'Productie Electricitate' && element['poluant'] === 'CO2') {
          series1.push(element.valoare);
          years.push(element.an);
        } else if (element['source'] === 'Surse Industriale' && element['poluant'] === 'CO2') {
          series2.push(element.valoare);

        } else if (element['source'] === 'Surse Statice' && element['poluant'] === 'CO2') {
          series3.push(element.valoare);

        } if (element['source'] === 'Surse Mobile' && element['poluant'] === 'CO2') {
          series4.push(element.valoare)
        }
      })


      this.chartOptions2 = {
        chart: {
          type: 'area',
          marginLeft: 40,
          spacingTop: 20,
          spacingBottom: 20,
          className: "chart-sync-a"
        },
        title: {
          text: "Evolutia emisiei de CO2 in functie de surse ",

        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: true
        },
        xAxis: {
          categories: years,
          crosshair: true,
          events: {
            setExtremes: function (e: any) {
              var thisChart = (this as Highcharts.Axis).chart;

              if (e.trigger !== "syncExtremes") {
                // Prevent feedback loop
                Highcharts.charts.forEach(function (chart) {
                  if (chart !== thisChart && (chart.options.chart && chart.options.chart.className) === (thisChart.options.chart && thisChart.options.chart.className)) {
                    if (chart.xAxis[0].setExtremes) {

                      chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                        trigger: "syncExtremes"
                      });
                    }
                  }
                });
              }
            }

          },

        },
        yAxis: {
          title: {
            text: null
          },

        },
        plotOptions: {
          area: {
            stacking: 'normal',

          }
        },
        tooltip: {
          shared: true,

        },
        series: [
          {
            data: series1,
            name: "Productia de Electricitate",
            color: '#0052cc'
          } as Highcharts.SeriesAreaOptions,
          {
            data: series2,
            name: "Surse Industriale",
            color: '#cc2900'
          } as Highcharts.SeriesAreaOptions,
          {
            data: series3,
            name: "Surse Mobile",
            color: '#2d862d'
          } as Highcharts.SeriesAreaOptions,
          {
            data: series4,
            name: "Surse Statice",
            color: '#8a00e6'
          } as Highcharts.SeriesAreaOptions

        ]
      };

    })

    this._SaveWrorldService.Emission(this.url).subscribe(response => {
      this.allData2 = response;
      error => console.log(error)
      let chart1 = []
      let xAxisData = []

      this.allData2.forEach(elem => {
        if (elem['denumire'] === 'C02') {
          chart1.push(elem.valoare),
            xAxisData.push(elem.an)
        }
      })

      this.chartOptions1 = {
        chart: {
          type: 'area',
          marginLeft: 40,
          spacingTop: 20,
          spacingBottom: 20,
          className: "chart-sync-a"
        },
        title: {
          text: "Emisa de CO2 intre anii 2008-2020",


        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: true
        },
        xAxis: {
          categories: xAxisData,
          crosshair: true,
          events: {
            setExtremes: function (e: any) {
              var thisChart = (this as Highcharts.Axis).chart;

              if (e.trigger !== "syncExtremes") {
                // Prevent feedback loop
                Highcharts.charts.forEach(function (chart) {
                  if (chart !== thisChart && (chart.options.chart && chart.options.chart.className) === (thisChart.options.chart && thisChart.options.chart.className)) {
                    if (chart.xAxis[0].setExtremes) {
                      // It is null while updating
                      chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                        trigger: "syncExtremes"
                      });
                    }
                  }
                });
              }
            }
          },

        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
            formatter: function () {
              return this.value / 1000000 + 'M'
            }
          }
        },

        series: [
          {
            data: chart1,
            name: "CO2",
            color: '#0052cc'
          } as Highcharts.SeriesAreaOptions
        ]
      };

    })

  }

  constructor(private _SaveWrorldService: SaveWorldService) { }
  synchronizeTooltips = (e: any) => {
    var chart,
      point,
      i,
      event,
      charts = Highcharts.charts,
      sourceChart = charts[(Highcharts as any).hoverChartIndex];
    for (i = 0; i < charts.length; i = i + 1) {
      chart = charts[i];

      if (chart && (chart.options.chart && chart.options.chart.className) === (sourceChart.options.chart && sourceChart.options.chart.className)) {

        event = chart.pointer.normalize(e);

        // Get the hovered point
        point = (chart.series[0] as any).searchPoint(event, true);

        if (point) {
          point.highlight(e);
        }
      }
    }
  };




}
