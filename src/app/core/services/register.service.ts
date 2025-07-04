/*
 * @fileoverview Service d'enregistrement et guard pour l'application.
 * Ce fichier contient le service pour l'enregistrement des utilisateurs
 * et un guard qui empêche les utilisateurs déjà connectés d'accéder à la page d'enregistrement.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

/*
 * Interface pour les données d'enregistrement d'un utilisateur
 */
export interface RegisterEssai {
  /* Nom de famille de l'utilisateur */
  nom: string;
  /* Prénom de l'utilisateur */
  prenom: string;
  /* Adresse email de l'utilisateur */
  email: string;
  /* Mot de passe de l'utilisateur */
  password: string;
}

/*
 * Interface pour la réponse du serveur après une tentative d'enregistrement
 */
export interface RegisterResponse {
  /* Indique si l'enregistrement a réussi */
  success: boolean;
  /* Message retourné par le serveur */
  message: string;
  /* Identifiant de l'utilisateur créé (optionnel) */
  userId?: string;
}

/*
 * Service d'enregistrement
 * Gère l'envoi des données d'enregistrement au backend
 */
@Injectable({ providedIn: 'root' })
export class RegisterService {
  /*
   * URL de l'API pour l'enregistrement des utilisateurs
   * (doit correspondre à la route exposée par le back)
   */
  /* Essai de différents formats d'URL pour résoudre l'erreur 404 */
  private readonly baseUrl = 'http://84.16.70.142';
  private readonly apiUrl = `${this.baseUrl}/api/inscription`;

  constructor(private http: HttpClient) {}

  /*
   * Envoie les données d'enregistrement au backend
   * @param essai Objet contenant nom, prénom, email et mot de passe
   * @returns Observable contenant la réponse du serveur
   */
  register(essai: RegisterEssai): Observable<RegisterResponse> {
    const headers = { 'Content-Type': 'application/json' };
    console.log('Sending registration request to:', this.apiUrl);
    console.log('Registration data:', essai);

    /* Ajout de l'option withCredentials pour gérer les problèmes potentiels de CORS */
    return this.http.post<RegisterResponse>(
      this.apiUrl,
      essai,
      {
        headers,
        withCredentials: true /* Inclure les informations d'identification comme les cookies dans la requête */
      }
    ).pipe(
      tap(response => console.log('Registration response:', response)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Registration error details:', error);

    if (error.status === 404) {
      console.error('API endpoint not found. Please check the URL:', error.url);
    } else if (error.error instanceof ErrorEvent) {
      /* Client-side error */
      console.error('Client-side error:', error.error.message);
    } else {
      /* Server-side error */
      console.error(
        `Server returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`
      );
    }

    return throwError(() => new Error('Registration failed. Please try again later.'));
  }
}

/*
 * Guard pour la page d'enregistrement
 * Empêche les utilisateurs déjà connectés d'accéder à la page d'enregistrement
 */
@Injectable({ providedIn: 'root' })
export class RegisterGuard implements CanActivate {
  constructor(private router: Router) {}

  /*
   * Vérifie si l'utilisateur peut accéder à la page d'enregistrement
   * @param route La route activée
   * @param state L'état du routeur
   * @returns true si accès autorisé, ou UrlTree pour redirection
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const token = localStorage.getItem('authToken');
    /* Si l'utilisateur est déjà authentifié, on le redirige vers l'accueil */
    if (token) {
      return this.router.parseUrl('/');
    }
    return true;
  }
}
