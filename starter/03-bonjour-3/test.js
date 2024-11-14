var buttonElt = document.getElementById("hello");
buttonElt.addEventListener("click", e => {
    var imgElt = document.createElement('img');
    imgElt.src = "bonjour.jpg";
    imgElt.alt = "Bonjour, toi !";
    document.querySelector('.display').appendChild(imgElt);
    document.querySelector('.actions').removeChild(e.currentTarget);
});