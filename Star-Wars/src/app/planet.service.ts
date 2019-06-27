import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Planet } from './planet'
@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  BaseUrl: string = environment.ApiUrl;
  constructor(private httpC: HttpClient) { }
  
  getAllPlanets(page): Observable<Planet[]>{
		return this.httpC.get<Planet[]>(`${this.BaseUrl}`+`?page=`+page);
	}
  
  getPlanetById(id: string): Observable<Planet[]>{
		return this.httpC.get<Planet[]>(`${this.BaseUrl}`+id);
  }
  
}
