import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindPatientComponent } from './find-patient.component';

const routes: Routes = [
    {
        path: 'find-patient',
        component: FindPatientComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindPatientRoutingModule { }
