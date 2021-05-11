import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ECommerceComponent } from './e-commerce.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { EcommerceRoutingModule } from './e-commerce.routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        ECommerceComponent
    ],
    imports: [        
        CommonModule,
        HttpClientModule,        
        FormsModule,
        MatButtonToggleModule,
        MatGridListModule,
        MatSelectModule,
        MatIconModule,
        EcommerceRoutingModule
    ],
    providers: []
})
export class ECommerceModule { }
