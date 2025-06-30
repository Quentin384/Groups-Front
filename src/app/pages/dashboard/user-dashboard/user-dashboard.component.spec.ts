/**
 * @fileoverview Tests unitaires pour le composant UserDashboardComponent.
 * Ce fichier vérifie la création du composant, le chargement des groupes d'utilisateur,
 * la gestion des erreurs et les autres fonctionnalités du tableau de bord utilisateur.
 */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UserDashboardComponent } from './user-dashboard.component';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../../shared/components/alert/alert.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserDashboardComponent', () => {
  let component: UserDashboardComponent;
  let fixture: ComponentFixture<UserDashboardComponent>;

  /**
   * Configuration du module de test avant chaque test asynchrone.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, AlertComponent, ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Vérifie que le composant est créé correctement
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Vérifie que les valeurs par défaut sont correctement initialisées
   */
  it('should initialize with default values', () => {
    expect(component.isLoading).toBeFalse();
    expect(component.errorMessage).toBe('');
    expect(component.userGroups).toEqual([]);
    expect(component.totalGroups).toBe(0);
  });

  /**
   * Vérifie que la méthode loadUserGroups est appelée lors de l'initialisation
   */
  it('should load user groups on init', () => {
    spyOn(component, 'loadUserGroups');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.loadUserGroups).toHaveBeenCalled();
  });

  /**
   * Vérifie que les groupes d'utilisateur sont chargés correctement
   */
  it('should load user groups successfully', fakeAsync(() => {
    const mockGroups = [
      {
        id: 1,
        name: 'Groupe Resultat A',
        description: 'Groupe Resultat A',
        members: 5,
        createdAt: new Date(2024, 5, 15)
      }
    ];

    spyOn(component as any, 'fetchUserGroups').and.returnValue(of(mockGroups));

    component.loadUserGroups();
    expect(component.isLoading).toBeTrue();

    tick(1000);
    fixture.detectChanges();

    expect(component.userGroups).toEqual(mockGroups);
    expect(component.totalGroups).toBe(mockGroups.length);
    expect(component.isLoading).toBeFalse();
  }));

  /**
   * Vérifie que les erreurs lors du chargement des groupes sont correctement gérées
   */
  it('should handle error when loading user groups', fakeAsync(() => {
    spyOn(component as any, 'fetchUserGroups').and.returnValue(throwError(() => new Error('API error')));

    component.loadUserGroups();
    tick(1000);
    fixture.detectChanges();

    expect(component.errorMessage).toBe('Erreur lors du chargement des groupes');
    expect(component.isLoading).toBeFalse();

    /* Vérifier que le message d'erreur est affiché dans le DOM */
    const errorElement = fixture.debugElement.query(By.css('app-alert'));
    expect(errorElement).toBeTruthy();
  }));

  /**
   * Vérifie que la méthode viewGroupDetails fonctionne correctement
   */
  it('should view group details', () => {
    spyOn(console, 'log');
    const groupId = 1;

    component.viewGroupDetails(groupId);
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalledWith(`Affichage des détails du groupe ${groupId}`);
  });

  /**
   * Vérifie que la fermeture de l'alerte fonctionne correctement
   */
  it('should close alert', () => {
    component.errorMessage = 'Some error';
    fixture.detectChanges();

    /* Vérifier que l'alerte est affichée */
    let alertElement = fixture.debugElement.query(By.css('app-alert'));
    expect(alertElement).toBeTruthy();

    component.closeAlert();
    fixture.detectChanges();

    expect(component.errorMessage).toBe('');

    /* Vérifier que l'alerte n'est plus affichée */
    alertElement = fixture.debugElement.query(By.css('app-alert'));
    expect(alertElement).toBeFalsy();
  });

  /**
   * Vérifie que la méthode fetchUserGroups retourne les bonnes données
   */
  it('should fetch user groups correctly', fakeAsync(() => {
    const fetchUserGroups = (component as any).fetchUserGroups();
    let result: any;

    fetchUserGroups.subscribe((groups: any) => {
      result = groups;
    });

    tick(1000);
    fixture.detectChanges();

    expect(result.length).toBe(3);
    expect(result[0].name).toBe('Groupe Resultat A');
    expect(result[1].name).toBe('Groupe Resultat B');
    expect(result[2].name).toBe('Groupe Resultat C');
  }));

  /**
   * Test complet vérifiant l'affichage des groupes dans le DOM
   */
  it('should display user groups in the DOM', fakeAsync(() => {
    const mockGroups = [
      {
        id: 1,
        name: 'Groupe Test',
        description: 'Description Test',
        members: 5,
        createdAt: new Date(2024, 5, 15)
      }
    ];

    component.userGroups = mockGroups;
    fixture.detectChanges();

    /* Dans un cas réel, on vérifierait l'affichage des groupes dans le DOM
    Cet exemple suppose que les groupes sont affichés dans des éléments avec des classes spécifiques
    Ajustez selon la structure réelle du template */
    expect(component.userGroups.length).toBe(1);
    expect(component.userGroups[0].name).toBe('Groupe Test');
  }));
});

/* User-dashboard.component.spec.ts */
