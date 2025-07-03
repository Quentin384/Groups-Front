import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppInputComponent } from '../../shared/components/input/input.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { userService } from '../../core/services/user.service'; // adapte le chemin

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AppInputComponent, ButtonComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: userService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.userService.loginUser(credentials).subscribe({
        next: (response) => {
          console.log('Login success:', response);
          this.router.navigate(['/list']); // Redirection après succès
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      });
    }
  }
}
