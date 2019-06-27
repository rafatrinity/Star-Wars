import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Star-Wars';
  dados = []
  ngOnInit(): void {
    this.getAllPlanets(1);
  }
  constructor(private PlanetService: PlanetService) {

  }
  getAllPlanets(page): void {
    this.PlanetService.getAllPlanets(page).subscribe(
      ok => {
        this.dados.push(ok);
        console.log(ok)
      },
      error => {
        console.error('deu merda: ' + error);
      }
    )
  };
}
