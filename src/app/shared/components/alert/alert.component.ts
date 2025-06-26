import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Composant d'alerte standalone.
 *
 * Affiche un message d'alerte avec différents types (success, error, info, warning)
 * et une option pour la fermer.
 *
 * Ce composant utilise les directives de CommonModule (ngClass, ngIf) pour gérer
 * la classe CSS dynamique et l'affichage conditionnel du bouton de fermeture.
 */
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  /**
   * Type de l'alerte. Modifie la classe CSS appliquée.
   * @default 'info'
   */
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'info';

  /**
   * Message à afficher dans l'alerte.
   */
  @Input() message: string = '';

  /**
   * Indique si l'alerte peut être fermée manuellement.
   * Si true, un bouton de fermeture apparaît.
   * @default false
   */
  @Input() dismissible: boolean = false;

  /**
   * Événement émis lorsque l'alerte est fermée via le bouton.
   */
  @Output() closed = new EventEmitter<void>();

  /**
   * Ferme l'alerte et émet l'événement `closed`.
   * @returns {void}
   */
  close(): void {
    this.closed.emit();
  }
}

/* Alert.components.ts */
