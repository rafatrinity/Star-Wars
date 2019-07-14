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
  img: string[] = [
    'https://vignette.wikia.nocookie.net/pt.starwars/images/a/a9/Alderaan_2.jpg/revision/latest?cb=20160415015121',
    'https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=960',
    'https://t5.rbxcdn.com/9e484dc831c6e2bf288aa558319cd72f'
  ];

}
