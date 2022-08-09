import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UiTableComponent } from './ui-table/ui-table.component';

@NgModule({
  imports:      [ BrowserModule, CdkTableModule ],
  declarations: [ AppComponent, UiTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
