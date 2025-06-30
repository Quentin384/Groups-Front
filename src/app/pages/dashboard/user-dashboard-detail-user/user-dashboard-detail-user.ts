import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-dashboard-detail-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-dashboard-detail-user.html',
  styleUrls: ['./user-dashboard-detail-user.scss']
})
export class UserDashboardDetailUserComponent {
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
