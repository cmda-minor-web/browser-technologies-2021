//declaraties
//knoppen
var next = document.querySelector("a[rel='next']");
var prev = document.querySelector("a[rel='prev']");
//counter bijhouden om te weten welke pagina getoond moet worden
//eerste pagina, index.html = 0
var current = 0;
//alle pagina's die geladen moeten worden staan klaar in een array
var pages = [
      "https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/index.html",
      "https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/article2.html",
      "https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/article3.html",
      "https://koopreynders.github.io/frontendvoordesigners/opdracht3/PEmetXHR/article4.html"
    ];

/*
setupXHR
feature detect of de browser XHR ondersteunt.
Zo ja, dan worden de click events van prev/next overschreven.
Zo nee, dan wordt de functie afgebroeken en doet de pagina het met html.
*/
function setupXHR(){
  //feature detect: als de browser XHR niet ondersteunt stopt de functie
  if (!window.XMLHttpRequest){
    console.log("XHR wordt niet ondersteund")
    //De functie wordt afgebroken (dat is prima want de html doet het gewoon)
    return false;
   }
   //Als de feature bestaat, worden de click events overschreven.
   next.onclick = function(){
     //counter bijhouden om te weten welke pagina ingeladen moet worden
     current+=1;
     if(document.querySelector("article[data-nr='"+current+"']")){
       //als het article al bestaat, is depagina al ingeladen, dan hoeft allen de pagina getoond te worden
       shownext();
     }else{
       //pagina laden als het article nog niet bestaat
       loadnext();
     }
     event.preventDefault();
   }
   prev.onclick = function(){
     //counter bijhouden om te weten welke pagina getoond moet worden
     current-=1
     //toon de pagina
     shownext();
     event.preventDefault();
   }

}

/*
loadnext
Met AJAX de volgende pagina laden en aan de DOM toevoegen.
*/
function loadnext(){
  //request opzetten
  var request = new XMLHttpRequest();
  request.onload = function() {
    //alleen het article selecteren van de request.response
    //en niet de hele html met head en body
    var article = request.response.querySelector("article");
    //elke article een data-nr
    article.setAttribute("data-nr",current);
    // article aan de dom toevoegen
    document.querySelector("main").appendChild(article);
    //als het artikel is geplaatst, pagina tonen
    shownext();
  }
  //De counter wordt gebruikt om de juiste pagina te laden
  request.open('GET', pages[current]);
  //set 'type' als 'document' om html documenten te laden
  request.responseType = 'document';
  request.send();
}

/*
shownext
Het nieuwe artikel met een fancy animatie tonen.
*/
function shownext(){
  //margin-left van het eerste artikel aanpassen
  document.querySelector("article:first-child").style.setProperty("--margin", current);
  //buttons aan/uit zetten
  if(current==pages.length-1){
    next.classList.add('disabled');
  }else{
    next.classList.remove('disabled');
  }
  if(current>0){
    prev.classList.remove('disabled');
  }else{
    prev.classList.add('disabled');
  }
}

//Setup functie aanroepen en checken of XHR wordt ondersteund.
setupXHR();
