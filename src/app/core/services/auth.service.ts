import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RegisterService, RegisterEssai, RegisterResponse } from './register.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* Utilisation de la même approche que dans RegisterService */
  private readonly baseUrl = 'http://84.16.70.142';
  private readonly loginUrl = `${this.baseUrl}/api/connexion`;

  constructor(
    private http: HttpClient,
    private registerService: RegisterService
  ) { }

  /* Méthodes d'authentification */
  login(email: string, password: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    console.log('Sending login request to:', this.loginUrl);
    console.log('Login data:', { email, password: '********' }); /* Masquage du mot de passe dans les logs */

    /* Utilisation de la même approche que dans RegisterService */
    return this.http.post(
      this.loginUrl,
      { email, password },
      {
        headers,
        withCredentials: true /* Inclure les informations d'identification comme les cookies dans la requête */
      }
    ).pipe(
      tap(response => console.log('Login response:', response)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Authentication error details:', error);

    if (error.status === 404) {
      console.error('API endpoint not found. Please check the URL:', error.url);
    } else if (error.error instanceof ErrorEvent) {
      /* Erreur côté client */
      console.error('Client-side error:', error.error.message);
    } else {
      /* Erreur côté serveur */
      console.error(
        `Server returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`
      );
    }

    return throwError(() => new Error('Authentication failed. Please try again later.'));
  }

  register(userData: any): Observable<RegisterResponse> {
    /* Utiliser le RegisterService pour gérer l'inscription */
    const registerData: RegisterEssai = {
      nom: userData.nom,
      prenom: userData.prenom,
      email: userData.email,
      password: userData.password
    };

    return this.registerService.register(registerData);
  }

  logout(): void {
    /* Implémenter la logique de déconnexion */
    localStorage.removeItem('authToken');
    console.log('User logged out');
  }
}
