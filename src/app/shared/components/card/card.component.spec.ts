import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent] // Standalone = on l'importe ici
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Lance le cycle de vie Angular
  });

  it('should create the card component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title if provided', () => {
    component.title = 'Test Titre';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')?.textContent).toContain('Test Titre');
  });

  it('should not display header if no title or subtitle', () => {
    component.title = '';
    component.subtitle = '';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-header')).toBeNull();
  });
});
