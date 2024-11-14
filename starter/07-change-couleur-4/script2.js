/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/

/*
function changerEnRouge(e) {
    alert('e.target: ' + e.target);
    alert('e.target.value: ' + e.target.value);
    document.body.style.backgroundColor = e.target.value;
}

function changerEnVert(e) {
    alert('e.target: ' + e.target);
    alert('e.target.value: ' + e.target.value);
    document.body.style.backgroundColor = e.target.value;
}

function changerEnBleu(e) {
    alert('e.target: ' + e.target);
    alert('e.target.value: ' + e.target.value);
    document.body.style.backgroundColor = e.target.value;
}

function changerEnJaune(e) {
    alert('e.target: ' + e.target);
    alert('e.target.value: ' + e.target.value);
    document.body.style.backgroundColor = e.target.value;
}

document.getElementById('rouge').addEventListener('click', changerEnRouge);
document.getElementById('vert').addEventListener('click', changerEnVert);
document.getElementById('bleu').addEventListener('click', changerEnBleu);
document.getElementById('jaune').addEventListener('click', changerEnJaune);
*/

function changerCouleur(e) {
    if (e.target.type === 'radio') {
        document.body.style.backgroundColor = e.target.value;
    } else if (e.target.type === 'submit') {
        e.preventDefault();
        const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(2)})`;
        document.body.style.backgroundColor = randomColor;
    }
}

document.getElementById('formCouleur').addEventListener('click', changerCouleur);