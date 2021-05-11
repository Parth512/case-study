import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './image.component';
import { ImageRoutingModule } from './image.routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        ImageComponent
    ],
    imports: [        
        CommonModule,
        ImageRoutingModule
    ],
    providers: []
})
export class ImageModule { }
