import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SaveWorldService } from '../../services/save-world.service'
import { emissions } from '../../classes/emission';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  allData: any[]
Highcharts=Highcharts;
  emission: emissions[];
  url: string = 'http://localhost:61382/api/emission/'
  polluantsData: any[];
  constructor(private _SaveWrorldService: SaveWorldService) { }
  chartOptions

  ngOnInit() {
    this.getChart();

  }
  getChart() {

    this._SaveWrorldService.Emission(this.url).subscribe(res => {

      this.allData = res;
console.log(this.allData)
      error => console.log(error)
      let CO2Data = []
      let NH3Data = []
      let NOxData = []
      let PM1Data = []
      let PM2Data = []
      let SO2Data = []
      this.allData.forEach(element => {
        if (element['denumire'] === 'C02') {
          CO2Data.push(element.valoare)
        } else if (element['denumire'] === 'NH3') {
          NH3Data.push(element.valoare)
        } else if (element['denumire'] === 'NOx') {
          NOxData.push(element.valoare)
        }
        else if (element['denumire'] === 'PM 2.5') {
          PM1Data.push(element.valoare)
        } else if (element['denumire'] === 'PM 10') {
          PM2Data.push(element.valoare)
        }
        else if (element['denumire'] === 'SO2') {
          SO2Data.push(element.valoare)
        }
      })
      //onsole.log(PM1Data) nu da eroare
      this.chartOptions ={
        chart: {
          type: 'line'
        },
        title: {
          text: 'Evolutia emisiei poluantilor intre anii 2008-2020'
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
        },
        tooltip: {
          shared: true
        },

        series: [{
          name: 'CO2',
          type: 'line',
          data: CO2Data
        }, {
          name: 'NH3',
          type: 'line',
          data: NH3Data
        },
        {
          name: 'NOX',
          type: 'line',
          data: NOxData
        },
        {
          name: 'PM 2.5',
          type: 'line',
          data: PM1Data
        },
        {
          name: 'PM 10',
          type: 'line',
          data: PM2Data
        },
        {
          name: 'SO2',
          type: 'line',
          data: SO2Data
        },
        ]
    

    }
  });

  }

}