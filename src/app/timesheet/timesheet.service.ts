import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  constructor() {}

  async getCurrentMonth() {
    const options = {
      url: 'https://timesheet-4c6b4-default-rtdb.europe-west1.firebasedatabase.app/ts.json',
    };

    const response = await Http.get(options);
    return response.data;
  }

  async getById(id: string) {
    const options = {
      url: `https://timesheet-4c6b4-default-rtdb.europe-west1.firebasedatabase.app/ts/${id}.json`,
    };

    const response = await Http.get(options);

    return response.data;
  }

  async addNew(item: any) {
    item.id = Math.random();
    const options = {
      url: 'https://timesheet-4c6b4-default-rtdb.europe-west1.firebasedatabase.app/ts.json',
      data: item,
    };

    const response = await Http.post(options);
  }
}
