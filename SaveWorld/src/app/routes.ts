import {NgModule} from  '@angular/core';
import {Routes,RouterModule} from  '@angular/router';
import {HomePageComponent} from  '../app/home-page/home-page.component';
import{SaveWorldComponent} from '../app/sections/save-world/save-world.component';
import{ActionComponent} from '../app/sections/action/action.component';
import{PetitionComponent} from '../app/sections/petition/petition.component';
import{EnvironmentalImpactComponent}  from './sections/environmental-impact/environmental-impact.component'
import {DonatiiComponent} from '../app/sections/donatii/donatii.component'
import {TakeActionComponent}  from '../app/sections/take-action/take-action.component'
import { EmisiiTransportComponent} from  '../app/sections/emisii-transport/emisii-transport.component'
 import {PollutionEvolutionComponent} from '../app/sections/pollution-evolution/pollution-evolution.component'
import { MapComponent } from './sections/map/map.component';
export const appRoutes:Routes=[
      
     {path:'HomePage',component:HomePageComponent},
    {path:'SaveWorld',component:SaveWorldComponent},
    {path:'Action',component:ActionComponent},
   {path:'TakeAction',component:TakeActionComponent},
   {path:'Donatii',component:DonatiiComponent},
   {path:'Petitie',component:PetitionComponent},
   {path:'IncalzireaGlobala',component:EnvironmentalImpactComponent},
   {path:'EmisiiTransport',component:EmisiiTransportComponent},
   {path:'PollutionEvolution',component:PollutionEvolutionComponent},
{path:'AirQuality',component:MapComponent},
   //{path:'User',component:UserComponent},

{path:'',redirectTo:'/HomePage',pathMatch:'full'}
];

