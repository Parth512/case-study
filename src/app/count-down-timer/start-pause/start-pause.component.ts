import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { reverse } from 'lodash';

@Component({
  selector: 'app-start-pause',
  templateUrl: './start-pause.component.html',
  styleUrls: ['./start-pause.component.scss']
})
export class StartPauseComponent implements OnInit {

  @Output() performTask = new EventEmitter<any>();
  @Output() logs = new EventEmitter<any>();
  

  isStarted = false;
  timeFrame = 0;
  logStack = [];
  @Input() pauseLogs = [];

  constructor() { }

  ngOnInit(): void {
  }

  sentEvent(type) {
    if (type == 'start' && !this.isStarted) {
      this.isStarted = true;
      this.performTask.emit({
        type: 'start',
        time: this.timeFrame
      });
      this.addLogToStack('start');
    } else if (type == 'reset') {
      this.isStarted = false;
      this.performTask.emit({
        type: 'reset',
        time: this.timeFrame
      });
      this.timeFrame = 0;
      this.addLogToStack('reset');
    } else {
      this.performTask.emit({
        type: 'pause',
        time: this.timeFrame
      });      
      this.isStarted = false;
      this.addLogToStack('pause');
    }
  }

  addLogToStack(type) {
    if (type != 'reset') {
      this.logStack.push(`${type}ed at ${new Date().toLocaleString()}`);
    } else {
      this.logStack.push(`reset`);
    }

    this.logStack = reverse(this.logStack);
    this.logs.emit(this.logStack);
  }


}
