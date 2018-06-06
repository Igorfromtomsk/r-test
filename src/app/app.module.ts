import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import {AppComponent} from './app.component';
import {MaterializeModule} from 'angular2-materialize';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RecordsService} from './services/records.service';
import {ProjectsService} from './services/projects.service';
import {AddRecordComponent} from './add-record/add-record.component';
import {RecordsTableComponent} from './records-table/records-table.component';

@NgModule({
  declarations: [AppComponent, AddRecordComponent, RecordsTableComponent],
  imports:      [BrowserModule, MaterializeModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers:    [RecordsService, ProjectsService],
  bootstrap:    [AppComponent],
  schemas:      [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {
}
