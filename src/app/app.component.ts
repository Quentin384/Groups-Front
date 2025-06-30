//import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

//@Component({
  //selector: 'app-root',
  //imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.scss'
//})
//export class AppComponent {
//  title = 'GroupGenerateur';
//}
import { Component } from '@angular/core';
import { VerifyEmailComponent } from './pages/verify-email/verify-email';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerifyEmailComponent],
  template: `<app-verify-email />`
})
export class AppComponent {}

