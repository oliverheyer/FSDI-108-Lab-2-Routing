import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';

  name = 'Oliver Heyer';

  test() {
    console.log('warning message');

    this.name = 'Winter is at Hand';
  }
}
