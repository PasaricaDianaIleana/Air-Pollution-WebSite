import { Component, OnInit, ComponentFactoryResolver, ComponentRef, Injector, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet'
import { SaveWorldService } from "../../services/save-world.service"
import { marker, Marker } from 'leaflet';
import { MarkerComponentComponent } from '../marker-component/marker-component.component'

interface MarkerMetaData {
  name: String;
  markerInstance: Marker;
  componentInstance: ComponentRef<MarkerComponentComponent>

}
@Component({
  selector: 'app-aqimap',
  templateUrl: './aqimap.component.html',
  styleUrls: ['./aqimap.component.css']
})

export class AQIMapComponent implements OnInit {
  requestUrl: string = "https://api.waqi.info/feed/geo:"
  request
  @ViewChild("data", { static: true }) input: ElementRef<HTMLInputElement>
  adresa; poluantO3 = []; res: any[]; dayO3 = []; statie = []; poluantPm10 = []; poluantPm25 = []; dayPm10 = []; dayPm25 = []
  arr: any[]
  o3: any[]
  pm10: any[]
  pm25: any[]
  values = []
  postData
  aqi: []
  url: string = "http://localhost:61382/api/ApiData";
  urlStation: string = "https://api.waqi.info/search/?token=c754790045925626ecd623af77a10851f77d75d1&keyword="
  urlCoordonate: string = "https://api.waqi.info/feed/geo:"




  constructor(private _SaveWrorldService: SaveWorldService, private resolver: ComponentFactoryResolver, private injector: Injector) { }
  async ngOnInit() {
    this.AqiMap();

    await this._SaveWrorldService.getStations(this.urlStation)
    await this._SaveWrorldService.getStationData();
    await this._SaveWrorldService.getRequestByCoordonates(this.requestUrl)
  }
  async AqiMap() {
    var map = L.map('map', {
      center: [46, 25],
      zoom: 7
    });


    var OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var OSM_ATTRIB = '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';
    var osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB }).addTo(map);

    var WAQI_URL = "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_";
    var WAQI_ATTR = 'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';
    var waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });

    map.addLayer(osmLayer).addLayer(waqiLayer).on("click",
      async<LeafletMouseEvent>(e) => {
        var latitudine = e.latlng.lat
        var longitudine = e.latlng.lng
        //console.log('Latitudinea este:',latitudine,'longitudinea este:',longitudine) `<div>Capital: ${city }</div>`
        this.request = await this._SaveWrorldService.getRequestByCoordonates(this.requestUrl + latitudine + ';' + longitudine + '/?token=c754790045925626ecd623af77a10851f77d75d1')
        // console.log(this.request);

        this.adresa = this.request.data.city.name

        this.o3 = this.request.data.forecast.daily.o3
        this.pm10 = this.request.data.forecast.daily.pm10
        this.pm25 = this.request.data.forecast.daily.pm25
        this.o3.forEach((item) => item.value = 'o3')
        this.pm10.forEach((item) => item.value = 'pm10')
        this.pm25.forEach((item) => item.value = 'pm25')

        this.arr = this.o3.concat(this.pm10, this.pm25);
        //console.log(this.arr)
        for (var i = 0; i < this.arr.length; i++) {

          var val = this.arr[i].max
          var date = this.arr[i].day
          var poluant = this.arr[i].value
          this.postData = {
            poluant: poluant,
            statie: this.adresa,
            valoare: val,
            day: date

          }
          /*
                 var post = await this.postRequest(this.postData, this.url).then(data=>{
                      if(data){
                        console.log("Add in database")
          }
                    })
                    */



        }
        // console.log(this.postData);

        // console.log(this.adresa)
        var getData = await this._SaveWrorldService.getStationData().toPromise().then(data => {
          this.res = data;
          //  console.log(this.res)

        });




        // returneaza ComponentFactory =obiect care construieste o componenta
        const factory = this.resolver.resolveComponentFactory(MarkerComponentComponent);

        // construieste  componenta 
        const component = factory.create(this.injector);

        //atribuie variabilei message din componenta dinamica "marker-component" var request

        component.instance.message = this.request;
        component.instance.statie = this.adresa;
        component.instance.response = this.res
        // we need to manually trigger change detection on our in-memory component
        // s.t. its template syncs with the data we passed in
        component.changeDetectorRef.detectChanges();

        // pass in the HTML from our dynamic component
        const popupContent = component.location.nativeElement;
        // add popup functionality
        var popup = L.popup()
          .setLatLng(e.latlng)
          .setContent(popupContent, {
            width: 2500
          }).openOn(map);
      })
  }
  postRequest(url, postData) {
    return this._SaveWrorldService.AddStationsData(this.url, this.postData).toPromise().then(
      (res) => {
        return res
      },
      err => {
        console.log(err);



      })
  }
}






