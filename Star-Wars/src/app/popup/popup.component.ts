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

  @Input() url: string;
  @Input() planet: Planet;
  palette = [
    {
      temperate: {
        ocean: '#1979ff',
        continent: '#26bd15'
      }
    },
    {
      arid: {
        ocean: '#cc8d10',
        continent: '#acbd15'
      }
    }
  ];
 
  openDialog() {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ContentComponent, {
      width: '80%',
      maxHeight: '70%',
      data: this.planet
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
