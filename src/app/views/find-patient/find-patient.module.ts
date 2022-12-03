import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindPatientRoutingModule } from './find-patient-routing.module';
import { FindPatientComponent } from './find-patient.component';


@NgModule({
  declarations: [FindPatientComponent],
  imports: [
    CommonModule,
    FindPatientRoutingModule
  ]
})
export class FindPatientModule { }
