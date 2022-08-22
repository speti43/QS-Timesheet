import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/models/timesheet';

@Component({
  selector: 'app-timesheet-details',
  templateUrl: './timesheet-details.page.html',
  styleUrls: ['./timesheet-details.page.scss'],
})
export class TimesheetDetailsPage implements OnInit {
  ts: Timesheet;
  constructor() {
    this.ts = {
      from: new Date(),
      to: new Date(),
      project: 'Ems',
      task: 'Development',
    };
  }

  ngOnInit() {}
  save() {}
}
