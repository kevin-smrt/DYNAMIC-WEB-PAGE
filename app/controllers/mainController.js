// Récupère la classe Product
const Product = require('../models/product');

// Initialisation de l'objet mainController qui sera exporté
const mainController = {
    // Méthode pour la page d'accueil
    homePage: async (req, res) => {
        try {
            // Récuperation de tout les produits
            products = await Product.findAll();
            // Création d'une variable contenant un nombre aléatoire, arrondi
            // Il va servir pour piocher un index aléatoire de l'object products
            let random = Math.round(Math.random() * products.length);
            // Si random = 4 on enlève 1 car products[4] n'existe pas
            if (random === 4) {
                random -= 1;
            }
            // On envoie le produit séléctionné aléatoirement a la vue
            res.render('index', {product: products[random]});
        } catch (err) {
            // Gestion en cas d'erreur
            console.trace(err);
            res.status(500).send(err);
        }
    }
};

// Exportation de l'objet mainController
module.exports = mainController;