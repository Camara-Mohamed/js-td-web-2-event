/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

/*
document.querySelector(':root').style.setProperty('--main-color', document.querySelector('input[checked]').value);

const radioButtons = document.querySelectorAll('input[type=radio]');

for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', function changeCouleurs(evt) {
        document.querySelector(':root').style.setProperty('--main-color', evt.currentTarget.value);
    });
};

document.getElementById('rouge');
document.getElementById('vert');
document.getElementById('bleu');
document.getElementById('jaune');
*/

/*
function changeCouleurs() {
    document.querySelector(':root').style.setProperty('--main-color', evt.currentTarget.value);
};
*/

/*
document.getElementById('rouge').addEventListener('change', function (evt) {
    document.querySelector(':root').style.setProperty('--main-color', evt.currentTarget.value);
});
*/

// const radioInputs = document.querySelectorAll('input[type=radio]');

/*
for (const radioInput of radioInputs) {
    if(radioInput.checked){
        document.querySelector(':root').style.setProperty('--main-color', radioInput.value);
    }
}
*/

/*
document.getElementById('formCouleur').addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log('Bonjour');
})
*/

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
