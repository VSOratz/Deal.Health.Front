import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './consulta.component';
import { LayoutModule } from "../../shared/layout/layout.module";
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TextFieldModule } from '@angular/cdk/text-field';



@NgModule({
    declarations: [ConsultaComponent],
    imports: [
        CommonModule,
        ConsultaRoutingModule,
        LayoutModule,
        MatNativeDateModule,
        MatIconModule,
        MatDatepickerModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        TextFieldModule
    ]
})
export class ConsultaModule { }
