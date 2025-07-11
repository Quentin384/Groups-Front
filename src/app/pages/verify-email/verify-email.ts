import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-verify-email",
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: "./verify-email.html",
    styleUrls: ["./verify-email.scss"]
})
export class VerifyEmailComponent {
    onVerify(): void {
        //TODO: Implémenter la logique de vérification de l'email
        alert("Vérification de l'email en cours...");
    }
}
