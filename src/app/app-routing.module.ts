import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/image', pathMatch: 'full' },
  {
    path: 'image',
    loadChildren: () => import(`./image/image.module`).then(
      module => module.ImageModule
    )
  },
  {
    path: 'e-commarce',
    loadChildren: () => import(`./e-commerce/e-commerce.module`).then(
      module => module.ECommerceModule
    )
  },
  {
    path: 'count-down',
    loadChildren: () => import(`./count-down-timer/count-down-timer.module`).then(
      module => module.CountDownModule
    )
  },
  {
    path: 'count-down-obv',
    loadChildren: () => import(`./count-down-timer-obv/count-down-timer-obv.module`).then(
      module => module.CountDownObvModule
    )
  },
  {
    path: 'student-table',
    loadChildren: () => import(`./student-table/student-table.module`).then(
      module => module.StudentTableModule
    )
  },
  {
    path: 'dynamic-divs',
    loadChildren: () => import(`./dynamic-div-creation/dynamic-div-creation.module`).then(
      module => module.DynamicDivCreationModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
