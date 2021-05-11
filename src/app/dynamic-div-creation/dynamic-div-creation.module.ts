import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DynamicDivCreationComponent } from './dynamic-div-creation.component';
import { DynamicDivCreationRoutingModule } from './dynamic-div-routing.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        DynamicDivCreationComponent
    ],
    imports: [        
        CommonModule,
        HttpClientModule,        
        FormsModule,
        DynamicDivCreationRoutingModule
    ],
    providers: []
})
export class DynamicDivCreationModule { }
