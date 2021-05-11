import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { cloneDeep, orderBy } from 'lodash';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  dataSource;
  backup;
  displayedColumns: string[] = [];
  sortDirection = 'default';

  ngOnInit(): void {
    this._http.get(`https://run.mocky.io/v3/806fcb78-9950-4c88-8fcc-34436959a257`).subscribe((data) => {
      this.dataSource = data;
      this.backup = data;
      Object.keys(data[0]).forEach((key) => {
        this.displayedColumns.push(key);
      });
    });
  }

  sort(item) {
    if(this.sortDirection == 'default') {
      this.sortDirection = 'asc';
      this.dataSource = orderBy(this.dataSource,[item],['asc']);
    }else if(this.sortDirection == 'asc') {
      this.dataSource = orderBy(this.dataSource,[item],['desc']);
      this.sortDirection = 'desc';
    }else {
      this.dataSource = cloneDeep(this.backup);
      this.sortDirection = 'default';
    }    
  }

}
