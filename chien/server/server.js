const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());  

app.use(bodyParser.json());


// Définir une rapp.use(cors());  oute pour la méthode GET
app.post('/chien', (req, res) => {
    const { breed } = req.body;
    // Traitement de la requête POST, par exemple, renvoyer un message avec la race du chien
    res.json({ message: `${breed === 'chien' ? 'chat' : 'chien'}` });
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
