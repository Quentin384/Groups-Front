import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


/**
 * Composant de bouton standalone.
 *
 * Fournit un bouton réutilisable avec différentes options de style et de comportement.
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {


  /**
   * Texte affiché sur le bouton
   * @default 'Bouton'
   */
  @Input() label: string = 'Bouton';

  /**
   * Type du bouton HTML
   * @default 'button'
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * État désactivé du bouton
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Couleur/style du bouton
   * @default 'primary'
   */
  @Input() color: 'primary' | 'secondary' | 'danger' = 'primary';
  
}