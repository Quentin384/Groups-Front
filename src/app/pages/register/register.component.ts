import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Import Router for navigation
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppInputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports:
   [CommonModule,
    ReactiveFormsModule,
    AppInputComponent,
    ButtonComponent,
    RouterModule],
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
      nom: ['', [Validators.required, Validators.minLength(2)]],  // Nom de famille
      prenom: ['', [Validators.required, Validators.minLength(2)]],  // Prénom
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);

      // Call the AuthService to register the user
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          // Navigate to verify email page after successful registration
          this.router.navigate(['/verifyemail']);
        },
        error: (error) => {
          console.error('Registration failed:', error);
          // Handle registration error (e.g., show error message)
        }
      });
    }
  }
}
