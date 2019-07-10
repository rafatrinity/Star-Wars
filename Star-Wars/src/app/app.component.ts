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
  img: string[];
  planetas: Planet[] = [];

  ngOnInit(): void {
    this.inicializar();
    this.getImg('Utapau');
  }
  constructor(private PS: PlanetService) { }

  inicializar() {
    for (let i = 1; i < 8; i++) {
      this.getAllPlanets(i);
    }
  }

  SetPlanet(dados) {
    for (const p of dados) {
     // this.getImg(p.name);,
     //console.log(p.name);
      this.planetas.push(p);
    }
  }
  getImg(name: string) {
    this.PS.getImage(name).subscribe(ok => {
      console.log(ok);
    },
      error => {
        console.error('deu merda: ' + error);
      });
  }


  getAllPlanets(page): void {
    this.PS.getPlanetsPage(page)
      .pipe(map(x => ({ results: x.results })))
      .subscribe(
        ok => {
          this.SetPlanet(ok.results);
        },
        error => {
          console.error('deu merda: ' + error);
        }
      );
  }
}
