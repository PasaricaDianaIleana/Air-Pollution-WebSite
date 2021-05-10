import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {RouterModule} from '@angular/router';
import { appRoutes} from '../app/routes'
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SaveWorldComponent } from '../app/sections/save-world/save-world.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActionComponent } from '../app/sections/action/action.component';

import { ClarityModule } from '@clr/angular';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { PieChart2Component } from './charts/pie-chart2/pie-chart2.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatListModule, MatOptionModule, MatButtonModule } from '@angular/material';
import {SaveWorldService} from './services/save-world.service';
import { PetitionComponent } from './sections/petition/petition.component'
import { ReactiveFormsModule } from "@angular/forms";
import { DonatiiComponent } from './sections/donatii/donatii.component';
import { TakeActionComponent } from './sections/take-action/take-action.component';
import { LineChart3Component } from './charts/line-chart3/line-chart3.component';
import { HighmapForestComponent } from './charts/highmap-forest/highmap-forest.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {CdkTableModule} from '@angular/cdk/table';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { HighmapChildrenComponent } from './charts/highmap-children/highmap-children.component';
import { HighmapComponent } from './charts/highmap/highmap.component';
import { EvolutionChartComponent } from './charts/evolution-chart/evolution-chart.component';
import { ChartModule } from 'angular-highcharts';
import { EnvironmentalImpactComponent } from './sections/environmental-impact/environmental-impact.component';
import { EmisiiTransportComponent } from './sections/emisii-transport/emisii-transport.component';
import { ColumnChart2Component } from './charts/column-chart2/column-chart2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollutionEvolutionComponent } from './sections/pollution-evolution/pollution-evolution.component';
import { ChartComponent } from './charts/chart/chart.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapComponent } from './sections/map/map.component';

import { CountToModule } from 'angular-count-to';
import { AQIMapComponent } from './sections/aqimap/aqimap.component';
import { MarkerComponentComponent } from './sections/marker-component/marker-component.component';
import { SparklineChartComponent } from './charts/sparkline-chart/sparkline-chart.component';
import { GaugeChartComponent } from './charts/gauge-chart/gauge-chart.component';
import { LineChartPm25Component } from './charts/line-chart-pm25/line-chart-pm25.component';
import { TestChartComponent } from './charts/test-chart/test-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { GlobalWarmingPieChartComponent } from './global-warming-pie-chart/global-warming-pie-chart.component';
import { GlobalWarmingChartComponent } from './charts/global-warming-chart/global-warming-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HighchartsChartComponent,
    SaveWorldComponent,
    NavbarComponent,
    ActionComponent,
    
    LineChartComponent,
    PieChart2Component,
    
    PetitionComponent,
    DonatiiComponent,
    TakeActionComponent,
    LineChart3Component,
    HighmapForestComponent,
    ColumnChartComponent,
    HighmapChildrenComponent,
    HighmapComponent,
    EvolutionChartComponent,
    EnvironmentalImpactComponent,
    EmisiiTransportComponent,
    ColumnChart2Component,
    PollutionEvolutionComponent,
    ChartComponent,

    MapComponent,
 
    AQIMapComponent,
    MarkerComponentComponent,
    SparklineChartComponent,
    GaugeChartComponent,
    LineChartPm25Component,
    TestChartComponent,
    BarChartComponent,
    GlobalWarmingPieChartComponent,
    GlobalWarmingChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularMultiSelectModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    LeafletModule,
    ChartModule,
    CountToModule,
    NgMultiSelectDropDownModule,
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule, 
  BrowserAnimationsModule,
  CdkTableModule,
  ClarityModule,
  MatListModule,
  MatButtonModule,
  CommonModule,
  HttpClientModule,
 
  ],
  providers: [
    SaveWorldService,
    DatePipe

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [MarkerComponentComponent,MapComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
