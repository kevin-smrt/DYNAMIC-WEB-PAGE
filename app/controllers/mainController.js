// Récupère la classe Product
const Product = require('../models/product');

// Initialisation de l'objet mainController qui sera exporté
const mainController = {
    // Méthode pour la page d'accueil
    homePage: async (req, res) => {
        try {
            // Récuperation de tout les produits
            products = await Product.findAll();
            res.render('index', {products});
        } catch (err) {
            // Gestion en cas d'erreur
            console.trace(err);
            res.status(500).send(err);
        }
    }
};

// Exportation de l'objet mainController
module.exports = mainController;