import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';

/**
 * Module partagé
 *
 * Contient les composants, directives et pipes réutilisables dans toute l'application
 */
@NgModule({
  imports: [
    CommonModule,
    ButtonComponent,
    AlertComponent
  ],
  exports: [
    CommonModule,
    ButtonComponent,
    AlertComponent
  ]
})
export class SharedModule { }
