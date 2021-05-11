import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { TimerServiceObv } from '../timer-obv.service';

@Component({
  selector: 'app-timer-obv',
  templateUrl: './timer-obv.component.html',
  styleUrls: ['./timer-obv.component.scss']
})
export class TimerObvComponent implements OnInit {

  // @Input()
  time: number;

  // @Input()
  eventType = '';  

  interval;

  constructor(private _timer: TimerServiceObv) { }

  ngOnInit(): void {
    this._timer.performTaskSubject.subscribe((data) => {
      if (!this.time) {
        this.time = data.time;
      }
      this.performTask(data.type);
    })
  }

  performTask(type) {
    if (type == 'start') {
      this.startTimer();
    } else if (type == 'pause') {
      this.pauseTimer();
    }
    else {
      this.resetTimer();
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.time = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    this._timer.pauseLogsSubject.next(`paused at ${this.time}`);
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.time = 0;
  }

}
