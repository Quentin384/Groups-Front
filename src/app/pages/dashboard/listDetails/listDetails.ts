import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent }           from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-admin-dashboard-detail-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './listDetails.html',
  styleUrls: ['./listDetails.scss']
})
export class listDetails {
  // 👇 Données locales temporairement
  group = {
    name: 'Team Phoenix',
    members: [
      {
        id: 'u1',
        firstName: 'Alice',
        lastName: 'Martin',
        photo: '/assets/images/alice.jpg',
        languageLevel: 'B2',
        techLevel: 4,
        isFormerDwwn: true,
        profile: 'timide',
        age: 28
      },
      {
        id: 'u2',
        firstName: 'Bob',
        lastName: 'Dupont',
        photo: '/assets/images/bob.jpg',
        languageLevel: 'A2',
        techLevel: 2,
        isFormerDwwn: false,
        profile: 'extraverti',
        age: 31
      }
    ]
  };

  openEdit(id: string) {
    alert(`(Démo) Édition du membre avec l'ID : ${id}`);
  }
}
