import { Component, OnInit } from '@angular/core';
import  * as Highcharts from 'highcharts';
@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.css']
})
export class PieChart2Component implements OnInit {
  highcharts=Highcharts;
  chartOptions={
    chart:{
      type:'pie'
    },
    title:{
      text:''
    },
    plotOptions:{
      pie:{
        allowPointSelect:true,
        showInLegend:true,
        cursor:'pointer',
        dataLabels:{
          enabled:true,
          format:'<b>{point.name}</b>:{point.percentage:.1f}%'
        }
      }
    },
    tooltip:{
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'

    },
    series:[{
      name:'',
      colorByPoint:true,
      data:[{
        name:'Europa',
        y:467000,
      },
    {
     name:'America de Sud',
     y:234000,
    },{
  name:'America de Nord',
  y:64600
    },
  {
name:'Asia',
y:2490000
  },
{
  name:'Africa',
  y:931600
},
{
  name:'Australia',
  y:28000,
}]
    }]
  };
  constructor() { }

  ngOnInit() {
  }

}
