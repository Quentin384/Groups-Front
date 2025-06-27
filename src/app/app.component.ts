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
import { AdminDashboardDetailAdminComponent } from './pages/dashboard/admin-dashboard-detail-admin/admin-dashboard-detail-admin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdminDashboardDetailAdminComponent],
  template: `<app-admin-dashboard-detail-admin />`
})
export class AppComponent {}
