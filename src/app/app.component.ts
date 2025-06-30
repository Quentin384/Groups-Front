//import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

//@Component({
  //selector: 'app-root',
  //imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.scss'
//})
//export class AppComponent {
//  title = 'GroupGenerateur';
//}
import { Component } from '@angular/core';
import { AdminDashboardDetailUserComponent } from './pages/dashboard/admin-dashboard-detail-user/admin-dashboard-detail-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdminDashboardDetailUserComponent],
  template: `<app-admin-dashboard-detail-user />`
})
export class AppComponent {}
