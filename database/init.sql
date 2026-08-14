-- Script d'initialisation de la base de données SmartTask
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    priority VARCHAR(50) DEFAULT 'medium',
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion de données initiales
INSERT INTO tasks (title, priority, completed) VALUES
    ('Dockeriser l''application SmartTask', 'high', false),
    ('Créer le docker-compose.yml', 'medium', false),
    ('Configurer Jenkins', 'medium', false),
    ('Déployer sur Docker Hub', 'low', true);
