// Directement récuperer les variables d'environnement
require("dotenv").config();

// Récupère le module express
const express = require("express");
const router = require("./app/router");

// Récupère la variable d'environnement PORT du fichier .env
// Si aucune variable est trouvée, PORT sera égale à 3000
const PORT = process.env.PORT || 3000;
// Instancie express
const app = express();

// Utilise le module router créé dans app/router.js
app.use(router);

// Le serveur démarre sur le port renseigné dans la variable PORT
app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
});