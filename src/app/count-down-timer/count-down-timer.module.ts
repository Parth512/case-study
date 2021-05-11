import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CountDownTimerComponent } from './count-down-timer.component';
import { TimerComponent } from './timer/timer.component';
import { StartPauseComponent } from './start-pause/start-pause.component';
import { LogsComponent } from './logs/logs.component';
import { CountsComponent } from './counts/counts.component';
import { FormsModule } from '@angular/forms';
import { TimerService } from './timer.service';
import { CountdownRouting } from './count-down-timer.routing';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        CountDownTimerComponent,
        TimerComponent,
        StartPauseComponent,
        LogsComponent,
        CountsComponent
    ],
    imports: [        
        CommonModule,
        HttpClientModule,        
        FormsModule,
        CountdownRouting
    ],
    providers: [TimerService]
})
export class CountDownModule { }
