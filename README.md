# React + TypeScript + Vite

## Sujet: 
https://apollo.lereacteur.io/course/679a3b8a8373d20015573f18/67e17bb3d1f7d70015d35832


## mémoisation

```React.memo()``` Empêche le re-render d’un composant si ses props n’ont pas changé

```useMemo()``` Ne recalcule une valeur que si ses dépendances changent

```useCallback()``` Ne recrée pas une fonction si ses dépendances ne changent pas

## React Hook Form 
gestion des formulaires

## Redux toolkit :
Pour centraliser les états côté client, comme :

- le thème (light / dark)
- le filtre de tâches (all, done, not_done)

```Redux Toolkit``` = gère et centralise l'état local des composants concernés coté client

##  Tanstack Query :  
Utilisé pour gérer les données côté serveur (fetch et cache)

- ```GET /todos``` → récupère toutes les tâches

mutations : 
- ```POST /todos``` → crée une nouvelle tâche (title)
- ```PUT /todos/:id``` → inverse l’état fait / non fait
- ```DELETE /todos/:id``` → supprime une tâche

TanStack Query = récupère et met à jour les données coté serveur