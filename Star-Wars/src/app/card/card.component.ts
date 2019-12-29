import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
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
}
