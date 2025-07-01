import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { of, Observable, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';

/**
 * Interface pour un groupe d'utilisateur
 */
interface UserGroup {
  id: number;
  name: string;
  description: string;
  members: number;
  createdAt: Date;
}

/**
 * Composant pour le tableau de bord utilisateur
 */
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, AlertComponent, ButtonComponent, RouterLink]
})
export class UserDashboardComponent implements OnInit {
  /**
   * Constructeur avec injection du Router
   */
  constructor(private router: Router) {}

  /**
   * Indique si les données sont en cours de chargement
   */
  isLoading = false;

  /**
   * Message d'erreur à afficher
   */
  errorMessage = '';

  /**
   * Liste des groupes de l'utilisateur
   */
  userGroups: UserGroup[] = [];

  /**
   * Nombre total de groupes de l'utilisateur
   */
  totalGroups = 0;

  /**
   * Initialisation du composant
   */
  ngOnInit(): void {
    this.loadUserGroups();
  }

  /**
   * Charge les groupes de l'utilisateur
   */
  loadUserGroups(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.fetchUserGroups().pipe(
      catchError(error => {
        this.errorMessage = 'Erreur lors du chargement des groupes';
        this.isLoading = false;
        return throwError(() => error);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(groups => {
      this.userGroups = groups;
      this.totalGroups = groups.length;
    });
  }

  /**
   * Affiche les détails d'un groupe
   * @param groupId Identifiant du groupe
   */
  viewGroupDetails(groupId: number): void {
    /* Navigation vers la page de détails du groupe */
    this.router.navigate(['/dashboard/user/userdetail']);
    console.log(`Navigation vers les détails du groupe ${groupId}`);
  }

  /**
   * Simule un appel API pour récupérer les groupes de l'utilisateur
   * @returns Observable avec les groupes de l'utilisateur
   */
  private fetchUserGroups(): Observable<UserGroup[]> {
    /* Simulation d'un délai réseau */
    return of([
      {
        id: 1,
        name: 'Groupe Resultat A',
        description: 'Groupe Resultat A',
        members: 5,
        createdAt: new Date(2024, 5, 15)
      },
      {
        id: 2,
        name: 'Groupe Resultat B',
        description: 'Groupe Resultat B',
        members: 3,
        createdAt: new Date(2024, 4, 20)
      },
      {
        id: 3,
        name: 'Groupe Resultat C',
        description: 'Groupe Resultat C',
        members: 7,
        createdAt: new Date(2024, 3, 10)
      }
    ]).pipe(delay(1000));
  }

  /**
   * Ferme l'alerte d'erreur
   */
  closeAlert(): void {
    this.errorMessage = '';
  }
}

/* User-dashboard.component.ts */
