import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Garde de redirection vers le dashboard approprié
 *
 * Redirige l'utilisateur vers le dashboard admin ou user en fonction de son rôle
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardRedirectGuard implements CanActivate {

  /**
   * Constructeur
   * @param authService Service d'authentification
   * @param router Service de routage
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Vérifie si l'utilisateur peut activer la route
   * Redirige vers le dashboard approprié en fonction du rôle
   * @returns false pour bloquer la route vide
   */
  canActivate(): boolean {
    const role = this.authService.role;

    if (role === 'admin') {
      this.router.navigate(['/dashboard', 'admin']);
    } else if (role === 'user') {
      this.router.navigate(['/dashboard', 'user']);
    } else {
      this.router.navigate(['/login']);
    }

    return false;
  }
}

/* Dashboard-redirect.guard.ts */
