import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecordsService {
  private subject = new Subject<any>();

  data = [
    {'id': 1, 'date': '01-06-2018', 'project': 1, 'note': 'First note of my life' },
    {'id': 2, 'date': '01-05-2018', 'project': 2, 'note': 'Epic something' },
    {'id': 3, 'date': '01-04-2018', 'project': 3, 'note': 'Nothing to say' },
    {'id': 5, 'date': '01-03-2018', 'project': 4, 'note': 'Some note' },
    {'id': 6, 'date': '01-02-2018', 'project': 5, 'note': 'Fishtext here' },
    {'id': 7, 'date': '01-01-2018', 'project': 6, 'note': 'Something happened' },
    {'id': 8, 'date': '02-06-2018', 'project': 7, 'note': 'yes, it\'s Miyazaki Jayao\'s movies' },
    {'id': 9, 'date': '02-05-2018', 'project': 8, 'note': 'Nothing to say' },
    {'id': 10, 'date': '02-04-2018', 'project': 9, 'note': 'Nothing to say' },
    {'id': 11, 'date': '02-03-2018', 'project': 10, 'note': 'Nothing to say' },
    {'id': 12, 'date': '02-02-2018', 'project': 11, 'note': 'Nothing to say' },
    {'id': 13, 'date': '02-01-2018', 'project': 12, 'note': 'Nothing to say' },
    {'id': 14, 'date': '01-07-2018', 'project': 13, 'note': 'Nothing to say' },
    {'id': 15, 'date': '01-08-2018', 'project': 14, 'note': 'Nothing to say' },
    {'id': 16, 'date': '01-09-2018', 'project': 15, 'note': 'Nothing to say' },
    {'id': 17, 'date': '01-10-2018', 'project': 16, 'note': 'Nothing to say' },
    {'id': 18, 'date': '01-16-2018', 'project': 17, 'note': 'Nothing to say' },
    {'id': 19, 'date': '01-26-2018', 'project': 18, 'note': 'Nothing to say' },
    {'id': 20, 'date': '01-19-2018', 'project': 19, 'note': 'Nothing to say' },
  ];

  constructor(private http: HttpClient) {
    this.subject.next(this.data);
  }

  public get getData() {
    return this.subject.asObservable();
  }

  public setData(data: any) {
    data.id = this.data.length + 1; //should come from backend
    this.data.push(data);
    this.subject.next(this.data);
  }
}
