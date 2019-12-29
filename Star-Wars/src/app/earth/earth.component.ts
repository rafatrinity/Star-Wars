import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
