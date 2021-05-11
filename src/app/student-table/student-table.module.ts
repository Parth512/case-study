import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { StudentTableComponent } from './student-table.component';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { StudentTableRouting } from './student-table.routing';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        StudentTableComponent
    ],
    imports: [        
        CommonModule,   
        HttpClientModule,     
        FormsModule,
        MatTableModule,
        MatIconModule,
        MatGridListModule,
        StudentTableRouting
    ]
})
export class StudentTableModule { }
