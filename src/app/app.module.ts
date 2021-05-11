import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ImageComponent } from './image/image.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { HttpClientModule } from '@angular/common/http';
import { CountDownModule } from './count-down-timer/count-down-timer.module';
import { StudentTableModule } from './student-table/student-table.module';
import { ScrollTrackerDirective } from './utility/scroll.directive';
import { CountDownObvModule } from './count-down-timer-obv/count-down-timer-obv.module';
import { DynamicDivCreationModule } from './dynamic-div-creation/dynamic-div-creation.module';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { ImageModule } from './image/image.module';
@NgModule({
  declarations: [
    AppComponent,
    ScrollTrackerDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    CountDownModule,
    ImageModule,
    StudentTableModule,
    CountDownObvModule,
    DynamicDivCreationModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSelectModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
