# Database Dockerfile (PostgreSQL)
FROM postgres:15-alpine

# Définition des variables d'environnement
ENV POSTGRES_USER=smartuser
ENV POSTGRES_PASSWORD=smartpass
ENV POSTGRES_DB=smarttask

# Copie des scripts d'initialisation
COPY init.sql /docker-entrypoint-initdb.d/

# Exposition du port PostgreSQL
EXPOSE 5432
