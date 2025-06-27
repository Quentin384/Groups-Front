import { Component }                 from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent }           from '../../shared/components/button/button.component';
import { CardComponent }             from '../../shared/components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,    // pour routerLink sur vos <a>
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Home { }
