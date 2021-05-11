import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnChanges {

  @Input()
  time: number;

  @Input()
  eventType = '';

  @Output()
  pauseLogsEmitter = new EventEmitter<any>();

  interval;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.eventType && !changes.eventType.firstChange) {
      this.performTask(changes.eventType.currentValue);
    }
  }

  ngOnInit(): void {
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
    this.pauseLogsEmitter.emit(`paused at ${this.time}`);
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.time = 0;
  }

}
