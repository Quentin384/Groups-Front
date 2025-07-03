import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BackButtonComponent } from '../components/back.button/back.button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ BackButtonComponent ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header {
  title = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd),
      map(() => {
        // descendre jusqu’à la route enfant la plus profonde
        let route = this.activatedRoute.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(r => r.outlet === 'primary'),
      map(r => r.snapshot.data['title'] as string)
    ).subscribe(t => this.title = t);
  }
}
