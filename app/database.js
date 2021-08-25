// Récupère seulement la partie Sequelize du module sequelize
const {Sequelize} = require('sequelize');

// Initialise sequelize avec la variable du fichier .env
const sequelize = new Sequelize(process.env.PG_URL,{
    define: {
        // Par défaut, createdAt et updateAt sont ajoutés à nos modèles
        // On désactive cette option pour gérer nous même ces champs
        timestamps: false
    },
});

// Exportation du module
module.exports = sequelize;