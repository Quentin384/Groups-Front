// src/app/pages/members/members.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

// Composants réutilisables
import { AppInputComponent }      from '../../shared/components/input/input.component';
import { SelectInputComponent }   from '../../shared/components/select-input/select-input.component';
import { AppCheckboxComponent }   from '../../shared/components/checkbox/checkbox.component';
import { ButtonComponent }        from '../../shared/components/button/button.component';
import { BackButtonComponent }    from '../../shared/components/back.button/back.button.component';

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppInputComponent,
    SelectInputComponent,
    AppCheckboxComponent,
    ButtonComponent,
    BackButtonComponent      
  ],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class Members {
  genres: Option[] = [
    { value: 'MASCULIN',           label: 'Masculin' },
    { value: 'FEMININ',            label: 'Féminin' },
    { value: 'NE_SE_PRONONCE_PAS', label: 'Ne se prononce pas' },
  ];

  aisances: Option[] = [1,2,3,4].map(n => ({
    value: String(n),
    label: `Aisance FR ${n}/4`
  }));

  technicalLevels: Option[] = [1,2,3,4].map(n => ({
    value: String(n),
    label: `Tech ${n}/4`
  }));

  profiles: Option[] = [
    { value: 'TIMIDE',    label: 'Timide' },
    { value: 'RESERVE',   label: 'Réservé' },
    { value: 'A_L_AISE',  label: 'À l’aise' }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name:      ['', [Validators.required, Validators.minLength(4), Validators.maxLength(49)]],
      genre:     ['', Validators.required],
      level:     ['', Validators.required],
      technical: ['', Validators.required],
      ancienDW:  [false],
      profile:   ['', Validators.required],
      age:       [null, [Validators.required, Validators.min(1), Validators.max(99)]]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    console.log('Nouveau membre :', this.form.value);
  }
}
