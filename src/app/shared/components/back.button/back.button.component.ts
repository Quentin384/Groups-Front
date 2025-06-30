import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './back.button.component.html',
  styleUrls: ['./back.button.component.scss']
})

export class BackButtonComponent {
  constructor(private location: Location, private faLibrary: FaIconLibrary) {
    this.faLibrary.addIcons(faArrowLeft); // ✅ ajouter ici l'icône à la bibliothèque
  }

  goBack(): void {
    this.location.back();
  }
}