import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyB-XUkVfqQx-vNG-YoycAIYv01uaG7dcy0',
      authDomain: 'timesheet-4c6b4.firebaseapp.com',
      databaseURL:
        'https://timesheet-4c6b4-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'timesheet-4c6b4',
      storageBucket: 'timesheet-4c6b4.appspot.com',
      messagingSenderId: '852554831804',
      appId: '1:852554831804:web:909d5537b47dea07963db9',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
}
