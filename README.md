# SmartTask - Gestion de tâches

Application web de gestion de tâches conteneurisée avec Docker.

## Services

| Service | Technologie | Port |
|---------|-------------|------|
| Frontend | Nginx | 8080 |
| Backend | Node.js | 5004 |
| Base de données | PostgreSQL | 5432 |

## Structure du projet

smarttask-devops/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── database/
│   ├── init.sql
│   └── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
└── README.md

## Prérequis

- Docker
- Docker Compose
- Git

## Construction des images

docker build -t yvesmayombo/smarttask-frontend:v1 ./frontend
docker build -t yvesmayombo/smarttask-backend:v1 ./backend
docker build -t yvesmayombo/smarttask-db:v1 ./database

## Déploiement

docker compose up -d

## Arrêt

docker compose down

## Accès

Frontend : http://192.168.159.219:8080
Backend : http://192.168.159.219:5004/api/health

## Commandes utiles

docker compose ps
docker compose logs
docker compose restart

## Branches

- main : Branche principale
- Dev : Branche de développement
- Prod : Branche de production

## Auteur

Alain MOUSSAVOU
Email : moussavoualain03@gmail.com
GitHub : alain2000725

## Technologies

Docker - Jenkins - Node.js - PostgreSQL - Nginx

© 2026 SmartTech - Tous droits réservés.
