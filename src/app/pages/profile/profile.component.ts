import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/* Interface pour le profil de groupe */
interface GroupProfile {
  id: number;
  name: string;
  description: string;
  level: string;
  maxMembers: number;
  currentMembers: number;
  topics: string[];
  createdBy: string;
  createdDate: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  /* Le mode peut être 'view', 'edit', ou 'new' */
  mode: 'view' | 'edit' | 'new' = 'view';

  /* ID du groupe en cours de visualisation/édition */
  groupId: number | null = null;

  /* Formulaire pour éditer ou créer un groupe */
  form: FormGroup;

  /* Données d'exemple pour un profil de groupe */
  groupProfile: GroupProfile = {
    id: 1,
    name: 'Angular Study Group',
    description: 'A group for learning Angular framework together. We meet twice a week to discuss concepts, work on projects, and help each other with challenges.',
    level: 'Intermediate',
    maxMembers: 10,
    currentMembers: 5,
    topics: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
    createdBy: 'Flemme',
    createdDate: '2025-06-15'
  };

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    /* Initialiser le formulaire */
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      level: ['', Validators.required],
      maxMembers: [10, [Validators.required, Validators.min(2), Validators.max(20)]],
      topics: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    /* Récupérer l'ID à partir des paramètres de route */
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id === 'new') {
        this.mode = 'new';
      } else if (id) {
        this.groupId = +id;
        /* Dans une vraie application, vous récupéreriez les données du groupe depuis un service.
           Pour l'instant, nous utiliserons les données d'exemple */
        this.loadGroupData();
      }
    });
  }

  loadGroupData(): void {
    /* Dans une vraie application, vous récupéreriez les données depuis un service.
       Pour l'instant, nous utiliserons les données d'exemple */
    if (this.mode === 'edit') {
      this.form.patchValue({
        name: this.groupProfile.name,
        description: this.groupProfile.description,
        level: this.groupProfile.level,
        maxMembers: this.groupProfile.maxMembers,
        topics: this.groupProfile.topics.join(', ')
      });
    }
  }

  toggleEditMode(): void {
    if (this.mode === 'view') {
      this.mode = 'edit';
      this.loadGroupData();
    } else {
      this.mode = 'view';
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    console.log('Form submitted:', this.form.value);
    /* Dans une vraie application, vous enregistreriez les données dans un service */

    /* Revenir au mode visualisation si on était en mode édition */
    if (this.mode === 'edit') {
      this.mode = 'view';
    }
  }

  joinGroup(): void {
    console.log('Joining group:', this.groupId);
    /* Dans une vraie application, vous appelleriez un service pour rejoindre le groupe */
  }
}

/* Profile.component.ts */
