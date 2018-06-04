import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../s_projects/projects.service';
import { Records } from '../s_records/records';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-records-table',
  providers: [ProjectsService],
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.less']
})
export class RecordsTableComponent implements OnInit {

  constructor(private projects: ProjectsService, private http: HttpClient) {
  }

  records: Records;

  getProjectById(id) {
    return this.projects.get.filter(item => item.id === id)[0];
  };

  getBeautyDate(date) {
    let formatter = new Intl.DateTimeFormat('en');
    return formatter.format(new Date(date));
  }

  selectAllRecords() {
    console.log('please, do something!');
  }

  ngOnInit() {
    this.http.get('data/records.json').subscribe(
      (data:Records) => this.records = data,
      (error:Records) => this.records = null
    );
  }
}
