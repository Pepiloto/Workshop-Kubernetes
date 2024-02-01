const express = require('express');
const app = express();
const port = 3000;

// Définir une route pour la méthode GET
app.get('/', (req, res) => {
    res.send('1');
});

app.get('/chien', (req, res) => {
    res.send('chat');
});

// Intercepter le signal SIGTERM
process.on('SIGTERM', () => {
    console.info('Received SIGTERM signal. Cleaning up before exit.');
    // Ajoutez ici les opérations de nettoyage ou d'arrêt de l'application si nécessaire
    process.exit(0); // Terminate the process gracefully
});

// Démarrer le serveur
const server = app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

// Intercepter le signal SIGINT (équivalent à Ctrl+C dans le terminal)
process.on('SIGINT', () => {
    console.info('Received SIGINT signal. Cleaning up before exit.');
    // Ajoutez ici les opérations de nettoyage ou d'arrêt de l'application si nécessaire
    server.close(() => {
        console.log('Server closed. Exiting.');
        process.exit(0);
    });
});
