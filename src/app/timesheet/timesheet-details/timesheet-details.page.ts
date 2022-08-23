import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/models/timesheet';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'app-timesheet-details',
  templateUrl: './timesheet-details.page.html',
  styleUrls: ['./timesheet-details.page.scss'],
})
export class TimesheetDetailsPage implements OnInit {
  ts: Timesheet;
  constructor(
    private tsService: TimesheetService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((r) => {
      this.ts = tsService.getById(+r.get('id'));
    });
  }

  ngOnInit() {}
  save() {}
}
