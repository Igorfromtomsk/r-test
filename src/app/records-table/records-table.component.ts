import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { RecordsService } from '../services/records.service';
import { PagerService } from '../services/pager.service';
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
  pagedRecords: any[] = [];
  pager: any = {};
  hasPaginate: boolean;
  sortedColumn: {type: string, direction: string} = {type: '', direction: ''};

  constructor(
    private projectsService: ProjectsService,
    private recordsService: RecordsService,
    private pagerService: PagerService) {}

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

    this.pagedRecords.forEach(item => {
      return item.checked = this.allRecordsIsSelected;
    });

    if (this.pagedRecords.filter(item => item.checked).length) {
      this.showDelete = true;
    } else {
      this.showDelete = false;
    }
  }
  selectRecord(item) {
    item.checked = !item.checked;

    if (this.pagedRecords.filter(elem => elem.checked).length) {
      this.showDelete = true;
    } else {
      this.showDelete = false;
      this.allRecordsIsSelected = false;
    }
  }
  deleteRecords() {
    let toDelete = this.pagedRecords
      .filter(item => item.checked)
      .map(item => item.id);

    this.recordsService.data = this.recordsService.data.filter(item => !toDelete.includes(item.id));
    this.records = this.recordsService.data;

    this.allRecordsIsSelected = false;
    this.showDelete = false;
    this.setPage(1);
  }
  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }

  sort(type:string) {
    if (this.sortedColumn.type === type) {
      if (this.sortedColumn.direction === 'asc') {
        this.sortedColumn.direction = 'desc';
      } else {
        this.sortedColumn.direction = 'asc';
      }
    }

    switch (type) {
      case 'date':
        this.records.sort((n1,n2) => {
          let t1 = new Date(n1.date).getTime();
          let t2 = new Date(n2.date).getTime();

          if (this.sortedColumn.direction === 'asc') {
            return t2 - t1;
          } else {
            return t1 - t2;
          }
        });
        break;
      case 'project':
        this.records.sort((n1,n2) => {
          if (this.sortedColumn.direction === 'asc') {
            if (this.getProjectById(n1.project).name[0] < this.getProjectById(n2.project).name[0]) {
              return 1;
            } else {
              return -1;
            }
          } else {
            if (this.getProjectById(n1.project).name[0] > this.getProjectById(n2.project).name[0]) {
              return 1;
            } else {
              return -1;
            }
          }
        });
        break;
      case 'note':
        this.records.sort((n1,n2) => {
          if (this.sortedColumn.direction === 'asc') {
            if (n1.note[0] < n2.note[0]) {
              return 1;
            } else {
              return -1;
            }
          } else {
            if (n1.note[0] > n2.note[0]) {
              return 1;
            } else {
              return -1;
            }
          }
        });
        break;
    }

    this.setPage(1);
    this.sortedColumn.type = type;
  }
  checkPaginate() {
    if (this.records.length > 5) {
      this.hasPaginate = true;
    } else {
      this.hasPaginate = false;
    }
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.records.length, page);
    this.pagedRecords = this.records.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngDoCheck() {
    this.checkPaginate();
  }

  ngOnInit() {
    this.recordsService.getData.subscribe(data => {
      this.records = data;
      this.setPage(1);
    });

    this.records = this.recordsService.data;
    this.setPage(1);
  }
}
