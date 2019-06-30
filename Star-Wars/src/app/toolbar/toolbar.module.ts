import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    AutocompleteModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
