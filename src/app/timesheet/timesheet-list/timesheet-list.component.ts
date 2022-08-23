import { Component, OnInit } from '@angular/core';
import { Timesheet } from 'src/app/models/timesheet';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'app-timesheet-list',
  templateUrl: './timesheet-list.component.html',
  styleUrls: ['./timesheet-list.component.scss'],
})
export class TimesheetListComponent implements OnInit {
  date: Date;
  tsList: Timesheet[];
  constructor(private tsService: TimesheetService) {
    this.tsList = tsService.getCurrentMonth();
  }

  ngOnInit() {}
}
