import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CountDownTimerObvComponent } from './count-down-timer-obv.component';
import { FormsModule } from '@angular/forms';
import { CountsObvComponent } from './counts-obv/counts-obv.component';
import { LogsObvComponent } from './logs-obv/logs-obv.component';
import { StartPauseObvComponent } from './start-pause-obv/start-pause-obv.component';
import { TimerObvComponent } from './timer-obv/timer-obv.component';
import { TimerServiceObv } from './timer-obv.service';
import { CountdownObvRouting } from './count-down-timer-obv.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CountDownTimerObvComponent,
        CountsObvComponent,
        LogsObvComponent,
        StartPauseObvComponent,
        TimerObvComponent
    ],
    imports: [        
        CommonModule,
        HttpClientModule,        
        FormsModule,
        CountdownObvRouting
    ],
    providers: [TimerServiceObv]
})
export class CountDownObvModule { }
