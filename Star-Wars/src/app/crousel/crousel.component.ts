import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.scss']
})
export class CrouselComponent implements OnInit {

  constructor() { }
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  ngOnInit() {
  }

}
