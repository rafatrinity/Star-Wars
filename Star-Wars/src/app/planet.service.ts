import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Data } from './planet';
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  BaseUrl: string = environment.ApiUrl;
  GoogleKey: string = environment.GoogleKey;
  cx: string = environment.cx;
  Google: string = environment.GoogleUrl;
  constructor(private httpC: HttpClient) { }

  getPlanetsPage(page): Observable<Data> {
    return this.httpC.get<Data>(`${this.BaseUrl}` + `?page=` + page);
  }

  getPlanetById(id: string): Observable<Data[]> {
    return this.httpC.get<Data[]>(`${this.BaseUrl}` + id);
  }

  getByurl(url) {
    return this.httpC.get(url);
  }

  getImage(img: string): Observable<any[]> {
    return this.httpC.get<any[]>(this.Google + img + this.cx + '&num=3&searchType=image&fields=items(link)' + this.GoogleKey)
  }

}
