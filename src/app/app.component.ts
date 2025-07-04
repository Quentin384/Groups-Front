import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { Header } from "./shared/components/header/header.component";
import { GenerateGroupsComponent } from "./pages/generate-groups/generate-groups.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GroupGenerateur';
}

