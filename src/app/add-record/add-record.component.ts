import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { RecordsService } from '../services/records.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-add-record',
  providers: [],
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.less']
})

export class AddRecordComponent implements OnInit {
  record = {};
  dateActions = new EventEmitter<string|MaterializeAction>();
  projects = this.projectService.get;

  @Input() modalActions;

  constructor(public projectService: ProjectsService, private recordsService: RecordsService) {}

  sendRecord() {
    this.recordsService.setData(this.record);
    this.modalActions.emit({action: 'modal', params: ['close']});
    this.record = {};
  }

  ngOnInit() {
  }

}
