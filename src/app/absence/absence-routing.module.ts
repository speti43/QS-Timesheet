import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencePage } from './absence.page';

const routes: Routes = [
  {
    path: '',
    component: AbsencePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
