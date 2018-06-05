import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Records} from './records';
import {promise} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})


export class RecordsService {
  private url: string;

  data: any[] = [
    {'id': 1, 'date': '01-06-2018', 'project': 1, 'note': 'First note of my life' },
    {'id': 2, 'date': '01-06-2018', 'project': 2, 'note': 'Epic something' },
    {'id': 3, 'date': '01-06-2018', 'project': 3, 'note': 'Nothing to say' }
  ];

  constructor(private http: HttpClient) {
    this.url = 'data/records.json';
  }

  private getDataFromeServer(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(data => {
        this.setData(data);
      })
      .catch(err => err);
  }

  public get getData() {
    return this.data;
  }

  public setData(d: any) {
    d.id = this.data.length + 1;
    console.log('check ', d);
    console.log(this.data);
    this.data.push(d);
  }
}
