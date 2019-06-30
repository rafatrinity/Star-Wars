import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet.service';
import { map } from 'rxjs/operators';
import { Planet } from './planet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Star-Wars';
  dados = [];
  planetas: Planet[] = [];

  ngOnInit(): void {
    this.inicializar();
  }
  constructor(private PlanetService: PlanetService) {}

  inicializar() {
    for (let i = 1; i < 8; i++) {
      this.getAllPlanets(i);
    }
  }

  SetPlanet(dados){
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < dados.length; i++) {
      this.planetas.push(dados[i]);
    }
  }

  getAllPlanets(page): void {
    this.PlanetService.getPlanetsPage(page)
      .pipe(map(x => ({ results: x.results })))
      .subscribe(
        ok => {
          this.SetPlanet(ok.results);
         // console.log(ok.results);
        },
        error => {
          console.error('deu merda: ' + error);
        }
      );
  }
}
