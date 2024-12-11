/*
balise EJS :
<% ... %> : Code JavaScript sans sortie HTML.
  <% var year = new Date().getFullYear(); %>

<%_ ... %> : Code JavaScript sans sortie HTML et suppression des espaces blancs avant la balise.
     <%_ var year = new Date().getFullYear(); %>

   <%= ... %> : Insérer du code JavaScript avec sortie HTML échappée.
  <p>Année actuelle : <%= year %></p>

<%- ... %> : Insérer du code JavaScript avec sortie HTML non échappée.
  <p>Description: <%- "<strong>Description en gras</strong>" %></p>

<%# ... %> : Commentaire qui n'est pas exécuté ni inclus dans la sortie HTML.
  <%# Ceci est un commentaire et n'apparaîtra pas dans le HTML généré %>

<%% : Afficher littéralement <% dans le modèle HTML.
  <%% Ceci affichera
  
TEMPLATE EJS - INCLUSION

Présentation
Pour éviter la répétition de plusieurs lignes de code similaires dans différents templates EJS, il est possible d'utiliser l'inclusion.
L'inclusion en EJS permet de diviser votre code en petits morceaux réutilisables que vous pouvez inclure dans plusieurs templates. 
Cela facilite la maintenance et la lisibilité du code. 
Pour inclure un fichier dans un template EJS, vous pouvez utiliser la directive <%- include('fichier') %>, où fichier est le nom du fichier EJS que vous souhaitez inclure.
https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-fr

*/

/*
Exercice

 1 
Reprenez le code de l'exercice précédent.
creez un dossier partials dans views
*/

const express = require('express');
const path = require('path');
const app = express();

// Définir EJS comme moteur de template
app.set('view engine', 'ejs');

// Définir le dossier des vues (dossier où se trouvent vos fichiers .ejs)
app.set('views', path.join(__dirname, 'views'));

// Permettre l'accès aux fichiers statiques (comme les CSS)
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

// Démarrer le serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

