import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateGroupsComponent } from './generate-groups.component';

describe('GenerateGroupsComponent', () => {
  let component: GenerateGroupsComponent;
  let fixture: ComponentFixture<GenerateGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
