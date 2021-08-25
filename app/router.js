// Récupère seulement la partie Router de express
const { Router } = require("express");
// Importation du controller principal
const mainController = require('./controllers/mainController');

// Instancie le router
const router = Router();

// La route par défaut
router.get('/', mainController.homePage);

// Exportation du router pour pouvoir l'utiliser dans index.js
module.exports = router;