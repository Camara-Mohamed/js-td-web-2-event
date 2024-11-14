/*
SOURCE : https://github.com/oc-courses/javascript-web/tree/gh-pages/chapitre_5/js
*/
/*
EXERCICE 5bis : Change couleur (2) - Colorie la page en fonction des touches pressées
- Change la couleur de fond du body lorsque l'utilisateur appuie sur une des touches
    R (rouge), J (jaune), V (vert) ou B (bleu),
    que ce soit en minuscules ou en majuscules
    et affiche le message 'Touche … non gérée' s'il presse une autre touche.
- Méthode : Cette fois, JS ne fait qu'appliquer une classe sur le body, c'est CSS qui se charge de le styler.
- PRESSÉ ? : tu peux repartir du code de la version précédente, il n'y a qu'une modification mineure à opérer.
*/
function colorie(evt) {
    const touche = evt.key.toLowerCase();

    document.body.classList.remove('rouge', 'vert', 'jaune', 'bleu');

    switch (touche) {
        case 'r':
            document.body.classList.add('rouge');
            break;
        case 'v':
            document.body.classList.add('vert');
            break;
        case 'j':
            document.body.classList.add('jaune');
            break;
        case 'b':
            document.body.classList.add('bleu');
            break;
        default:
            console.log(`Touche ${evt.key} non gérée.`);
    }
}

window.addEventListener('keydown', colorie);
