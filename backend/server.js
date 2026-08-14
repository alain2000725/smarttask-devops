const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Base de données simulée
let tasks = [
    { id: 1, title: 'Dockeriser l\'application SmartTask', priority: 'high', completed: false },
    { id: 2, title: 'Créer le docker-compose.yml', priority: 'medium', completed: false },
    { id: 3, title: 'Configurer Jenkins', priority: 'medium', completed: false },
    { id: 4, title: 'Déployer sur Docker Hub', priority: 'low', completed: true },
];

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', service: 'SmartTask API', timestamp: new Date() });
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const { title, priority } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Le titre est requis' });
    }
    const newTask = {
        id: Date.now(),
        title,
        priority: priority || 'medium',
        completed: false,
    };
    tasks.unshift(newTask);
    res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    const { title, priority, completed } = req.body;
    if (title !== undefined) task.title = title;
    if (priority !== undefined) task.priority = priority;
    if (completed !== undefined) task.completed = completed;
    res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Tâche non trouvée' });
    }
    tasks.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`🚀 SmartTask API démarrée sur le port ${PORT}`);
});
