import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

/* Interface pour les éléments de la liste */
interface ListItem {
  id: number;
  name: string;
  description: string;
  members: number;
  level: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonComponent
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
      description: 'A group for learning Angular framework together',
      members: 5,
      level: 'Intermediate'
    },
    {
      id: 2,
      name: 'JavaScript Basics',
      description: 'For beginners who want to learn JavaScript fundamentals',
      members: 8,
      level: 'Beginner'
    },
    {
      id: 3,
      name: 'Advanced Web Development',
      description: 'Deep dive into modern web development techniques',
      members: 3,
      level: 'Advanced'
    },
    {
      id: 4,
      name: 'UI/UX Design Group',
      description: 'Focus on user interface and experience design',
      members: 6,
      level: 'Intermediate'
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

/* List.component.ts */
