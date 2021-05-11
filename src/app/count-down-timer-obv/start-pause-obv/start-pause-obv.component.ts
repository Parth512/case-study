import { Component, OnInit } from '@angular/core';
import { reverse } from 'lodash';
import { TimerServiceObv } from '../timer-obv.service';

@Component({
  selector: 'app-start-pause-obv',
  templateUrl: './start-pause-obv.component.html',
  styleUrls: ['./start-pause-obv.component.scss']
})
export class StartPauseObvComponent implements OnInit {

  isStarted = false;
  timeFrame = 0;
  logStack = [];
  pauseLogs = [];

  constructor(private _timer : TimerServiceObv) { }

  ngOnInit(): void {
    this._timer.pauseLogsSubject.subscribe((data) => {
      this.pauseLogs.unshift(data);
    });
  }

  timeFrameChanged(event) {
    console.log(event);
  }

  sentEvent(type) {
    if (type == 'start' && !this.isStarted) {
      this.isStarted = true;
      this._timer.performTaskSubject.next({
        type: 'start',
        time: this.timeFrame
      });
      this.addLogToStack('start');
    } else if (type == 'reset') {
      this.isStarted = false;
      this._timer.performTaskSubject.next({
        type: 'reset',
        time: this.timeFrame
      });
      this.timeFrame = 0;
      this.pauseLogs = [];
      this.addLogToStack('reset');
    } else {
      this._timer.performTaskSubject.next({
        type: 'pause',
        time: this.timeFrame
      });      
      this.isStarted = false;
      this.addLogToStack('pause');
    }
  }

  addLogToStack(type) {
    if (type != 'reset') {
      this.logStack.unshift(`${type}ed at ${new Date().toLocaleString()}`);
      this._timer.logsSubject.next(this.logStack);
    } else {
      this.logStack.unshift(`reset`);
      this._timer.logsSubject.next([]);
    }

  }

}
