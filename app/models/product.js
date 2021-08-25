// Récupère le module Sequelize
const Sequelize = require('sequelize');
const sequelize = require('../database');

// Sequelize.Model ajoute à la classe les fonctions nécessaire pour intéragir avec la base de données
class Product extends Sequelize.Model{};

// On initialise la classe Product
Product.init({
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    available: Sequelize.BOOLEAN,
    img_url: Sequelize.TEXT
}, {
    sequelize,
    tableName: "product"
});

// Exporte la classe Product
module.exports = Product;