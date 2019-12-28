import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent {
  constructor(public dialog: MatDialog) { }

  @Input() url: string;

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
    const dialogRef = this.dialog.open(Content, {
      width: '80%',
      maxHeight: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(this.url);
    });
  }
}

@Component({
  templateUrl: 'content.html',
})
// tslint:disable-next-line: component-class-suffix
export class Content { }
