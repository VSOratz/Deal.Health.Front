import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TriagemRoutingModule } from './triagem-routing.module';
import { TriagemComponent } from './triagem.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TextFieldModule } from '@angular/cdk/text-field';


@NgModule({
    declarations: [TriagemComponent],
    imports: [
        CommonModule,
        TriagemRoutingModule,
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
export class TriagemModule { }
