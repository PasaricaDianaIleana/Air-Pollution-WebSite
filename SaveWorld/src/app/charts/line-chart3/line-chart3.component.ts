import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SaveWorldService } from '../../services/save-world.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts'
@Component({
  selector: 'app-line-chart3',
  templateUrl: './line-chart3.component.html',
  styleUrls: ['./line-chart3.component.css']
})
export class LineChart3Component implements OnInit {

  ngOnInit() {
    //this.selectOptions();NU MERGE

    //this.datainputForm = this.fb.group({
     // dropDownTest: 'Europa',
     // dropDownTest1: ''
    //})

  }
/*
  EuropaData = [];
  years = [];
  AmericaS = []
  AmericaN = []
  AustraliaData = []
  AfricaData = []
  AsiaData = []
  updateFlag = false;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Options;
  continent: [];
  selectItem: any[];
  allData: any[];
  DropdownSettings: any = {};
  removeDuplicate: any[];
  constructor(private _SaveWrorldService: SaveWorldService, private fb: FormBuilder) { }
  datainputForm: FormGroup;
  

  selectOptions() {


    this._SaveWrorldService.ContinentsData().subscribe(res => {
      this.allData = res;

      error => console.log(error)
      //console.log(this.allData)

      this.removeDuplicate = this.allData.reduce((a, c) => {
        if (!a.find(obj => obj.continent === c.continent)) {
          a.push(c);
        }
        return a;
      }, []);


      //console.log(this.removeDuplicate);

      this.allData.forEach(value => {
        if (value['continent'] === 'Europa') {
          this.EuropaData.push(value.valoare),
            this.years.push(value.an);

        } else if (value['continent'] === 'Africa') {
          this.AfricaData.push(value.valoare);
        }
        else if (value['continent'] === 'Asia') {
          this.AsiaData.push(value.valoare);
        } else if (value['continent'] === 'America de Sud') {
          this.AmericaS.push(value.valoare);
        } else if (value['continent'] === 'America de Nord') {
          this.AmericaN.push(value.valoare);
        } else if (value['continent'] === 'Australia') {
          this.AustraliaData.push(value.valoare);
        }

      })


      this.EuropaChart();
    })
  }

  EuropaChart() {
    this.chartOptions = {

      chart: {
        type: 'line'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.years
      },
      series: [{
        name: 'Europa',
        type: 'line',
        data: this.EuropaData
      }]

    }
  }
  onSelectChange() {
    console.log(this.datainputForm.get('dropDownTest').value);

    if (this.datainputForm.get('dropDownTest').value.continent === 'Africa') {

      this.chartOptions.title = {
        text: 'Emisia de CO2 produsa de verhicule in Africa'
      },

        this.chartOptions.series[0] = {
          name: 'Africa',
          type: 'line',
          data: this.AfricaData
        }
      this.updateFlag = true;
    } else if (this.datainputForm.get('dropDownTest').value.continent === 'Asia') {
      this.chartOptions.title = {
        text: 'Emisia de CO2 produsa de verhicule in Asia'
      },

        this.chartOptions.series[0] = {
          name: 'Asia',
          type: 'line',
          data: this.AsiaData
        }
      this.updateFlag = true;
    }
    else if (this.datainputForm.get('dropDownTest').value.continent === 'America de Sud') {
      this.chartOptions.title = {
        text: 'Emisia de CO2 produsa de verhicule in America de Sud'
      },

        this.chartOptions.series[0] = {
          name: 'America de Sud',
          type: 'line',
          data: this.AmericaS
        }
      this.updateFlag = true;
    } else if (this.datainputForm.get('dropDownTest').value.continent === 'America de Nord') {
      this.chartOptions.title = {
        text: 'Emisia de CO2 produsa de verhicule in America de Nord'
      },

        this.chartOptions.series[0] = {
          name: 'America de Nord',
          type: 'line',
          data: this.AmericaN
        }
      this.updateFlag = true;
    }
    else if (this.datainputForm.get('dropDownTest').value.continent === 'Australia') {
      this.chartOptions.title = {
        text: 'Emisia de CO2 produsa de verhicule in Australia'
      },

        this.chartOptions.series[0] = {
          name: 'Australia',
          type: 'line',
          data: this.AustraliaData
        }
      this.updateFlag = true;
    }


  }
  */
}
