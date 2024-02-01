# Utilisez une image Node.js légère comme base
FROM node:14-alpine

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez le fichier package.json et package-lock.json (le cas échéant)
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel l'application s'exécutera
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
