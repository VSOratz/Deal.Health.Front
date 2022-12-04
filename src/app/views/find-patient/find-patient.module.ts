import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FindPatientRoutingModule } from './find-patient-routing.module';
import { FindPatientComponent } from './find-patient.component';


@NgModule({
  declarations: [FindPatientComponent],
  imports: [
    CommonModule,
    FindPatientRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
  ]
})
export class FindPatientModule { }
