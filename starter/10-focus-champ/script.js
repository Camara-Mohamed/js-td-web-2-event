/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ
document.addEventListener("DOMContentLoaded", () => {
    const champsPrenom = document.getElementById("prenom");

    champsPrenom.addEventListener("focus", () => {
        champsPrenom.value = ""; // Vide le champ
        champsPrenom.style.backgroundColor = "#f0f8ff";
    });

    champsPrenom.addEventListener("blur", () => {
        champsPrenom.style.backgroundColor = "transparent";
    });
});

// Deux champs
document.addEventListener("DOMContentLoaded", () => {
    const champsPrenom = document.getElementById("prenom");
    const champsNom = document.getElementById("nom");

    champsPrenom.addEventListener("focus", () => {
        champsPrenom.value = "";
        champsPrenom.style.backgroundColor = "#f0f8ff";
    });
    champsPrenom.addEventListener("blur", () => {
        champsPrenom.style.backgroundColor = "transparent";
    });

    champsNom.addEventListener("focus", () => {
        champsNom.value = "";
        champsNom.style.backgroundColor = "#f0f8ff";
    });
    champsNom.addEventListener("blur", () => {
        champsNom.style.backgroundColor = "transparent";
    });
});

// Plusieurs champs
document.addEventListener("DOMContentLoaded", () => {
    const textFields = document.querySelectorAll("input[type='text']");

    textFields.forEach((champs) => {
        champs.addEventListener("focus", () => {
            champs.value = "";
            champs.style.backgroundColor = "#f0f8ff";
        });

        champs.addEventListener("blur", () => {
            champs.style.backgroundColor = "transparent";
        });
    });
});