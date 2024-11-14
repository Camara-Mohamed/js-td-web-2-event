/*
EXERCICE 6 : Change couleur (4) - v3
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 3 : version 2 + on parcourt les boutons avec une boucle foreach pour leur ajouter leur addEventListener
*/
function changerCouleur(e) {
    document.body.style.backgroundColor = e.target.value;
}

function couleurAleatoire(e) {
    e.preventDefault();
    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(2)})`;
    document.body.style.backgroundColor = randomColor;
}

document.querySelectorAll('input[name="couleur"]').forEach(radio => {
    radio.addEventListener('click', changerCouleur);
});

document.getElementById('boutonCouleur').addEventListener('click', couleurAleatoire);
