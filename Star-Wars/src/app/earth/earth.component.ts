import { Component, OnInit, Input } from '@angular/core';
import { EarthService } from './earth.service';
export interface Palette {
  climate: {
    ocean: string;
    continent: string;
  };
}

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {
  @Input() climate;
  color: Palette;
  
  constructor(private ES: EarthService) { }
  ngOnInit() {
    this.Find();
  }
  Find(): void {
    this.ES.GetPalette().subscribe(
      ok => {
        console.log(ok);
      },
      error => {
        console.error(error);
      }
    )
  }
}
