//cloon menu voor fancy menu

//menu clonen
var menucloon = document.querySelector("#menu").cloneNode(true);
//het gecloonde menu in de body plaatsen.
// Insert the new element before the first child
document.querySelector("body").insertBefore(menucloon, document.querySelector("main"))

//id zetten (anders heb je twee dezelfde id's in de DOM)
menucloon.id ="menutop";
//titel overschrijven omdat dit menu boven in de pagina wordt getoond
menucloon.querySelector("h2").textContent = "Fancy menu:";
//class toevoegen voor het css gebeuren
menucloon.classList.add("hamburgesia");

//a link menu afpakken en nieuwe actie aanmaken
document.querySelector("header > a").onclick = function() {
  event.preventDefault(); //zodat de # niet wordt uitgevoerd
  menucloon.classList.toggle('showmenu') //toggel show/hide menu
};
