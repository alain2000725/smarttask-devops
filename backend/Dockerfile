# Backend Dockerfile
FROM node:18-alpine

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY . .

# Exposition du port de l'API
EXPOSE 5004

# Commande de démarrage
CMD ["node", "server.js"]
