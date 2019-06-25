import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getAllPlanets();
  }
  title = 'Star-Wars';
  dados: any[];
  constructor(private PlanetService: PlanetService) {

  }
  getAllPlanets(): void {
    this.PlanetService.getAllPlanets().subscribe(
      ok => {
      this.dados = ok;
      console.log(ok)
    },
      error => {
        console.error('deu merda: ' + error);
      }
    )
  };
}
