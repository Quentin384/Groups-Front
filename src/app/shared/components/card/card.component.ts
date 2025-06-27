// On importe les outils nécessaires depuis Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Permet d’utiliser *ngIf, ngClass, etc.

// Déclaration du composant
@Component({
  selector: 'app-card', // Le nom HTML à utiliser dans le template : <app-card>
  standalone: true,     // Composant autonome (pas besoin de module Angular classique)
  templateUrl: './card.component.html', // Fichier HTML lié au composant
  styleUrls: ['./card.component.scss'], // Fichier de styles lié au composant
  imports: [CommonModule] // ⚠️ Obligatoire pour *ngIf et ngClass dans le HTML
})
export class CardComponent {
  // `@Input()` permet d’envoyer une valeur depuis le HTML (ex: <app-card title="...">)
  @Input() title?: string;     // Titre de la carte (optionnel)
  @Input() subtitle?: string;  // Sous-titre (optionnel)
  @Input() bordered = true;    // Affiche un cadre si true (par défaut oui)
  @Input() shadow = true;      // Affiche une ombre si true (par défaut oui)
}
