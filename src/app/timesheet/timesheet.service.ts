import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  tsDummy = [
    {
      id: 1,
      from: new Date(),
      to: new Date(),
      project: 'Ems',
      task: 'Development',
    },
    {
      id: 2,
      from: new Date(),
      to: new Date(),
      project: 'QS rezsi',
      task: 'Tanulás',
    },
    {
      id: 3,
      from: new Date(),
      to: new Date(),
      project: 'Whitebox',
      task: 'Support',
    },
  ];
  constructor() {}

  getCurrentMonth() {
    return this.tsDummy;
  }

  getById(id: number) {
    return this.tsDummy.find((r) => r.id === id);
  }
}
