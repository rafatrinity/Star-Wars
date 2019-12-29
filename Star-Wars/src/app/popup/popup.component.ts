import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlanetService } from '../planet.service';
import { ContentComponent } from './content/content.component';
import { Planet } from '../planet';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent {
  constructor(public dialog: MatDialog, public PS: PlanetService) { }
  @Input() climate: string;
  @Input() created: string;
  @Input() diameter: string;
  @Input() edited: string;
  @Input() films: string[];
  @Input() gravity: string;
  @Input() name: string;
  // tslint:disable-next-line: variable-name
  @Input() orbital_period: string;
  @Input() population: string;
  @Input() residents: string[];
  // tslint:disable-next-line: variable-name
  @Input() rotation_period: string;
  // tslint:disable-next-line: variable-name
  @Input() surface_water: string;
  @Input() terrain: string;
  @Input() url: string;
  @Input() img: string[];


  openDialog() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ContentComponent, {
      width: '80%',
      maxHeight: '70%',
      data: {
        climate: this.climate,
        created: this.created,
        diameter: this.diameter,
        edited: this.edited,
        films: this.films,
        gravity: this.gravity,
        name: this.name,
        orbital_period: this.orbital_period,
        population: this.population,
        residents: this.residents,
        rotation_period: this.rotation_period,
        surface_water: this.surface_water,
        terrain: this.terrain,
        url: this.url,
        img: this.img
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
