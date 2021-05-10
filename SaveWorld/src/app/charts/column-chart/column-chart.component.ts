import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import * as Highcharts from 'highcharts';
import { element } from 'protractor';
import { SaveWorldService } from '../../services/save-world.service';


@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {
  Highcharts = Highcharts;
  data: any[];
  ChartData = [];
  ChartData2 = [];
  ChartData3 = [];
  ChartData4 = [];
  chartOptions: Highcharts.Options;
  constructor(private _SaveWrorldService: SaveWorldService) { }

  ngOnInit() {
    this.ColumnChart();
  }

  ColumnChart() {
    this._SaveWrorldService.EmissionBySource().subscribe(res => {
      this.data = res;

      error => console.log(error)
      console.log(this.data);
      this.data.forEach(element => {
        element['source'] == 'Surse Mobile' ? this.ChartData.push(element['valoare']) : null
        element['source'] == 'Surse Statice' ? this.ChartData2.push(element['valoare']) : null
        element['source'] == 'Surse naturale' ? this.ChartData3.push(element['valoare']) : null
        element['source'] == 'Surse industriale' ? this.ChartData4.push(element['valoare']) : null
      });
      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Emisia  gazelor poluante in functie de sursa'
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: false
            }
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: ['CO2', 'NH3', 'NOX', 'PM 2.5', 'PM 10', 'SO2'],
          tickInterval: 1
        },
        yAxis: {
          max: 100
        },
        series: [{
          name: 'Surse industriale',
          type: 'column',
          data: this.ChartData,
          color: '#0000cc'
        },
        {
          name: 'Surse Mobile',
          type: 'column',
          data: this.ChartData2,
          color: '#660066'

        },
        {
          name: 'Surse Statice',
          type: 'column',
          data: this.ChartData3,
          color: '#ff4000'

        },
        {
          name: 'Surse naturale',
          type: 'column',
          data: this.ChartData4,
          color: '#008000'

        }]
      }
    });
  }
}


