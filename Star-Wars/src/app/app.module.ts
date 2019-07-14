import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './card/card.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SpinnerModule } from './spinner/spinner.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    SpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
