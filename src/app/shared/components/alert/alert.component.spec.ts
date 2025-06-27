/**
 * @fileoverview Tests unitaires pour le composant AlertComponent (standalone).
 * Ce fichier vérifie la création, l'affichage du message,
 * l'application des classes CSS, l'affichage du bouton de fermeture
 * et l'émission de l'événement closed.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  /**
   * Configuration du module de test avant chaque test asynchrone.
   * Pour un composant standalone utilisant ngClass, on importe CommonModule
   * puis AlertComponent dans `imports`.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,    /* Fournit les directives comme ngClass */
        AlertComponent  /* Composant standalone à tester */
      ]
    }).compileComponents();
  });

  /**
   * Initialisation du composant et détection des changements avant chaque test.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Vérifie que le composant est créé correctement.
   */
  it('devrait créer le composant', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Vérifie que le message passé en input est bien affiché dans le template.
   */
  it('devrait afficher le message', () => {
    const testMessage = 'Ceci est un message de test';
    component.message = testMessage;
    fixture.detectChanges();

    const messageElement = fixture.debugElement.query(By.css('.alert-message'));
    expect(messageElement.nativeElement.textContent).toContain(testMessage);
  });

  /**
   * Vérifie que la classe CSS correspondant au type d'alerte est appliquée.
   * Types supportés : success, error, info, warning.
   */
  it('devrait appliquer la classe CSS correspondant au type', () => {
    const types: ('success' | 'error' | 'info' | 'warning')[] = ['success', 'error', 'info', 'warning'];

    types.forEach(type => {
      component.type = type;
      fixture.detectChanges();

      const alertElement = fixture.debugElement.query(By.css('.alert'));
      expect(alertElement.nativeElement.classList).toContain(`alert-${type}`);
    });
  });

  /**
   * Vérifie que le bouton de fermeture est affiché si dismissible est true.
   */
  it('devrait afficher le bouton de fermeture quand dismissible est true', () => {
    component.dismissible = true;
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(By.css('.alert-close'));
    expect(closeButton).toBeTruthy();
  });

  /**
   * Vérifie que le bouton de fermeture n'est pas affiché si dismissible est false.
   */
  it('ne devrait pas afficher le bouton de fermeture quand dismissible est false', () => {
    component.dismissible = false;
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(By.css('.alert-close'));
    expect(closeButton).toBeNull();
  });

  /**
   * Vérifie que l'événement closed est émis lorsque le bouton de fermeture est cliqué.
   */
  it('devrait émettre l\'événement closed quand le bouton de fermeture est cliqué', () => {
    component.dismissible = true;
    fixture.detectChanges();

    spyOn(component.closed, 'emit');

    const closeButton = fixture.debugElement.query(By.css('.alert-close'));
    closeButton.triggerEventHandler('click', null);

    expect(component.closed.emit).toHaveBeenCalled();
  });
});

/* Alert.component.spec.ts */
