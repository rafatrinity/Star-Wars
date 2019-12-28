import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';
import { ContentComponent } from './content/content.component';
@NgModule({
  declarations: [
    PopupComponent,
    ContentComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [ContentComponent],
  exports: [PopupComponent]
})
export class PopupModule { }
