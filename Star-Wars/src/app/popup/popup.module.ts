import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent, Content } from './popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';
@NgModule({
  declarations: [
    PopupComponent,
    Content
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [Content],
  exports: [PopupComponent]
})
export class PopupModule { }
