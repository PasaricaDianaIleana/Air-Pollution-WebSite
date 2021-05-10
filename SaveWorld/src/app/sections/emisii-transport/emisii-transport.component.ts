import { Component, OnInit } from '@angular/core';
import {Chart, Options} from "highcharts";


var Highcharts=require('highcharts/highmaps.js');
var map=require('@highcharts/map-collection/custom/world.geo.json');

@Component({
  selector: 'app-emisii-transport',
  templateUrl: './emisii-transport.component.html',
  styleUrls: ['./emisii-transport.component.css']
})
export class EmisiiTransportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor="mapChart";
  chartData=[{cod3:"ABW", z:105}, {cod3:"AFG",z:35530}];

  chartOptions:Options={
    chart:{
      map:map as any,
   

      
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
      enabled:true,
     
    },
    colorAxis:{
     dataClasses:[{
     
     
       from:0,
       to:50000000,
       name:'0-50 million t',
       color:'#ffe6ff'
     },{
       from:50000000,
       to:100000000,
       name:'50-100 million t',
       color:'#fff2e6'
     },
    {
      from:100000000,
      to:250000000,
      name:'100-250 milion t',
      color:'#ffb3b3'
    },{
      from:250000000,
      to:500000000,
      name:'250-500 milion t',
      color:'#ffcccc'
    },
  {
    from:500000000,
    to:1000000000,
    name:'500-1 billion t',
    color:'#ffb3b3'
  },
{
  from:1000000000,
  to:2500000000,
  name:'1-2.5 billion t',
  color:'#ff8080'
},{
  from:2500000000,
  to:  5000000000,
  name:'2.5-5 billion t',
  color:'#ff9999'
},{
  from:5000000000,
  to:  7500000000,
  name:'5-7.5 billion t',
  color:'#b30000'
  
},{
  from:7500000000,
  to:10000000000,
  name:'7.5-10 billion t',
  color:'#ff3333'
},
{
  from:10000000000,
  name:'>1 billion t ',
  color:'#990000'

}]
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
      ["us", 5420000000],
      ["jp", 1160000000],
      ["pl",343540000],
      ["mt",158000000],
      ["sc", 655244],
      ["in",2650000000],
      ["fr", 337910000],
    
     ["hr",186000000],
      ["cn", 10060000000],
      ["pt",50930000],
      ["br", 457190000],
      
      ["ph",135070000],
      ["mx", 477320000],
      ["es", 268230000],
      ["mv", 152000000],
      ["gr", 73890000],
     
      ["dk",34810000],
      ["gl", 511378],
    
    ["ci",83900000],
      ["ca",5684100000],
    
     ["cv", 628229],
      ["dm", 182407],
      ["nl", 161620000],
      ["jm",81900000 ],
      ["ws", 258978],
      ["om", 67290000],
      ["vc", 223356],
      ["tr", 428180000],
      ["bd", 85690000],
      ["lc", 420654],
      ["no", 44330000],
     
      ["to", 135287],
      ["fi", 46990000],
      ["id", 614920000],
     ["mu",4850000],
      ["se",41030000],
      ["tt",43480000],
      ["my", 254530000],
      ["pa", 10940000],
      
      ["cl", 85880000],
      ["th", 288230000],
      ["bn",7930000],
      ["gd", 2705900000],
      ["ee",19560000],
      ["ag", 563835],
     ["bb", 1280000],
      ["it", 338030000],
      ["vu", 154614],
      ["tw",274640000],
      ["sg",40860000],
      ["cy", 7490000],
      ["lk", 23370000],
      ["km", 218415],
      ["fj", 2130000],
      ["ru", 17100000],
      ["kz", 321790000],
      ["az", 36790000],
      ["tj", 5480000],
    
      ["uz", 912700000],
      ["ma", 663000000],
      ["co",9727000000],
    ["kp",302200000],
    ["kr",658790000],
      ["tz", 12500000],
     ["ar", 1955300000],
      ["sa", 62130000],
     ["pk",2235400000],
      ["ye", 10140000],
      ["ae", 20560000],
     ["ke", 18490000],
      ["pe", 55530000],
     ["do", 24860000],
      ["ht", 3000000],
      ["pg", 78400000],
      ["ao", 345400000],
      ["kh", 10140000],
      ["vn", 206660000],
      ["mz", 8290000],
      ["cr", 8060000],
   ["bj", 7150000],
   ["cm",8140000],
      ["ng", 127290000],
      ["ir", 720410000],
      ["sv", 7130000],
      ["sl", 1080000],
      ["gw", 339583],

      ["za", 467560000],
      ["cf",36950000],
      ["sd", 210500000],
      ["kw", 980600000],
      ["de", 75900000],
      ["be", 996700000],
      ["ie", 389300000],
     ["gy",24300000],
      ["hn",99200000],
     ["mm", 263300000],
      ["ga", 5360000],
 
      ["ni", 55700000],
      ["lv", 7190000],
     ["ug", 577000000],
     ["cg",32300000],
      
      ["am", 55700000],
      ["tm", 79890000],
     ["zm",5230000],
     
      ["mr", 2660000],
     ["dz", 155730000],
      ["lt", 13550000],
      ["et", 14940000],
   ["er", 740111],
      ["gh", 1830000],
     ["si", 14430000],
      ["gt", 18370000],
      ["ba", 6670000],
      ["bf",390000],
   ["jo",24090000],
     
      ["al", 4570000],
     ["uy", 6940000],
     
      ["so", 698927],
     ["bo", 22260000],
      ["ro", 74060000],
      ["rs", 45440000],
      ["me", 2010000],
      ["tg", 3420000],
      ["af", 9440000],
      ["ua", 225020000],
    ["sk", 36030000],
    
      ["bg", 44510000],
     
   
      ["at", 68870000],
    
     ["hu",49860000 ],
      
      ["ne", 2320000],
   
    
     
      ["lr",1560000],
     ["cd",2040000],
      ["iq", 204170000],
      ["ge", 10560000],
      ["gm",610632],
    
      ["td", 1010000],
  
     ["lb", 24230000],
     ["dj", 644198],
      
      ["sr", 1790000],
      ["il", 64260000],
      ["ml",3560000],
      ["sn", 11710000],
      ["gn", 3180000],
    ["zw", 12260000],
      ["mk",7270000],
      ["py", 7430000],
     ["cz", 105950000],
     ["by",65460000],
      ["na", 4270000],
      ["ly", 54020000],
      ["tn", 31580000],
      ["bt", 1210000],
      ["md", 5130000],
      ["bw", 6670000],
      ["bs",1810000],
      ["nz", 34770000],
      ["cu", 28620000],
      ["ec", 41920000],
      ["au", 420220000],
      ["ve", 138760000],
      ["sb", 177806],
      ["mg", 4280000],
      ["is",3630000],
      ["eg", 238820000],
      ["kg", 10080000],
     
      
     ]
  }

  ]
  };

 

onClick(){
  document.getElementById('ecuador').addEventListener('click' ,function(){


  })
}

 
}
