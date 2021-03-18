# Progressive Enhancement: HTML pagina's laden met XHR

Als de Browser API XMLHttpRequest wordt ondersteund dan worden de artikelen met Ajax ingeladen en getoond. Als de browser dit niet ondersteunt, of als er geen Javascript is, dan worden de losse HTML pagina's met de artikelen geladen.  

Klik op 'vorige of 'volgende' om een ander artikel te bekijken. Kijk wat er gebeurt als je in de dev tools van je browser Javascript aan of uit zet.

[Bekijk de demo hier](/examples/PEmetXHR/)


## Todo

- [x] `event.preventDefault()` 
-> altijd aan het eind van je functie, zodat als er later iets kapotgaat, in ieder geval de default actie van de browser nog uitgevoerd wordt (het volgen van de klik)
- [ ] `var pages = []`
-> URLs uit de HTML halen natuurlijk, daar staan ze als het goed is ook al in de `<a href="...">`, dan is je script ook
herbruikbaar als er opeens 5 pagina's zijn
- [ ] `var next = document.querySelector("a[rel='next']")` en `next.classList.add('disabled');` 
-> feature detects ontbreken!
- [ ] `setupXHR();` 
-> hier zou ik de feature detect omheen zetten: `if (xhr && classList && docqueryselector) { setupXHR(); }`, a la cutting the mustard
- [ ] `request.responseType = 'document';`
-> cool, nooit geweten dat dit bestond, thanks! Vervolgvraag: wat gebeurt er in IE9? Die wel XHR en querySelector ondersteunt. request.response bestaat daar volgens mij niet, dus geeft daar een error, maar dan heb je `event.preventDefault()` al gedaan, waardoor de link nooit gevolgd wordt, maar de XHR oplossing ook niet werkt. Gaat niet om IE9 natuurlijk, want die is brak en dood, maar wel om het principe. `event.preventDefault()` aan het eind had dit niet opgelost, omdat het in een andere functie kapot gaat, dus eigenlijk betere feature detect nodig.

- [ ] Volgende stap? Touch implementeren om door de lijst artikelen te swipen ...
