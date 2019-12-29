import { Component, OnInit, Input } from '@angular/core';

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
  @Input() climate: string;
  ocean = '#1979ff';
  continent;
  constructor() { }

  ngOnInit() {
    // this.continent = this.palette[this.climate].continent;
    // this.ocean = this.palette[this.climate].ocean;
    console.log(this.climate);
  }
  ola(){
    return '#1979ff';
  }
}
