import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { CrouselComponent } from '../crousel/crousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupModule } from '../popup/popup.module';

@NgModule({
  declarations: [CardComponent, CrouselComponent],
  imports: [CommonModule, MatCardModule, NgbModule, PopupModule],
  exports: [CardComponent, CrouselComponent]
})
export class CardModule { }
