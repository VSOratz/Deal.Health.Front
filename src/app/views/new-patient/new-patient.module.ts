import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPatientRoutingModule } from './new-patient-routing.module';
import { NewPatientComponent } from './new-patient.component';


@NgModule({
  declarations: [NewPatientComponent],
  imports: [
    CommonModule,
    NewPatientRoutingModule
  ]
})
export class NewPatientModule { }