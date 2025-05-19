# AutoCommerce

## Description

AutoCommerce est une plateforme de vente de voitures en ligne comportant deux interfaces :

- **Côté Client** : Les utilisateurs peuvent parcourir les véhicules, filtrer par marque, modèle, prix et caractéristiques, consulter les détails d'un véhicule, ajouter des produits à leur panier, et finaliser leur achat.
- **Côté Admin** : Les administrateurs gèrent le catalogue de véhicules, valident ou rejettent les annonces, suivent les commandes des clients, et administrent les utilisateurs.

## Fonctionnalités

### Côté Client

- Inscription et connexion des utilisateurs
- Navigation et recherche de véhicules
- Filtres avancés : marque, modèle, prix, année
- Page de détails d'un véhicule : galerie de photos, spécifications, prix
- Gestion du panier et du processus de paiement
- Historique des commandes et suivi de livraison
- Système de notation et d’avis
- Réinitialisation de mot de passe

### Côté Admin

- Authentification sécurisée
- Tableau de bord récapitulatif : ventes totales, utilisateurs actifs
- Gestion des véhicules (CRUD)
- Validation et modération des annonces
- Gestion des commandes : visualisation et mise à jour du statut
- Gestion des utilisateurs : activation, suppression, modification de rôle
- Rapports et statistiques : ventes par période, véhicules les plus vendus
- Utilisation de **React Admin** pour la construction de l’interface d’administration

## Stack Technique

- **Frontend Client** : React, TypeScript, Tailwind CSS
- **Frontend Admin** : React Admin, TypeScript, SCSS
- **Backend** : .NET Core Web API, C#
- **Base de données** : SQL Server
- **Authentification** : JWT pour l’API, OAuth 2.0 (Google, Facebook)
- **Stockage des images** : Azure Blob Storage
- **CI/CD** : GitHub Actions

## Installation

1. **Cloner le dépôt** :
   ```bash
   https://github.com/autocommerce/car-ui
   cd autocommerce
