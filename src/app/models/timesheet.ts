export class Timesheet {
  id: number;
  from: Date;
  to: Date;
  project: string;
  task: string;
}

export class TimesheetList {
  [id: string]: Timesheet;
}
