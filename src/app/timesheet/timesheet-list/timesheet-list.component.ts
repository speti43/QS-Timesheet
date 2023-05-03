import { Component, OnInit } from '@angular/core';
import { TimesheetList } from 'src/app/models/timesheet';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.scss'],
})
export class TimesheetListComponent implements OnInit {
  date: Date;
  tsList: TimesheetList;
  keys: string[];
  constructor(private tsService: TimesheetService) {
    tsService.getCurrentMonth().then((r) => {
      this.tsList = r;
      this.keys = Object.keys(r);
    });
  }

  ngOnInit() {}
}
