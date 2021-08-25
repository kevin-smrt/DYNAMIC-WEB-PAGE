// Récupère seulement la partie Router de express
const { Router } = require("express");

// Instancie le router
const router = Router();

// La route par défaut
router.get('/', (req, res) => {
    res.send("Hello world!");
});

// Exportation du router pour pouvoir l'utiliser dans index.js
module.exports = router;