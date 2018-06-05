import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../s_projects/projects.service';
import { RecordsService } from '../s_records/records.service';

@Component({
  selector: 'app-add-record',
  providers: [],
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.less']
})

export class AddRecordComponent implements OnInit {
  public date: string;
  public note: string;
  public project: string;

  @Input() modalActions;

  constructor(public projectService: ProjectsService, private recordsService: RecordsService) {}

  projects = this.projectService.get;

  sendRecord() {
    this.recordsService.setData({date: this.date, project: this.project, note: this.note});

    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  ngOnInit() {
  }

}
