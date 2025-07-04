import { Component, OnInit } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { catchError, delay, finalize } from 'rxjs/operators';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

/**
 * Interface pour les statistiques du tableau de bord admin
 */
interface DashboardStats {
  totalGroups: number;
  totalUsers: number;
  activeSessions: number;
}

/**
 * Interface pour un groupe
 */
interface Group {
  id: number;
  name: string;
  members: number;
  createdAt: Date;
  status: 'active' | 'inactive';
}

/**
 * Composant pour le tableau de bord administrateur
 */
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, AlertComponent, DatePipe, RouterLink, LoaderComponent,]
})
export class AdminDashboardComponent implements OnInit {
  /**
   * Référence à l'objet Math pour l'utiliser dans le template
   */
  Math = Math;

  /**
   * Indique si les données sont en cours de chargement
   */
  isLoading = false;

  /**
   * Message d'erreur à afficher
   */
  errorMessage = '';

  /**
   * Statistiques du tableau de bord
   */
  stats: DashboardStats | null = null;

  /**
   * Liste des groupes récents
   */
  recentGroups: Group[] = [];

  /**
   * Page courante pour la pagination
   */
  currentPage = 1;

  /**
   * Nombre d'éléments par page
   */
  pageSize = 5;

  /**
   * Nombre total de groupes
   */
  totalGroups = 0;

  /**
   * Initialisation du composant
   */
  ngOnInit(): void {
    this.loadDashboardData();
  }

  /**
   * Charge les données du tableau de bord
   */
  loadDashboardData(): void {
    this.isLoading = true;
    this.errorMessage = '';

    /* Simulation d'un appel API pour les statistiques */
    this.fetchStats().pipe(
      catchError(error => {
        this.errorMessage = 'Erreur lors du chargement des statistiques';
        return throwError(() => error);
      }),
      finalize(() => {
        /* Chargement des groupes récents une fois les stats chargées */
        this.loadRecentGroups();
      })
    ).subscribe(stats => {
      this.stats = stats;
    });
  }

  /**
   * Charge les groupes récents
   */
  loadRecentGroups(): void {
    this.fetchRecentGroups(this.currentPage, this.pageSize).pipe(
      catchError(error => {
        this.errorMessage = 'Erreur lors du chargement des groupes récents';
        this.isLoading = false;
        return throwError(() => error);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(groups => {
      this.recentGroups = groups;
      /* Dans un cas réel, le total viendrait de l'API */
      this.totalGroups = 15;
    });
  }

  /**
   * Change de page dans la pagination
   * @param page Numéro de la page
   */
  changePage(page: number): void {
    this.currentPage = page;
    this.loadRecentGroups();
  }

  /**
   * Simule un appel API pour récupérer les statistiques
   * @returns Observable avec les statistiques
   */
  private fetchStats(): Observable<DashboardStats> {
    /* Simulation d'un délai réseau */
    return of({
      totalGroups: 24,
      totalUsers: 80,
      activeSessions: 5
    }).pipe(delay(800));
  }

  /**
   * Simule un appel API pour récupérer les groupes récents
   * @param page Numéro de la page
   * @param pageSize Nombre d'éléments par page
   * @returns Observable avec les groupes récents
   */
  private fetchRecentGroups(page: number, pageSize: number): Observable<Group[]> {
    /* Simulation d'un délai réseau */
    const groups: Group[] = [
      {
        id: 1,
        name: 'Groupe A',
        members: 8,
        createdAt: new Date(2024, 5, 15),
        status: 'active'
      },
      {
        id: 2,
        name: 'Groupe B',
        members: 5,
        createdAt: new Date(2024, 5, 10),
        status: 'active'
      },
      {
        id: 3,
        name: 'Groupe C',
        members: 12,
        createdAt: new Date(2024, 5, 5),
        status: 'inactive'
      },
      {
        id: 4,
        name: 'Groupe D',
        members: 3,
        createdAt: new Date(2024, 4, 28),
        status: 'active'
      },
      {
        id: 5,
        name: 'Groupe E',
        members: 7,
        createdAt: new Date(2024, 4, 20),
        status: 'active'
      }
    ];

    return of(groups).pipe(delay(1000));
  }

  /**
   * Ferme l'alerte d'erreur
   */
  closeAlert(): void {
    this.errorMessage = '';
  }
}

/* Admin-dashboard.compontent.ts */
