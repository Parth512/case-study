import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicDivCreationComponent } from './dynamic-div-creation.component';


const routes: Routes = [
  {
    path: '',
    component: DynamicDivCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivCreationRoutingModule { }

