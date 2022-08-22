import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetPage } from './timesheet.page';
const routes: Routes = [
  {
    path: '',
    component: TimesheetPage,
  },
  {
    path: ':id/details',
    loadChildren: () => import('./timesheet-details/timesheet-details.module').then( m => m.TimesheetDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetPageRoutingModule {}
