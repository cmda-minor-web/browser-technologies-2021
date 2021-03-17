# Browser Technologies - De eindopdracht ✨ Progressive Enhanced Browser Technologie

Voor deze opdracht ga je een interactieve toepassing ontwerpen. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien, horen en/of voelen krijgen.



## Doel van deze opdracht

Het doel van deze opdracht is te leren hoe je een online interactieve toepassing kan maken met behulp van _Progressive Enhancement_ en _Feature Detection_ zodat die het altijd doet ...

[Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/)

## Uitleg

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de _core functionaliteit_ te zien/horen/voelen krijgen en maximaal een hele goede user experience.

Bouw je demo in 3 lagen, volgens het principe van _Progressive Enhancement_.

Gebruik als enhancement een [Browser Technologie](https://platform.html5.org) die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.
Je onderzoekt hoe je verschillende _features_ door verschillende browsers worden ondersteund, hoe je voor goede fallback kan zorgen en je test de _features_ op verschillende browsers <del>en het Device Lab</del>.

Polyfills en NPM packages op de client zijn niet toegestaan, op de server kun je doen wat je wil. Wat voor deze opdracht telt, is de HTML/CSS/JavaScript die aan de browser wordt aangeleverd.

Gebruik [caniuse.com](https://caniuse.com), [html5test.com](https://html5test.com), [css3test.com](http://css3test.com) en [kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)


## Use Cases

1. [Enquete over de minor Web Development](Usecase-enquete.md)
2. [Nerdy T-Shirt](Usecase-t-nerdy-shirt.md)
3. [Online poll met resultaten](Usecase-online-poll.md)
4. [Online Foto album](Usecase-online-foto-album.md)
5. [Routebeschrijving naar het Device Lab](Usecase-routebeschrijving-device-lab.md)
6. [Sportwedstrijd score website](Usecase-score-website.md)
7. Heb je zelf een idee? Dat kan, schrijf een use case en kom even overleggen.

## Werkwijze

Schets eerst een wireflow en/of breakdown-schets met hoe de demo moet gaan werken en hoe het eruit komt te zien. Bepaal de functional/reliable, usable en pleasurable laag.

- Onderzoek voor de functional/reliable laag naar semantische HTML elementen
- Kijk voor de usable laag naar gebruiksvriendelijkheid en design patterns die je zou kunnen toepassen
- De meest 'enhanced' versie is super vet, gaaf en prettig om te gebruiken … Dit is de pleasurable laag.

### Bronnen

Hier staat een lijst [Browser Technolgies](https://platform.html5.org/) die je kan toepassen. Bekijk welke nieuwe, innovatieve, interessante techniek je kan gebruiken voor je ontwerp. Of kijk de [WEB API](https://developer.mozilla.org/en-US/docs/Web/API) lijst op MDN, daar zitten echt coole API's tussen die misschien leuk zijn voor je pleasurable layer. Bluetooth api, gamepad API(voor controllers!)

Lees 
[The Role of Enhancement in Web Design](https://www.nngroup.com/articles/enhancement/), een goed artikel over waarom een _feature_ een _enhancement_ is.

Lees 
[A Theory of User Delight: Why Usability Is the Foundation for Delightful Experiences](https://www.nngroup.com/articles/theory-user-delight/) voor een uitleg over Functional/Reliable, Usable, Pleasurable lagen en de piramide van Aarron Walter met _hierarchy of user needs_.

Bekijk de [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) als je wat tips nodig hebt voor het ontwerpen van een gebruiksvriendelijke interface. Probeer in ieder geval deze principes toe te passen in je ontwerp: 04 Keep users in control, 09 Appearance follows behavior, 10 Consistency matters, 11 Strong visual hierarchies work best.

Lees [Wireflows: A UX Deliverable for Workflows and Apps](https://www.nngroup.com/articles/wireflows/) als je nog eens wil lezen over wirfelows. 

De features waarop je moet testen komen uit [opdracht 2 - Breek het Web](https://github.com/cmda-minor-web/browser-technologies-2021/blob/master/course/Opdracht2.md), Afbeeldingen, Custom fonts, Kleur, Muis/Trackpad, Breedband internet, Javascript, Cookies, LocalStorage.






## Criteria

-	Student kan de _Core functionaliteit_ van een use case doorgronden
-	Student kan uitleggen wat _Progressive Enhancement_ en _Feature Detection_ is en hoe dit toe te passen in Web Development
-	De demo is opgebouwd in 3 lagen, volgens het principe van _Progressive Enhancement_
-	De user experience van de demo is goed
	-	Let op leesbaarheidsregels, contrast en kleuren
	-	Let op gebruiksvriendelijkheid, zoals affordance en feedback op interactieve elementen
	-	De meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken


Er is een Readme toegevoegd met daarin:
- Een link naar de demo.
- Een (wireflow) schets van de functionaliteit met een beschrijving van de core functionality. Geef ook aan wat de functional/reliable, usable en pleasurable laag.
- Een beschrijving van de feature(s)/Browser Technologies die in je demo zijn gebruikt en hoe je dit PE hebt toegepast
- Een lijst met vier browsers waarin je hebt getest en een testverslag: 
	- voor de desktop 1 Chromium 1 niet-Chromium browser, 
	- voor mobiel 1 iOS + 1 Android OF een Samsung- en een niet-Samsung Android)
	- welke browsers de feature(s) wel/niet ondersteunen
	- welke functionaliteiten zoals JavaScript je aan en uit hebt gezet in de tests
	- een beschrijving van de feature-lijst die zijn onderzocht
	- een screenreader test





<!--
In welke browsers moet het doen? Welke devices krijg je voor de eindtest?
PE voorbeelden laten zien, live coding (Koop)
browser toewijzen, virtueel device lab 
2 desktop browsers (chromium en een niet chromium) 2 mobiele browsers
2 devices: ios device en android, of 2 androids samsung en een niet samsung
Voorbeelden per opdracht Kahoot, scoring frisbee, chatten met mediamarkt

MUIS
TOETSENBORD
TOUCH

-->
