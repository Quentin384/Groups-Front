import { Component }                 from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ButtonComponent }           from './shared/components/button/button.component';
import { CardComponent }             from './shared/components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,  // pour <router-outlet>
    RouterLink,    // pour routerLink sur vos <a>
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
