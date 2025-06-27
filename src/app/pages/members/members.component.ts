import { Component }               from '@angular/core';
// Décorateur pour définir un composant Angular et son comportement

import { CommonModule }            from '@angular/common';
// Fournit les directives de base (ngIf, ngFor, etc.) pour le template

import {
  ReactiveFormsModule,           // Pour utiliser les formulaires réactifs
  FormBuilder,                   // Service pour construire facilement un FormGroup
  FormGroup,                     // Représente un groupe de contrôles de formulaire
  Validators                     // Ensemble de validateurs prédéfinis (required, min, etc.)
} from '@angular/forms';

import { ButtonComponent }         from '../../shared/components/button/button.component';
// Import de votre composant de bouton réutilisable, standalone

// Définition d’une interface pour faciliter le typage des options de sélection
interface Option {
  value: string;  // Valeur envoyée au formulaire
  label: string;  // Texte affiché à l’utilisateur
}

@Component({
  selector: 'app-members',        // Balise HTML à utiliser : <app-members>
  standalone: true,               // Composant autonome, pas besoin de module NgModule
  imports: [
    CommonModule,                 // Permet d’utiliser ngIf, ngFor, etc.
    ReactiveFormsModule,          // Permet d’utiliser formGroup et formControlName
    ButtonComponent               // Pour intégrer <app-button> dans le template
  ],
  templateUrl: './members.component.html',  // Chemin vers le fichier template HTML
  styleUrls: ['./members.component.scss']   // Chemin vers le fichier de styles SCSS
})
export class Members {
  // Tableau d’options pour le champ "genre"
  genres: Option[] = [
    { value: 'MASCULIN',          label: 'Masculin' },
    { value: 'FEMININ',           label: 'Féminin' },
    { value: 'NE_SE_PRONONCE_PAS', label: 'Ne se prononce pas' },
  ];

  // Tableau d’options pour le champ "aisance français"
  aisances: Option[] = [1, 2, 3, 4].map(n => ({
    value: String(n),             // Conversion en chaîne pour le FormControl
    label: `Aisance FR ${n}/4`    // Texte formaté
  }));

  // Tableau d’options pour le champ "niveau technique"
  technicalLevels = [1, 2, 3, 4].map(n => ({
    value: String(n),
    label: `Tech ${n}/4`
  }));

  // Tableau d’options pour le champ "profil"
  profiles: Option[] = [
    { value: 'TIMIDE',   label: 'Timide' },
    { value: 'RESERVE',  label: 'Réservé' },
    { value: 'A_L_AISE', label: 'À l’aise' }
  ];

  // Propriété qui contiendra notre FormGroup, initialisée dans le constructeur
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Création du FormGroup et configuration des validateurs pour chaque champ
    this.form = this.fb.group({
      name:      ['', Validators.required],             // Champ texte obligatoire
      genre:     ['', Validators.required],             // Sélect obligatoire
      level:     ['', Validators.required],             // Sélect obligatoire
      technical: ['', Validators.required],             // Sélect obligatoire
      ancienDW:  [false],                               // Checkbox (booléen)
      profile:   ['', Validators.required],             // Sélect obligatoire
      age:       [null, [Validators.required, Validators.min(1)]]  
      // Numérique obligatoire et valeur minimale 1
    });
  }

  /** Méthode appelée lors du submit du formulaire */
  onSubmit(): void {
    if (this.form.invalid) {
      // Si le formulaire est invalide, on ne fait rien
      return;
    }
    // Sinon, on affiche les valeurs dans la console (à remplacer par service)
    console.log('Nouveau membre :', this.form.value);
  }
}
