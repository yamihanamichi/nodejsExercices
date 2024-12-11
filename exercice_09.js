/*
installez le plugin EJS language support

 UTILISATION DES TEMPLATES - MINI SITE

 Exercice
 utilisez ejs pour transformer vos trois documents HTML de la partie            2-Fichiers-statiques en template.
 Utilisez une convention de nommage différente pour les fichiers EJS et HTML
 (index.html donne index_ejs.ejs
 )
*/
const express = require('express');
const path = require('path');
const app = express();

// Définir EJS comme moteur de template
app.set('view engine', 'ejs');

// Définir le dossier des vues
app.set('views', path.join(__dirname, 'views'));

// Utilisation des fichiers statiques (images, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.render('index', { pageName: 'Accueil', pageTitle: 'Bienvenue sur notre site' });
});

// Route pour la page "About"
app.get('/about', (req, res) => {
  res.render('about', { pageName: 'À propos', pageTitle: 'En savoir plus sur nous' });
});

// Route pour la page "Contact"
app.get('/contact', (req, res) => {
  res.render('contact', { pageName: 'Contact', pageTitle: 'Nous contacter' });
});

// Lancer le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
