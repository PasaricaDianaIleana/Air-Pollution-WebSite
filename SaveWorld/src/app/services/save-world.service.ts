import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { data } from '../classes/Data'
import { emissions } from '../classes/emission'
import { emissionsBySource } from '../classes/emissionsBySource'
import { MapChart } from '../classes/MapChart';
import { Chart } from '../classes/MapH';
import { TransportEmissions } from '../classes/transportEmissions';
import { continents } from '../classes/continentsMap';
import { continentsData } from '../classes/continentsData'
import { emissionChart } from '../classes/emissionChart';
import { emissionEvolution } from '../classes/emissionEvolution';

import { User } from "../classes/users"
import {ColumnHealthChart} from '../classes/ColumnHealthCharts'


import { StationsData } from '../classes/StationsData'
@Injectable({
  providedIn: 'root'
})

export class SaveWorldService {

  readonly BaseURL = 'http://localhost:61382/api'
  
  private headers: HttpHeaders
  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': '*'
    })
  }
  apiRequest= new BehaviorSubject<string>('');
  apiRequest2 = this.apiRequest.asObservable();

  //functie care primeste un request de la marker component
  sendRequest(data: string) {
    this.apiRequest.next(data);
  }
  TransportEmissions(): Observable<TransportEmissions[]> {
    return this._http.get<TransportEmissions[]>('http://localhost:61382/api/SaveWorld/Transport', { headers: this.headers })

  }
  ColumnHealthChart():Observable<ColumnHealthChart[]>{
return this._http.get<ColumnHealthChart[]>('http://localhost:61382/api/SaveWorld/HealthChart', {headers:this.headers});
  }

  MapChart(): Observable<MapChart[]> {
    return this._http.get<MapChart[]>('http://localhost:61382/api/SaveWorld/MapData', { headers: this.headers })

  }

Data(url: string): Observable<data[]> {
  return this._http.get<data[]>(url)
}

EmissionChart(): Observable<emissionChart[]> {
  return this._http.get<emissionChart[]>('http://localhost:61382/api/EmissionChart', { headers: this.headers })

}
HealthChart(): Observable<Chart[]> {
  return this._http.get<Chart[]>('http://localhost:61382/api/Map2', { headers: this.headers })
}
evolutionChart(): Observable<emissionEvolution[]> {
  return this._http.get<emissionEvolution[]>('http://localhost:61382/api/SaveWorld/evoloution', { headers: this.headers })

}
AddStationsData(url: string, data: StationsData) {
  return this._http.post(url, data,{headers:this.headers});
  
}
EmissionBySource(): Observable<emissionsBySource[]> {
  return this._http.get<emissionsBySource[]>('http://localhost:61382/api/SaveWorld', { headers: this.headers })
    
}
Emission(url: string): Observable<emissions[]> {
  return this._http.get<emissions[]>(url, { headers: this.headers })
}



handleError(error:Response){
return throwError(error)
}
getStationData():Observable<StationsData[]>{
  return this._http.get<StationsData[]>('http://localhost:61382/api/ApiData/StationData',{headers: this.headers})
    }


    getRequestByCoordonates(urlCoordonate: string): any {
      return this._http.get(urlCoordonate).toPromise()
    }


    getStations(urlStation: string): any {
      return this._http.get(urlStation).toPromise()
    }
}
