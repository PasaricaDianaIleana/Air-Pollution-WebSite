import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common'
import * as L from 'leaflet'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SaveWorldService } from '../../services/save-world.service'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  receivedApi; data: any[]
  requestUrl: string = "https://api.waqi.info/feed/geo:"
  destroy = new Subject();
  data5: any;
  constructor(private _SaveWorldService: SaveWorldService, private cdRef: ChangeDetectorRef) { }
  city: any; aqi; PM25Day = []; PM25Value = []; mydate = [];pm10Value;PM25;N02Value;HValue;SO2Value
  functie: string;
  async ngOnInit() {
    this.AqiComponent()

    await this.apiMap();
  }



  AqiComponent() {

    //primeste datele de la service
    this._SaveWorldService.apiRequest2.pipe(takeUntil(this.destroy)).subscribe(
      data => (this.receivedApi = data),
      error => console.log(error)
    );
    console.log(this.receivedApi)
    this.city = this.receivedApi.data.city.name;
    this.pm10Value=this.receivedApi.data.iaqi.pm10.v;
    this.PM25=this.receivedApi.data.forecast.daily.pm25[0].avg;
    this.N02Value=this.receivedApi.data.iaqi.no2.v;
    this.HValue=this.receivedApi.data.iaqi.h.v;
    this.SO2Value=this.receivedApi.data.iaqi.so2.v
    console.log(this.N02Value)
  
    this.aqi = this.receivedApi.data.aqi;
    this.data = this.receivedApi.data.forecast.daily.pm25
    for (var i = 0; i < this.data.length; i++) {
      this.PM25Value = [...this.PM25Value, this.data[i].max]
      const format = 'EE';
      const locale = 'en-US';
      this.mydate = [...this.mydate, formatDate(this.data[i].day, format, locale)];
    }
  }

  async apiMap() {

    var coordonate = await this.receivedApi.data.city.geo
    var map = L.map('map', {
      center: coordonate,
      zoom: 7
    });
    var OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var OSM_ATTRIB = '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';
    var osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB }).addTo(map);
    var WAQI_URL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";
    var WAQI_ATTR = 'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';
    var waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });
    map.addLayer(osmLayer).addLayer(waqiLayer).on("click", async <LeafletMouseEvent>(e) => {
      var latitudine = e.latlng.lat
      var longitudine = e.latlng.lng
      //console.log('Latitudinea este:',latitudine,'longitudinea este:',longitudine)
      var request = await this._SaveWorldService.getRequestByCoordonates(this.requestUrl + latitudine + ';' + longitudine + '/?token=c754790045925626ecd623af77a10851f77d75d1')
      // console.log(this.request)
      this.city = request.data.city.name;
      // console.log(this.city)
      this.aqi = request.data.aqi;
      //console.log(this.aqi)
      this.data5 = request.data.forecast.daily.pm25
      // console.log(this.data5)
      this.pm10Value=request.data.iaqi.pm10.v;
      this.PM25=request.data.forecast.daily.pm25[0].avg;
      this.N02Value=request.data.iaqi.no2.v;
      this.HValue=request.data.iaqi.h.v;
      this.SO2Value=request.data.iaqi.so2.v
      this.PM25Value = [];
      for (var i = 0; i < this.data5.length; i++) {
        this.PM25Value = [...this.PM25Value, this.data5[i].max]
        const format = 'EE';
        const locale = 'en-US';
        this.mydate = [...this.mydate, formatDate( this.data5[i].day, format, locale)];
      }
    })
  }
  generalInf() {
    console.log('General inf')
    this.functie = 'InformatiiGenerale'
  }
  activitatiInf() {
    console.log('activitati inf')
    this.functie = 'InfActivitati'

  }
  CopiiInf() {
    console.log('copii inf')
    this.functie = 'copiiInf'

  }

}
