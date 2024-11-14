/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/

document.addEventListener("DOMContentLoaded", () => {
    const gallerie = [
        "img/bell.svg",
        "img/kiss.svg",
        "img/star.svg",
        "img/heart.svg"
    ];

    let index = 0;

    const image = document.querySelector("img");
    const buttonSuivant = document.getElementById("next");

    buttonSuivant.addEventListener("click", () => {
        index = (index + 1) % gallerie.length;

        image.src = gallerie[index];
    });
});