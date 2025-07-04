# Structure du Projet Angular pour la Création de Groupes (V3)

## Arborescence Complète des Dossiers et Fichiers

```
Groups-Front/
├─ docs/
│   ├─ wireframes/
│   │   ├─ maquette_1.PNG
│   │   └─ maquette_2.PNG
│   ├─ specifications/
│   │   └─ Briefs_projet_fil_rouge-Création-de-groupes.pdf
│   └─ README.md
│
├─ node_modules/                  # Dependencies directory
│
├─ public/                        # Public assets directory
│   └─ favicon.ico
│
├─ src/
│   ├─ app/
│   │   ├─ core/                       # plumbing applicatif
│   │   │   ├─ guards/                 # protection des routes
│   │   │   │   ├─ auth.guard.ts
│   │   │   │   └─ role.guard.ts
│   │   │   │
│   │   │   ├─ interceptors/           # interception des requêtes HTTP
│   │   │   │   ├─ token.interceptor.ts
│   │   │   │   └─ error.interceptor.ts
│   │   │   │
│   │   │   ├─ services/               # services partagés
│   │   │   │   ├─ auth.service.ts
│   │   │   │   ├─ group.service.ts
│   │   │   │   ├─ user.service.ts
│   │   │   │   └─ notification.service.ts
│   │   │   │
│   │   │   └─ models/                 # interfaces et types
│   │   │       ├─ user.model.ts
│   │   │       ├─ group.model.ts
│   │   │       ├─ auth.model.ts
│   │   │       └─ api-response.model.ts
│   │   │
│   │   ├─ shared/                     # composants réutilisables
│   │   │   └─ components/
│   │   │       ├─ alert/
│   │   │       ├─ back.button/
│   │   │       ├─ button/
│   │   │       │   ├─ button.component.ts
│   │   │       │   ├─ button.component.html
│   │   │       │   ├─ button.component.scss
│   │   │       │   └─ button.component.spec.ts
│   │   │       │
│   │   │       ├─ card/
│   │   │       ├─ checkbox/
│   │   │       ├─ footer/
│   │   │       ├─ header/
│   │   │       ├─ input/
│   │   │       ├─ loader/
│   │   │       └─ select-input/
│   │   │
│   │   ├─ pages/                      # pages principales
│   │   │   ├─ admin-dashboard/
│   │   │   │   ├─ admin-dashboard.component.ts
│   │   │   │   ├─ admin-dashboard.component.html
│   │   │   │   ├─ admin-dashboard.component.scss
│   │   │   │   └─ admin-dashboard.component.spec.ts
│   │   │   │
│   │   │   ├─ error/
│   │   │   │
│   │   │   ├─ generate-groups/
│   │   │   │
│   │   │   ├─ groupes/
│   │   │   │   ├─ groupes.component.ts
│   │   │   │   ├─ groupes.component.html
│   │   │   │   └─ groupes.component.scss
│   │   │   │
│   │   │   ├─ home/
│   │   │   │
│   │   │   ├─ list/
│   │   │   │
│   │   │   ├─ listDetails/
│   │   │   │
│   │   │   ├─ login/
│   │   │   │   ├─ login.component.ts
│   │   │   │   ├─ login.component.html
│   │   │   │   ├─ login.component.scss
│   │   │   │   └─ login.component.spec.ts
│   │   │   │
│   │   │   ├─ members/
│   │   │   │
│   │   │   ├─ register/
│   │   │   │   ├─ register.component.ts
│   │   │   │   ├─ register.component.html
│   │   │   │   ├─ register.component.scss
│   │   │   │   └─ register.component.spec.ts
│   │   │   │
│   │   │   └─ verify-email/
│   │   │
│   │   ├─ styles/                     # styles globaux
│   │   │   └─ _variables.scss
│   │   │
│   │   ├─ app.component.ts
│   │   ├─ app.component.html
│   │   ├─ app.component.scss
│   │   ├─ app.component.spec.ts
│   │   ├─ app.config.ts
│   │   └─ app.routes.ts
│   │
│   ├─ assets/                         # ressources statiques
│   │   ├─ images/
│   │   ├─ icons/
│   │   └─ fonts/
│   │
│   ├─ index.html
│   ├─ main.ts
│   └─ styles.scss
│
├─ .editorconfig
├─ .gitignore
├─ angular.json
├─ karma.conf.js
├─ package.json
├─ package-lock.json
├─ run-tests.bat
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.spec.json
├─ README.md
└─ Groups-Front-Structure.md
```

## Notes sur la Structure

Cette structure suit une architecture simplifiée pour l'application de création de groupes (V3) avec :

- **Architecture simplifiée** : Core, Shared, Pages
- **Organisation par pages** : Toutes les pages sont directement sous le dossier pages
- **Composants partagés** : Tous les composants réutilisables sont dans shared/components
- **Séparation des responsabilités** : Services, Components, Models
- **Tests** : Unitaires (.spec.ts)

La structure a été simplifiée pour faciliter la maintenance et la compréhension du code, tout en conservant une bonne organisation des fichiers.
