import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Palette } from './earth.component';
@Injectable({
  providedIn: 'root'
})
export class EarthService {

  constructor(private http: HttpClient) { }

  GetPalette(): Observable<Palette[]> {
    return this.http.get<Palette[]>('./palette.json');
  }
}
