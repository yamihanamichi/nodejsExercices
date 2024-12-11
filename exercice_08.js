/*
UTILISATION DES TEMPLATES - UTILISATION DE VARIABLES

Présentation

EJS permet de traiter le contenu d'une variable.
Dans la méthode res.render, on fournit un second argument sous la forme d'un objet. Chaque propriété de cet objet peut être utilisée dans le template de la façon suivante :
res.render(<nom du fichier>, {valeur1: 'un texte', valeur2 : 'un autre texte'})

template EJS :
Les balises <%= %> permettent d'insérer des variables dans le template.
<p><%= valeur1 %></p>
Ceci donnera <p>un texte<p> dans le document HTML transmis au client.
*/

/*
Exercice

------ 1 ------
Reprenez les documents de l'exercice précédent.

------ 2 ------
Transmettez le nom de la page et le titre du h1 dans l'objet passé en second argument de la méthode res.render et affichez-les dans votre document HTML envoyé au client.
*/

const express = require('express');
const path = require('path');
const app = express();

// Configurer le moteur de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.render('index', { pageName: 'Accueil', pageTitle: 'Bienvenue sur notre site' });
});

// Route pour la page "À propos"
app.get('/about', (req, res) => {
    res.render('index', { pageName: 'À propos', pageTitle: 'Découvrez notre mission' });
});

// Route pour la page "Contact"
app.get('/contact', (req, res) => {
    res.render('index', { pageName: 'Contact', pageTitle: 'Contactez-nous' });
});

// Lancer le serveur
const port = 3000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
