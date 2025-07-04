# Choix de Conception pour Groups-Front (V3)

## Introduction

Ce document explique les choix de conception qui ont été faits pour le projet Groups-Front, une application Angular (v3) pour la création et la gestion de groupes d'utilisateurs. L'application permet notamment la génération automatique de groupes basée sur des critères spécifiques.

## Architecture Globale

### Structure Simplifiée

L'application suit une architecture simplifiée qui se compose de trois parties principales :

1. **Core** : Contient les éléments fondamentaux de l'application (services, modèles, guards, intercepteurs)
2. **Shared** : Contient les composants réutilisables (boutons, alertes, inputs, etc.)
3. **Pages** : Contient les différentes pages de l'application (composants autonomes)

Cette structure a été choisie pour faciliter la maintenance et la compréhension du code, tout en conservant une bonne organisation des fichiers. Contrairement à une architecture plus complexe avec des modules fonctionnels (feature modules), nous avons opté pour cette approche simplifiée car :

- Elle réduit la complexité du code et la courbe d'apprentissage pour les nouveaux développeurs
- Elle évite la fragmentation excessive du code qui peut rendre la navigation difficile
- Elle permet une meilleure visibilité des composants disponibles

Dans le code, cette structure se reflète par l'organisation des dossiers suivante :

```
app/
├── core/                       // Plumbing applicatif
│   ├── guards/                 // Protection des routes
│   ├── interceptors/           // Interception des requêtes HTTP
│   ├── services/               // Services partagés
│   └── models/                 // Interfaces et types
│
├── shared/                     // Composants réutilisables
│   └── components/
│       ├── alert/
│       ├── button/
│       ├── header/
│       └── ...
│
├── pages/                      // Pages principales
    ├── admin-dashboard/
    ├── generate-groups/
    ├── groupes/
    └── ...
```

### Organisation par Pages

Toutes les pages sont directement placées sous le dossier `pages`, ce qui permet une navigation facile dans le code et une meilleure compréhension de la structure de l'application. Chaque page est un composant Angular autonome avec ses propres fichiers HTML, CSS et TypeScript.

Nous avons choisi cette approche plutôt qu'une organisation par fonctionnalité (feature modules) pour plusieurs raisons :

- **Simplicité de navigation** : Il est plus facile de trouver une page spécifique quand toutes les pages sont au même niveau
- **Cohérence avec les routes** : La structure des dossiers reflète la structure des URL de l'application
- **Réduction de la complexité** : Évite les dépendances circulaires qui peuvent survenir avec des modules fonctionnels imbriqués

### Composants Partagés

Tous les composants réutilisables sont regroupés dans le dossier `shared/components`, ce qui facilite leur réutilisation à travers l'application et évite la duplication de code. Ces composants incluent des éléments d'interface utilisateur comme les boutons, les alertes, les en-têtes, etc.

Nous avons opté pour une approche "atomic design" simplifiée, où :

- Les composants sont conçus pour être indépendants et réutilisables
- Chaque composant a une responsabilité unique et bien définie
- Les composants sont importés directement dans les composants de page qui en ont besoin

Cette approche diffère d'une bibliothèque de composants complète (comme Material Design) car :

- Elle est plus légère et adaptée aux besoins spécifiques du projet
- Elle permet une personnalisation plus facile
- Elle évite d'inclure des composants inutilisés qui alourdiraient l'application

## Fonctionnalités Principales

### Authentification

L'authentification est gérée par le service `AuthService` qui communique avec un backend API pour l'inscription, la connexion et la déconnexion des utilisateurs. Le service utilise le `HttpClient` d'Angular pour les requêtes API et inclut une gestion d'erreurs robuste.

Nous avons choisi cette approche plutôt que d'utiliser des bibliothèques d'authentification tierces (comme Auth0 ou Firebase Auth) pour plusieurs raisons :

- **Contrôle total** : Nous avons un contrôle complet sur le processus d'authentification
- **Personnalisation** : Nous pouvons adapter l'authentification aux besoins spécifiques du projet
- **Indépendance** : Pas de dépendance à un service tiers qui pourrait changer ses conditions ou sa tarification

L'application inclut également un `RegisterGuard` qui empêche les utilisateurs déjà connectés d'accéder à la page d'inscription, améliorant ainsi l'expérience utilisateur.

### Gestion des Groupes

La gestion des groupes est au cœur de l'application. Les groupes sont représentés par l'interface `Group` qui définit leur structure avec des propriétés comme l'identifiant, le nom, la description, le niveau, le nombre de membres, les sujets, etc.

Nous avons choisi d'utiliser des interfaces TypeScript plutôt que des classes pour représenter les données car :

- **Légèreté** : Les interfaces n'existent qu'à la compilation et ne génèrent pas de code JavaScript
- **Simplicité** : Pas besoin d'instancier des objets avec `new`
- **Compatibilité avec les API** : Les interfaces correspondent directement aux réponses JSON des API

Les membres des groupes sont représentés par l'interface `GroupMember` qui inclut des informations comme l'identifiant, le nom, la photo, et des attributs optionnels comme le niveau de langue, le niveau technique, si le membre est un ancien étudiant DWWM, son profil et son âge.

### Génération Automatique de Groupes

La génération automatique de groupes est une fonctionnalité clé de l'application, implémentée dans le composant `GenerateGroupsComponent`. Ce composant permet aux utilisateurs de spécifier le nombre de groupes à générer et des critères comme le mélange d'anciens étudiants DWWM et le mélange des âges.

Nous avons choisi d'implémenter cette fonctionnalité côté client plutôt que côté serveur pour plusieurs raisons :

- **Réactivité** : L'utilisateur obtient un retour immédiat sans attendre une réponse du serveur
- **Réduction de la charge serveur** : Le calcul est effectué sur le navigateur de l'utilisateur
- **Flexibilité** : Les critères peuvent être modifiés facilement sans mise à jour du backend

Cette fonctionnalité répond directement aux exigences du brief qui demandait une solution pour créer des groupes de manière automatisée selon différents critères.

## Choix Techniques

### Angular comme Framework Frontend

Angular a été choisi comme framework frontend pour plusieurs raisons :

1. **Stack d'apprentissage** : Nous apprenons Angular en formation.
2. **Architecture Robuste** : Angular fournit une architecture complète pour le développement d'applications web complexes.
3. **Typage Fort** : TypeScript, utilisé par Angular, offre un typage fort qui améliore la qualité du code et facilite la maintenance.
4. **Modularité** : Angular encourage une structure modulaire qui facilite l'organisation du code et la réutilisation des composants.
5. **Outils de Développement** : Angular CLI simplifie le développement, les tests et le déploiement.

### Utilisation de Composants Autonomes (Standalone)

L'application utilise des composants autonomes (standalone) d'Angular, une fonctionnalité introduite dans les versions récentes d'Angular. Ces composants n'ont pas besoin d'être déclarés dans un module, ce qui simplifie la structure du code et améliore les performances.

Nous avons choisi cette approche plutôt que l'approche traditionnelle basée sur les modules NgModule pour plusieurs raisons :

- **Simplicité** : Moins de code boilerplate à écrire
- **Meilleure encapsulation** : Chaque composant déclare explicitement ses dépendances
- **Chargement paresseux amélioré** : Facilite le chargement à la demande des composants
- **Préparation pour l'avenir** : Angular évolue vers une approche basée sur les composants autonomes

### Mocks pour le Développement

L'application utilise des données mock pour le développement et les tests, comme on peut le voir dans le service `groupe.service.ts` et le composant `groupes.component.ts`. Cette approche permet de développer et tester l'interface utilisateur sans dépendre d'un backend fonctionnel.

Nous avons choisi cette approche plutôt que d'attendre que le backend soit complet pour plusieurs raisons :

- **Développement parallèle** : Les équipes frontend et backend peuvent travailler en parallèle
- **Tests plus faciles** : Les données mock permettent de tester facilement différents scénarios
- **Démonstrations précoces** : Possibilité de montrer l'application aux parties prenantes avant que le backend ne soit prêt

## Conclusion

Le projet Groups-Front (V3) a été conçu avec une architecture simplifiée mais efficace, qui facilite la maintenance et l'évolution de l'application. Les choix de conception ont été guidés par les exigences du brief, qui demandait une application pour la création et la gestion de groupes d'utilisateurs, avec des fonctionnalités de génération automatique basée sur des critères spécifiques.

L'utilisation d'Angular comme framework frontend, combinée à une structure de projet claire et à des composants réutilisables, a permis de créer une application robuste et évolutive qui répond aux besoins des utilisateurs. Les choix techniques comme l'utilisation de composants autonomes, de données mock pour le développement et d'une gestion d'erreurs robuste ont contribué à la qualité et à la maintenabilité du code.

Ces choix de conception représentent un équilibre entre simplicité, performance et maintenabilité, permettant à l'application de s'adapter facilement aux évolutions futures des besoins des utilisateurs.
