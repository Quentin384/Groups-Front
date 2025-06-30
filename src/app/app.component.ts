import { Component } from '@angular/core';
import { VerifyEmailComponent } from './pages/verify-email/verify-email';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerifyEmailComponent],
  template: `<app-verify-email />`
})
export class AppComponent {}

