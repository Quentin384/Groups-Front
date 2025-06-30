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
├─ .github/
│   └─ workflows/
│       └─ front-ci.yml
│
├─ e2e/
│   ├─ src/
│   │   ├─ fixtures/
│   │   ├─ support/
│   │   └─ integration/
│   │       ├─ groups.spec.ts
│   │       └─ auth.spec.ts
│   ├─ cypress.config.ts
│   └─ tsconfig.json
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
│   │   │   ├─ models/                 # interfaces et types
│   │   │   │   ├─ user.model.ts
│   │   │   │   ├─ group.model.ts
│   │   │   │   ├─ auth.model.ts
│   │   │   │   └─ api-response.model.ts
│   │   │   │
│   │   │   └─ core.module.ts
│   │   │
│   │   ├─ shared/                     # composants réutilisables
│   │   │   ├─ components/
│   │   │   │   ├─ button/
│   │   │   │   │   ├─ button.component.ts
│   │   │   │   │   ├─ button.component.html
│   │   │   │   │   ├─ button.component.scss
│   │   │   │   │   └─ button.component.spec.ts
│   │   │   │   │
│   │   │   │   ├─ card/
│   │   │   │   ├─ loader/
│   │   │   │   └─ alert/
│   │   │   │
│   │   │   ├─ directives/
│   │   │   │   ├─ autofocus.directive.ts
│   │   │   │   └─ permission.directive.ts
│   │   │   │
│   │   │   ├─ pipes/
│   │   │   │   ├─ date-format.pipe.ts
│   │   │   │   └─ truncate.pipe.ts
│   │   │   │
│   │   │   ├─ utils/
│   │   │   │   ├─ constants.ts
│   │   │   │   └─ helpers.ts
│   │   │   │
│   │   │   └─ shared.module.ts
│   │   │
│   │   ├─ features/                   # modules fonctionnels
│   │   │   ├─ groups/
│   │   │   │   ├─ group-list/
│   │   │   │   │   ├─ group-list.component.ts
│   │   │   │   │   ├─ group-list.component.html
│   │   │   │   │   ├─ group-list.component.scss
│   │   │   │   │   └─ group-list.component.spec.ts
│   │   │   │   │
│   │   │   │   ├─ group-detail/
│   │   │   │   │   ├─ group-detail.component.ts
│   │   │   │   │   ├─ group-detail.component.html
│   │   │   │   │   ├─ group-detail.component.scss
│   │   │   │   │   └─ group-detail.component.spec.ts
│   │   │   │   │
│   │   │   │   ├─ group-form/
│   │   │   │   │   ├─ group-form.component.ts
│   │   │   │   │   ├─ group-form.component.html
│   │   │   │   │   ├─ group-form.component.scss
│   │   │   │   │   └─ group-form.component.spec.ts
│   │   │   │   │
│   │   │   │   ├─ components/
│   │   │   │   │   ├─ group-member-list/
│   │   │   │   │   └─ group-actions/
│   │   │   │   │
│   │   │   │   ├─ models/
│   │   │   │   │   └─ group-creation.model.ts
│   │   │   │   │
│   │   │   │   ├─ services/
│   │   │   │   │   └─ group-creation.service.ts
│   │   │   │   │
│   │   │   │   ├─ groups-routing.module.ts
│   │   │   │   └─ groups.module.ts
│   │   │   │
│   │   │   ├─ users/
│   │   │   │   ├─ user-list/
│   │   │   │   ├─ user-detail/
│   │   │   │   ├─ users-routing.module.ts
│   │   │   │   └─ users.module.ts
│   │   │   │
│   │   │   └─ profile/
│   │   │       ├─ profile-view/
│   │   │       ├─ profile-edit/
│   │   │       ├─ profile-routing.module.ts
│   │   │       └─ profile.module.ts
│   │   │
│   │   ├─ layouts/                    # composants de mise en page
│   │   │   ├─ main-layout/
│   │   │   │   ├─ main-layout.component.ts
│   │   │   │   ├─ main-layout.component.html
│   │   │   │   └─ main-layout.component.scss
│   │   │   │
│   │   │   ├─ components/
│   │   │   │   ├─ header/
│   │   │   │   ├─ sidebar/
│   │   │   │   └─ footer/
│   │   │   │
│   │   │   └─ layouts.module.ts
│   │   │
│   │   ├─ pages/                      # pages principales
│   │   │   ├─ login/
│   │   │   │   ├─ login.component.ts
│   │   │   │   ├─ login.component.html
│   │   │   │   ├─ login.component.scss
│   │   │   │   └─ login.component.spec.ts
│   │   │   │
│   │   │   ├─ register/
│   │   │   │   ├─ register.component.ts
│   │   │   │   ├─ register.component.html
│   │   │   │   ├─ register.component.scss
│   │   │   │   └─ register.component.spec.ts
│   │   │   │
│   │   │   ├─ home/
│   │   │   │   ├─ home.component.ts
│   │   │   │   ├─ home.component.html
│   │   │   │   ├─ home.component.scss
│   │   │   │   └─ home.component.spec.ts
│   │   │   │
│   │   │   ├─ dashboard/
│   │   │   │   ├─ dashboard.component.ts
│   │   │   │   ├─ dashboard.component.html
│   │   │   │   ├─ dashboard.component.scss
│   │   │   │   └─ dashboard.component.spec.ts
│   │   │   │
│   │   │   └─ not-found/
│   │   │       ├─ not-found.component.ts
│   │   │       ├─ not-found.component.html
│   │   │       └─ not-found.component.scss
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
│   ├─ environments/                   # configuration par environnement
│   │   ├─ environment.ts
│   │   ├─ environment.development.ts
│   │   └─ environment.production.ts
│   │
│   ├─ styles/                         # styles globaux
│   │   ├─ tailwind.scss
│   │   ├─ _variables.scss
│   │   ├─ _mixins.scss
│   │   └─ _themes.scss
│   │
│   ├─ index.html
│   ├─ main.ts
│   └─ styles.scss
│
├─ .editorconfig
├─ .gitignore
├─ angular.json
├─ package.json
├─ package-lock.json
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.spec.json
├─ README.md
└─ CHANGELOG.md
```

## Notes sur la Structure

Cette structure suit les bonnes pratiques Angular pour une application de création de groupes (V3) avec :

- **Architecture modulaire** : Core, Shared, Features, Layouts, Pages
- **Découpage par fonctionnalités** : Groups, Users, Profile
- **Séparation des responsabilités** : Services, Components, Models
- **Tests** : Unitaires (.spec.ts) et E2E (Cypress)
- **Styles** : Configuration Tailwind CSS et SCSS
- **CI/CD** : Workflow GitHub Actions

La structure est conçue pour faciliter la maintenance, l'évolutivité et le respect des principes SOLID.
