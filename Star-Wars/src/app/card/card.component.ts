import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  @Input() name: string;
  @Input() movies: number;
  @Input() climate: string;
  @Input() terrain: string;

}