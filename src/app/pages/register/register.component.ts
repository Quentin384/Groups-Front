import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ CE IMPORT
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppInputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BackButtonComponent } from '../../shared/components/back.button/back.button.component'

@Component({
  selector: 'app-register',
  standalone: true,
  imports:
   [CommonModule,
    ReactiveFormsModule, 
    AppInputComponent,
    ButtonComponent, 
    BackButtonComponent,
    RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class Register {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],  // <-- nouveau champ

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Traiter la connexion ici
    }
  }
}
