import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page as TimesheetPage } from './timesheet.page';

const routes: Routes = [
  {
    path: '',
    component: TimesheetPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetPageRoutingModule {}
