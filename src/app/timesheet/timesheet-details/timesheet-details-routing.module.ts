import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimesheetDetailsPage } from './timesheet-details.page';

const routes: Routes = [
  {
    path: '',
    component: TimesheetDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimesheetDetailsPageRoutingModule {}
