# SmartTask - Gestion de tâches

Application web de gestion de tâches conteneurisée avec Docker.

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](https://www.jenkins.io/doc/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/docs/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/docs/)
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

### Version v1 (locale)
docker build -t yvesmayombo/smarttask-frontend:v1 ./frontend
docker build -t yvesmayombo/smarttask-backend:v1 ./backend
docker build -t yvesmayombo/smarttask-db:v1 ./database

### Version v2 (CI/CD avec Jenkins)
docker build -t yvesmayombo/smarttask-frontend:v2 ./frontend
docker build -t yvesmayombo/smarttask-backend:v2 ./backend
docker build -t yvesmayombo/smarttask-db:v2 ./database

## Déploiement avec Docker Compose

docker compose up -d

## Arrêt

docker compose down

## Accès

- Frontend : http://192.168.159.219:8080
- Backend : http://192.168.159.219:5004/api/health
- Jenkins : http://192.168.159.219:8090

## Commandes utiles

docker compose ps
docker compose logs
docker compose restart

## Branches

- main : Branche principale
- Dev : Branche de développement
- Prod : Branche de production

## CI/CD avec Jenkins

Un pipeline Multibranch est configuré pour automatiser :
- La construction des images Docker
- Le push vers Docker Hub

## Lien du dépôt

https://github.com/alain2000725/smarttask-devops

## Auteur

**Alain MOUSSAVOU**
- Email : moussavoualain03@gmail.com
- GitHub : alain2000725

## Technologies

Docker - Jenkins - Node.js - PostgreSQL - Nginx

© 2026 SmartTech - Tous droits réservés.
