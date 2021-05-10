import { Component, OnInit } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Chart } from 'angular-highcharts';
import { SaveWorldService } from '../../services/save-world.service';
@Component({
  selector: 'app-column-chart2',
  templateUrl: './column-chart2.component.html',
  styleUrls: ['./column-chart2.component.css']
})
export class ColumnChart2Component implements OnInit {
  chart: Chart;
  chartData: any[];
  Data1=[];
  Data2=[];
  Data3=[];
  Data4=[];
  Data5=[];
  labels: any[];
  constructor(private _SaveWrorldService: SaveWorldService) { }

  ngOnInit() {
    this.columnChart();
  }
  
  columnChart() {
    this._SaveWrorldService.TransportEmissions().subscribe(response => {
      this.chartData = response;

      error => console.log(error)

      this.chartData.forEach(element => {
        element['source'] == 'Alte sectoare' ? this.Data1.push(element['valoare']) : null
        element['source'] == 'Aviatie' ?this.Data2.push(element['valoare']) : null
        element['source'] == 'Transport feroviar' ? this.Data3.push(element['valoare']) : null
        element['source'] == 'Transport naval' ? this.Data4.push(element['valoare']) : null
        element['source'] == 'Transport rutier' ? this.Data5.push(element['valoare']) : null
      });
     
      this.chart = new Chart({
        chart: {
          type: 'column'
        },
        title: {
          text: 'Linechart'
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
          categories: ['CO2', 'VOC', 'NOx', 'PM 2.5', 'PM10', 'SOx']
        },
        series: [{
          name: 'Alte sectoare',
          type: 'column',
          data: this.Data1,
          color: "#e4e7e7"
        },
        {
          name: 'Aviatie',
          type: 'column',
          data: this.Data2,
          color: "#80ccff"

        },
        {
          name: 'Transport naval',
          type: 'column',
          data:this.Data3,
          color: "#005c99"

        },
        {
          name: 'Transport feroviar',
          type: 'column',
          data:this.Data4,
          color: "#7a0099"

        },
        {
          name: 'Transport rutier',
          type: 'column',
          data:this.Data5,
          color: "#00b359"

        }]
      })
    })
  }

}
