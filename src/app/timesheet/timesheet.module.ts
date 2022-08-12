import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimesheetPage } from './timesheet.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TimesheetPageRoutingModule } from './timesheet-routing.module';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TimesheetPageRoutingModule,
    SharedModule,
  ],
  declarations: [TimesheetPage, TimesheetListComponent],
})
export class TimesheetPageModule {}
