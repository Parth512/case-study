import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountDownTimerObvComponent } from './count-down-timer-obv.component';


const routes: Routes = [
  {
    path: '',
    component: CountDownTimerObvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountdownObvRouting { }

