import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AddRecordComponent} from './add-record/add-record.component';
import {MaterializeModule} from 'angular2-materialize';
import {RecordsTableComponent} from './records-table/records-table.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RecordsService} from './services/records.service';

@NgModule({
  declarations: [AppComponent, AddRecordComponent, RecordsTableComponent],
  imports:      [BrowserModule, MaterializeModule, HttpClientModule, FormsModule],
  providers:    [RecordsService, RecordsService],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
