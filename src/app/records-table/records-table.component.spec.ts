import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { RecordsTableComponent } from './records-table.component';
import { ProjectsService } from '../services/projects.service';
import { RecordsService } from '../services/records.service';

describe('RecordsTableComponent', () => {
  let component: RecordsTableComponent;
  let fixture: ComponentFixture<RecordsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsTableComponent ],
      providers: [ ProjectsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
