import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TimerServiceObv {


    performTaskSubject = new Subject<any>();
    logsSubject = new Subject<any>();
    pauseLogsSubject = new Subject<any>();

    constructor() { }

}