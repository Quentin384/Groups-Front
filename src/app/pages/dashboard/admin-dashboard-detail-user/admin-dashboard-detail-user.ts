import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard-detail-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard-detail-user.html',
  styleUrls: ['./admin-dashboard-detail-user.scss']
})
export class AdminDashboardDetailUserComponent {
  group = {
    name: 'Team Phoenix',
    members: [
      {
        id: 'u1',
        firstName: 'Alice',
        lastName: 'Martin',
        photo: '/assets/images/alice.jpg'
      },
      {
        id: 'u2',
        firstName: 'Bob',
        lastName: 'Dupont',
        photo: '/assets/images/bob.jpg'
      }
    ]
  };
}
