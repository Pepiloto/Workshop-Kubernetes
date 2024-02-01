const express = require('express');
const app = express();
const port = 3000; // Vous pouvez choisir le port que vous préférez

// Définir une route pour la méthode GET
app.get('/', (req, res) => {
    res.send('1');
});

app.get('/chien', (req, res) => {
    res.send('chat');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
