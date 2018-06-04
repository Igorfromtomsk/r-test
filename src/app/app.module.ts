import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { MaterializeModule } from 'angular2-materialize';
import { RecordsTableComponent } from './records-table/records-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    RecordsTableComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
