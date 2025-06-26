import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/components/card/card.component';

export const appConfig = {
  providers: [
    importProvidersFrom(CardComponent),
    provideRouter([]) 
  ],
  standalone: true,
  component: AppComponent
};
