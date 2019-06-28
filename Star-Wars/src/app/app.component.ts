import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Star-Wars';
  dados = [];

  ngOnInit(): void {
    this.inicializar();
  }
  constructor(private PlanetService: PlanetService) {

  }

  inicializar() {
    for (let i = 1; i < 8; i++) {
      this.getAllPlanets(i);
    }
  }

  getAllPlanets(page): void {
    this.PlanetService.getAllPlanets(page).subscribe(
      ok => {
        this.dados.push(ok);
        console.log(ok);
      },
      error => {
        console.error('deu merda: ' + error);
      }
    );
  }
}
