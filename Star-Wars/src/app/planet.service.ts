import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Data } from './planet';
import { skip, filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  BaseUrl: string = environment.ApiUrl;
  constructor(private httpC: HttpClient) { }

  getPlanetsPage(page): Observable<Data> {
    return this.httpC.get<Data>(`${this.BaseUrl}` + `?page=` + page);
  }

  getPlanetById(id: string): Observable<Data[]> {
    return this.httpC.get<Data[]>(`${this.BaseUrl}` + id);
  }

}
