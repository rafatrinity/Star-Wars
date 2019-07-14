import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CrouselComponent } from '../crousel/crousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CardComponent, CrouselComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, NgbModule],
  exports: [CardComponent, CrouselComponent]
})
export class CardModule { }
