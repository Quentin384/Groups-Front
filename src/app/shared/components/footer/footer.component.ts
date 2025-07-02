import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
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
