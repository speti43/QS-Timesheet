import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimesheetDetailsPageRoutingModule } from './timesheet-details-routing.module';

import { TimesheetDetailsPage } from './timesheet-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimesheetDetailsPageRoutingModule
  ],
  declarations: [TimesheetDetailsPage]
})
export class TimesheetDetailsPageModule {}
