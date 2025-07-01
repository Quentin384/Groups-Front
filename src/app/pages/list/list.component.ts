import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CardComponent }             from '../../shared/components/card/card.component';

/* Interface pour les éléments de la liste */
interface ListItem {
  id: number;
  name: string;
  members: number;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  /* Données d'exemple pour la liste */
  items: ListItem[] = [
    {
      id: 1,
      name: 'Angular Study Group',
      members: 5,
    },
    {
      id: 2,
      name: 'JavaScript Basics',
      members: 8,
    },
    {
      id: 3,
      name: 'Advanced Web Development',
      members: 3,
    },
    {
      id: 4,
      name: 'UI/UX Design Group',
      members: 6,
    }
  ];

  constructor() { }

  ngOnInit(): void {
    /* La logique d'initialisation peut être placée ici */
  }

  /* Méthode pour naviguer vers les détails/profil du groupe */
  viewGroupProfile(id: number): void {
    console.log(`Navigating to profile for group ${id}`);
    /* Dans une vraie implémentation, cela utiliserait Router pour naviguer
    this.router.navigate(['/profile', id]); */
  }
}

