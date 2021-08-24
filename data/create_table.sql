/* début de la transaction*/
BEGIN;

/* suppression des tables existantes */
DROP TABLE IF EXISTS "product";

/* creation de la table product */
CREATE TABLE "product" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "img_url" TEXT NOT NULL
);

/* seeding */
INSERT INTO "product" ("name", "description", "price", "available", "img_url")
VALUES ('adidas Ultra 4D University Pack', 'La plupart des marques utilisent de plus en plus les technologies de l’impression 3D pour le développement de leurs modèles, mais elles restent souvent cantonnées à la production de prototypes. Avec l’avènement du 4D d’adidas, la marque bavaroise a décidé d’emmener ce process sur le produit final en proposant une semelle entièrement imprimée en 3D.', 219, true, 'https://www.sneakers.fr/wp-content/uploads/2021/07/adidas-performance-ultra-4d-miami-hurricanes-1160x902.jpeg'),
('Air Jordan 3 Racer Blue', 'L’Air Jordan 3 Racer Blue possède une construction de qualité. Du cuir grainé blanc habille la tige et contraste avec l’elephant print, marque de fabrique du modèle. Sur cette itération, il est plus foncé, s’approchant de l’anthracite. Les passages de lacets et la partie inférieure de la languette sont renforcés par des empiècements en cuir perforé gris clair.', 190, false, 'https://www.sneakers.fr/wp-content/uploads/2021/07/Air-Jordan-3-Racer-Blue-1-1160x1160.jpeg'),
('Midnight Studios x Converse Pro Leather', 'La sneaker est présentée dans une tige entièrement en cuir suédé gris clair, tout comme la release commercialisée il y a deux ans. Le design déconstruit est caractérisé par plusieurs éléments sur l’empeigne. On retrouve ainsi au talon des informations concernant le cuir, habituellement présentées à l’intérieur de la chaussure. L’inscription « Pro Leather » a volontairement été inversée.', 110, true, 'https://www.sneakers.fr/wp-content/uploads/2020/02/midnight-studios-converse-pro-leather-inside-out-2.jpg'),
('Collection WTAPS x Vans Vault FW 2018', 'La collection capsule 2018 sera constituée de pièces textiles, d’accessoires ainsi que de sept paires de sneakers. Des silhouettes classiques Vans sont concernées par cette nouvelle sortie et seront ainsi une nouvelle fois revisitées. Au programme, deux Sk8-Hi seront commercialisées ainsi que deux Era, deux Old Skool et une Half Cab. Chaque paire bénéficie d’un look qui lui est propre pour cette release.', 120, true, 'https://www.sneakers.fr/wp-content/uploads/2018/07/wtaps-x-vans-2018-800x561.jpg');

/* fin de la transaction */
COMMIT;