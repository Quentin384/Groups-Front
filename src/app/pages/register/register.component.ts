import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Import Router for navigation
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppInputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterLink }                 from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports:
   [CommonModule,
    ReactiveFormsModule,
    AppInputComponent,
    ButtonComponent,
    RouterModule,
  RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class Register {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],  // <-- nouveau champ

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Traiter l'inscription ici

      // Navigate to verify email page after successful registration
      this.router.navigate(['/verifyemail']);
    }
  }
}
