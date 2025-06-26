import { Component } from '@angular/core';
import { CardComponent } from './shared/components/card/card.component'; // ⬅️ Import du composant standalone

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
