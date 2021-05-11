import { Component, OnInit } from '@angular/core';
import { TimerServiceObv } from '../timer-obv.service';

@Component({
  selector: 'app-logs-obv',
  templateUrl: './logs-obv.component.html',
  styleUrls: ['./logs-obv.component.scss']
})
export class LogsObvComponent implements OnInit {

  logs = [];

  constructor(private _timer : TimerServiceObv) { }

  ngOnInit(): void {
    this._timer.logsSubject.subscribe((data) => {
      this.logs = data;
    });

    this._timer.performTaskSubject.subscribe((data) => {
      if(data.type == 'reset') {
        this.logs = [];
      }
    });
  }
}
