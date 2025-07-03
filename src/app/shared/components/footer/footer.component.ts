import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHome, faScaleBalanced, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  showLegalModal = false;

  constructor(private authService: AuthService, private faLibrary: FaIconLibrary) {
    this.faLibrary.addIcons(faHome, faGithub, faScaleBalanced, faRightFromBracket);
  }

  openLegalModal(): void {
    this.showLegalModal = true;
  }

  closeLegalModal(): void {
    this.showLegalModal = false;
  }

  logout(): void {
    this.authService.logout();
    // Redirect to home or login page if needed
  }
}
