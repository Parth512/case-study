import { Component, OnInit } from '@angular/core';
import { reverse } from 'lodash';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit {

  timeframe = 0;
  interval;
  eventType = '';
  pauseLogs = [];
  allLogs = [];
  startCount = 0;
  pauseCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getLogs(event) {
    this.allLogs = event;
    this.processLogs(this.allLogs);
  }

  performTask(task) {
    this.eventType = task.type;
    this.timeframe = task.time;
    console.log(task);
  }

  getPauseLogs(event) {
    this.pauseLogs.push(event);
  }

  processLogs(logs) {
    this.startCount = logs.filter((ele) => ele.startsWith('start')).length;
    this.pauseCount = logs.length - this.startCount;
  }

}
