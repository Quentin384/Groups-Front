import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink }                 from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../shared/components/button/button.component';


@Component({
  selector: 'app-generate-groups',
  imports: [ CommonModule, FormsModule, AlertComponent, ButtonComponent, RouterLink ],
  templateUrl: './generate-groups.component.html',
  styleUrl: './generate-groups.component.scss'
})
export class GenerateGroupsComponent {

  criteria = { 
    mixFormerDWWN: false,
    mixAges: false,
  }
numberOfGroups: any;

alertMessage = '';
alertType: 'success' | 'error' | '' = '';
showAlert = false;

generateGroups() {
  if (!this.numberOfGroups || this.numberOfGroups < 1) {
    this.alertType = 'error';
    this.alertMessage = 'Merci de saisir un nombre de groupes valide.';
    this.showAlert = true;
    return;
  }

  this.alertType = 'success';
  this.alertMessage = `✅ ${this.numberOfGroups} groupes vont être générés avec les critères suivants : 
    • Mix anciens DWWM : ${this.criteria.mixFormerDWWN ? 'oui' : 'non'} 
    • Mix âges : ${this.criteria.mixAges ? 'oui' : 'non'}`;
  this.showAlert = true;

  console.log('🎯 Nombre de groupes :', this.numberOfGroups);
  console.log('📌 Critères :', this.criteria);
}

closeAlert() {
  this.showAlert = false;
}


}
