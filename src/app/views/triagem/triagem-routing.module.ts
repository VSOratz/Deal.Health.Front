import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriagemComponent } from './triagem.component';

const routes: Routes = [
    {
        path: 'triagem',
        component: TriagemComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriagemRoutingModule { }
