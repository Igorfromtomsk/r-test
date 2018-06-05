import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProjectsService } from '../s_projects/projects.service';
import { RecordsService } from '../s_records/records.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-records-table',
  providers: [],
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.less']
})

export class RecordsTableComponent implements OnInit {
  allRecordsIsSelected = false;
  showDelete = false;
  modalActions = new EventEmitter<string|MaterializeAction>();
  records: any[] = [];

  constructor(private projectsService: ProjectsService, private recordsService: RecordsService) {}

  getProjectById(id) {
    if (!id) {
      return;
    }
    return this.projectsService.get.filter(item => item.id === +id)[0];
  }

  getBeautyDate(date) {
    const time = new Date(date);

    if (!date && !time.getTime) {
      return;
    }
    const formatter = new Intl.DateTimeFormat('en');
    return formatter.format(time);
  }

  selectAllRecords() {
    this.allRecordsIsSelected = !this.allRecordsIsSelected;

    this.records.forEach(item => {
      return item.checked = this.allRecordsIsSelected;
    });

    if (this.records.filter(item => item.checked).length) {
      this.showDelete = true;
    } else {
      this.showDelete = false;
    }
  }

  selectRecord(item) {
    item.checked = !item.checked;

    if (this.records.filter(elem => elem.checked).length) {
      this.showDelete = true;
    } else {
      this.showDelete = false;
      this.allRecordsIsSelected = false;
    }
  }

  deleteRecords() {
    this.records.forEach((item, i) => {
      if (item.checked) {
        this.records.splice(i, 1);
      }
    });

    if (this.records[0].checked) {
      this.records = [];
    }

    this.allRecordsIsSelected = false;
    this.showDelete = false;

    console.log(this.records);
  }

  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  ngOnInit() {
    this.records = this.recordsService.getData;
  }
}
