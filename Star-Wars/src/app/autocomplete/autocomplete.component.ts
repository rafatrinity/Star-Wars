import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Planet } from '../planet';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  ctrl = new FormControl();
  @Input() planets: Planet[];
  filteredOptions: Observable<Planet[]>;
  constructor() {
    this.filteredOptions = this.ctrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.planets.slice())
      );
  }

  private _filterStates(value: string): Planet[] {
    const filterValue = value.toLowerCase();
    return this.planets.filter(planet => planet.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
