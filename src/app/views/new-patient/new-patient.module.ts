import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPatientRoutingModule } from './new-patient-routing.module';
import { NewPatientComponent } from './new-patient.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [NewPatientComponent],
  imports: [
    CommonModule,
    NewPatientRoutingModule,
    LayoutModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class NewPatientModule { }