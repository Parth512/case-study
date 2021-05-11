import { Component, OnInit } from '@angular/core';
import { TimerServiceObv } from '../timer-obv.service';

@Component({
  selector: 'app-counts-obv',
  templateUrl: './counts-obv.component.html',
  styleUrls: ['./counts-obv.component.scss']
})
export class CountsObvComponent implements OnInit {

  startCount = 0;
  pauseCount = 0;

  constructor(private _timer: TimerServiceObv) { }

  ngOnInit() {
    this._timer.logsSubject.subscribe((logs) => {
      this.startCount = logs.filter((ele) => ele.startsWith('start')).length;
      this.pauseCount = logs.length - this.startCount;
    });

    this._timer.performTaskSubject.subscribe((data) => {
      if(data.type == 'reset') {
        this.startCount = 0;
        this.pauseCount = 0;
      }
    });
  }
}
