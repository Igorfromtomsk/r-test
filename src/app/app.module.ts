import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddRecordComponent} from './add-record/add-record.component';
import {MaterializeModule} from 'angular2-materialize';
import {RecordsTableComponent} from './records-table/records-table.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AddRecordComponent, RecordsTableComponent],
  imports:      [BrowserModule, MaterializeModule, HttpClientModule],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
