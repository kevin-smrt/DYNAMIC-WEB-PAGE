// Récupère la classe Product
const Product = require('../models/product');

// Initialisation de l'objet mainController qui sera exporté
const mainController = {
    homePage: async (req, res) => {
        try {
            
        } catch (err) {
            console.trace(err);
            res.status(500).send(err);
        }
    }
};

// Exportation de l'objet mainController
module.exports = mainController;