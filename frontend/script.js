// ===== Gestion des tâches =====

let tasks = [
    { id: 1, title: 'Dockeriser l\'application SmartTask', priority: 'high', completed: false },
    { id: 2, title: 'Créer le docker-compose.yml', priority: 'medium', completed: false },
    { id: 3, title: 'Configurer Jenkins', priority: 'medium', completed: false },
    { id: 4, title: 'Déployer sur Docker Hub', priority: 'low', completed: true },
];

let currentFilter = 'all';

// ===== Rendu des tâches =====
function renderTasks() {
    const taskList = document.getElementById('taskList');
    let filteredTasks = tasks;

    if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #a0aec0;">
                <i class="fas fa-inbox" style="font-size: 40px; margin-bottom: 12px; display: block;"></i>
                <p>Aucune tâche ${currentFilter === 'pending' ? 'en cours' : currentFilter === 'completed' ? 'terminée' : ''}</p>
            </div>
        `;
        return;
    }

    taskList.innerHTML = filteredTasks.map(task => `
        <div class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
            <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="toggleTask(${task.id})">
                <i class="fas fa-check"></i>
            </div>
            <div class="task-info">
                <span class="task-title">${task.title}</span>
                <span class="task-meta">ID: #${task.id} • ${task.completed ? '✅ Terminée' : '⏳ En cours'}</span>
            </div>
            <span class="task-priority priority-${task.priority}">
                ${task.priority === 'high' ? '🔴 Haute' : task.priority === 'medium' ? '🟡 Moyenne' : '🟢 Basse'}
            </span>
            <button class="task-delete" onclick="deleteTask(${task.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');
}

// ===== Ajouter une tâche =====
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const titleInput = document.getElementById('taskTitle');
    const prioritySelect = document.getElementById('taskPriority');
    const title = titleInput.value.trim();

    if (!title) {
        titleInput.style.borderColor = '#e53e3e';
        setTimeout(() => titleInput.style.borderColor = '#e2e8f0', 1500);
        return;
    }

    const newTask = {
        id: Date.now(),
        title: title,
        priority: prioritySelect.value,
        completed: false,
    };

    tasks.unshift(newTask);
    renderTasks();
    titleInput.value = '';
    titleInput.focus();
});

// ===== Basculer l'état d'une tâche =====
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

// ===== Supprimer une tâche =====
function deleteTask(id) {
    if (confirm('Supprimer cette tâche ?')) {
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    }
}

// ===== Filtres =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        renderTasks();
    });
});

// ===== Notifications (simulées) =====
document.querySelector('.notification').addEventListener('click', function() {
    alert('🔔 Vous avez 3 notifications en attente !');
});

// ===== Navigation (simulée) =====
document.querySelectorAll('.sidebar-nav li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-nav li').forEach(li => li.classList.remove('active'));
        this.classList.add('active');
        const label = this.querySelector('span')?.textContent || '';
        if (label) {
            document.querySelector('.header-left h1').textContent = label;
        }
    });
});

// ===== Initialisation =====
renderTasks();
