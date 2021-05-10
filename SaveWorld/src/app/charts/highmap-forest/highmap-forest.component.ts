import { Component, OnInit } from '@angular/core';
import {Options} from "highcharts";



var Highcharts=require('highcharts/highmaps.js');
var map=require('@highcharts/map-collection/custom/world.geo.json');
@Component({
  selector: 'app-highmap-forest',
  templateUrl: './highmap-forest.component.html',
  styleUrls: ['./highmap-forest.component.css']
})
export class HighmapForestComponent implements OnInit {

  
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor="mapChart";
  chartData=[{cod3:"ABW", z:105}, {cod3:"AFG",z:35530}];

  chartOptions:Options={
    chart:{
      map:map as any
    },
    title:{
      text:"Distributia padurilor pe glob!"
    },
    subtitle:{
      text:''

    },
    mapNavigation:{
      enabled:true,
      buttonOptions:{
        alignTo:"spacingBox"
      }
    },
    legend:{
      enabled:true
    },
    colorAxis:{
      min:0
    },
    series:[
{
      type: "map",
     name:"Paduri(ha)",
     states:{
       hover:{
         color:"#BADA55"
       }
     },
     dataLabels:{
       enabled:true,
       format:"{point.name}"
     },
     allAreas:false,
     data:[
      
      
     ]
  }

  ]
  };
data=[
  ["us", 309795],
  ["jp", 24935],
  ["sc", 34],
  ["in", 72160],
  ["fr", 17253],
  ["fm", 64],
  ["cn", 219978],
  ["pt", 3312],
  ["br", 496620],
  ["ki", 1],
  ["ph",7189],
  ["mx", 65692],
  ["es", 18572],
  ["mv", 1],
  ["gr", 3902],
  ["as", 17],
  ["dk", 628],
  ["gl", 18],
  ["pr", 496],
  ["vi", 20],
  ["ca", 346929],
  ["st", 52],
  ["cv", 46],
  ["dm", 48],
  ["nl", 370],
  ["jm",597 ],
  ["ws", 162],
  ["om", 3],
  ["vc", 29],
  ["tr", 22220],
  ["bd", 1883],
  ["lc", 21],
  ["no", 12180],
 
  ["to", 9],
  ["fi", 22409],
  ["id", 92133],
  ["mu", 39],
  ["se", 27980],
  ["tt", 228],
  ["my", 19114],
  ["pa", 4214],
  ["pw", 41],
  ["cl", 18211],
  ["th", 19873],
  ["gd", 18],
  ["ee", 2438],
  ["ag", 8],
  ["bb", 6],
  ["it", 9566],
  ["vu", 442],
  ["sg", 16],
  ["cy", 173],
  ["lk", 2113],
  ["km", 33],
  ["fj", 1140],
  ["ru", 815312],
  ["kz", 3455],
  ["az", 1132],
  ["tj", 424],
  ["ls", 35],
  ["uz", 3690],
  ["ma", 5742],
  ["co", 59142],

  ["tz", 45745],
  ["ar", 28573],
  ["sa", 977],
  ["pk", 3726],
  ["ye", 549],
  ["ae", 317],
  ["ke", 3611],
  ["pe", 72330],
  ["do", 2144],
  ["ht", 347],
  ["pg", 35856],
  ["ao", 66607],
  ["kh", 8068],
  ["vn", 14643],
  ["mz", 36744],
  ["cr", 3035],
  ["bj", 3135],
  ["ng", 21627],
  ["ir", 10752],
  ["sv", 584],
  ["sl", 2535],
  ["gw", 1980],
  ["bz", 1277],
  ["za", 17050],
  ["cf", 22303],
  ["sd", 18360],
  ["kw", 6],
  ["de", 11419],
  ["be", 689],
  ["ie", 782],
  ["gy", 18415],
  ["hn", 6359],
  ["mm", 28544],
  ["ga", 23531],
  ["gq", 2448],
  ["ni", 3408],
  ["lv", 3408],
  ["ug", 2338],
  ["mw", 2242],
  ["am", 328],
  ["tm", 4127],
  ["zm", 44814],
  ["nc", 838],
  ["mr", 313],
  ["dz", 1949],
  ["lt", 2201],
  ["et", 17069],
  ["er", 1055],
  ["gh", 7986],
  ["si", 1238],
  ["gt", 3528],
  ["ba", 2188],
  ["jo", 98],
  ["sy", 522],
  ["al", 789],
  ["uy", 2031],
   ["mn", 14173],
  ["rw", 276],
  ["so", 5980],
  ["bo", 50834],
  ["ro", 6929],
  ["rs", 2723],
  ["me", 827],
  ["tg", 1209],
  ["af", 1208],
  ["ua", 9690],
  ["sk", 1926],

  ["bg", 3899],
 
  ["li", 7],
  ["at", 3899],

  ["hu", 2053],
  
  ["ne", 1080],
  ["lu", 89],
  ["ad", 16],
 
  ["lr", 7617],
 
  ["iq", 825],
  ["ge", 2822],
  ["gm", 243],
  ["ch", 1269],
  ["td", 4313],
  ["kv", 6],
  ["lb", 143],
  ["dj", 6],
  
  ["sr", 15196],
  ["il", 140],
  ["ml", 13296],
  ["sn", 8068],
  ["gn", 6189],
  ["zw", 17445],
  
  ["py", 16102],
  ["cz", 2677],

  ["na", 6639],
  ["ly", 217],
  ["tn", 703],
  ["bt", 2725],
  ["md", 387],
  ["bw", 15255],
  ["bs", 510],
  ["nz", 9893],
  ["cu", 3242],
  ["ec", 12498],
  ["au", 134005],
  ["ve", 46231],
  ["sb", 2523],
  ["mg", 12430],
  ["is", 51],
  ["eg", 45],
  ["kg", 1315],
  ["np", 5962]
];
  constructor() { }

  ngOnInit() {
  }

}
