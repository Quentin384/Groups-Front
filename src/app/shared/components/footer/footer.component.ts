import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  showLegalModal = false;

  openLegalModal(): void {  
    this.showLegalModal = true;
  }
  closeLegalModal(): void {
    this.showLegalModal = false;
  }
}
