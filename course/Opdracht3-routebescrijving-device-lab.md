# Browser Technologies

## Opdracht 3 - Progressive Enhanced Browser Technologie

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen.

Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement.

Gebruik als enhancement een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning. De meest 'enhanced' versie is super vet, gaaf en prettig om te gebruiken …
Beschrijf de feature(s)/Browser Technologies, welke browser de feature(s) wel/niet ondersteunen, en de accessibility issues die zijn onderzocht.

### Doel van deze opdracht

Het doel van deze opdracht is te leren hoe je een online interactieve toepassing zo kan maken met behulp van _Progressive Enhancement_ en _Feature Detection_ dat deze het altijd doet ...

[Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/)

### Uitleg

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de _core functionaliteit_ te zien/horen/voelen krijgen en maximaal een hele goede UX.

Bouw je demo in 3 lagen, volgens het principe van _Progressive Enhancement_.

Gebruik als enhancement een (innovatieve, vooruitstrevende, onbekende, nieuwe) [Browser Technologie](https://platform.html5.org) die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.
Je onderzoekt hoe je verschillende _features_ door verschillende browsers worden ondersteund en hoe je voor goede fallback kan zorgen. Test de _features_ op verschillende browsers en het Device Lab.
Polyfills en NPM packages op de client zijn niet toegestaan, op de server kun je doen wat je wil. Wat voor deze opdracht telt, is de HTML/CSS/JavaScript die aan de browser wordt aangeleverd.

Gebruik [caniuse.com](https://caniuse.com), [html5test.com](https://html5test.com), [css3test.com](http://css3test.com) en [kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

### Werkwijze

Schets eerst een wireflow en/of breakdown-schets met hoe de demo moet gaan werken en hoe het eruit komt te zien. Bepaal de functional/reliable, usable en pleasurable laag.

- Onderzoek voor de functional/reliable laag naar semantische HTML elementen
- Kijk voor de usable laag naar design patterns die je zou kunnen toepassen
- De meest 'enhanced' versie is super vet, gaaf en prettig om te gebruiken … Dit is de pleasurable laag.

Gebruik [The Role of Enhancement in Web Design](https://www.nngroup.com/articles/enhancement/) en [A Theory of User Delight](https://www.nngroup.com/articles/theory-user-delight/)

### Use Cases

#### 1. Enquete over de minor Web Development

## Enquete over de minor Web Development

Ik wil een 
Enquete over de minor Web Development, bla bla bla

	-	Studentgegevens (naam + nummer) verplicht
	-	Per vak 
		- naam
		- docent(en)
		- weken waarin je het vak deed
		- beoordeling op schaal 1-10 van
			- lesstof (hoe moeilijk is het)
			- uitleg (hoe duidelijk is het uitgelegd)
			- eigen inzicht (hoe goed snap je het)
	
	- Validatie: alles moet zijn ingevuld voordat je verder mag met het formulier. Geef duidelijke foutmeldingen.
	- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

2. Nerdy T-Shirt

## Nerdy T-shirt

Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, printen, opslaan, en een volgende keer dat ik de site bezoek kunnen gebruiken.
	-	Gegevens maker (naam, telefoon of email)
	-	Kleur t-shirt
	-	Tekst t-shirt
	-	Maat t-shirt
	-	M/V
	-	Ontwerp printen
	-	Ontwerp kopen en laten maken (hiervoor hoef je alleen de web-interface te maken)
	-	Verder gaan waar je gebleven bent/ontwerp herzien
	-	Validatie: alles moet zijn ingevuld. Geef duidelijke foutmeldingen
	-	Gebruiker moet meerdere t-shirts kunnen maken en herzien, en moet dus een overzichtspagina hebben.

3. Online poll met resultaten

## Online poll met resultaten
Ik wil aan mensen een poll kunnen voorleggen met vragen en antwoorden, en de resultaten meteen laten zien.
	-	Admin-pagina's
		-	Nieuwe vraag en antwoord maken
		-	Per vraag mogelijkheid om te publiceren of nog even achter te houden
		-	Per vraag mogelijkheid antwoorden in te zien en te publiceren of nog even achter te houden
		-	Volgorde vragen bepalen
	-	Gebruikerspagina's
		-	Gegevens gebruiker (naam)
		-	Vragen zien en beantwoorden
		-	Antwoorden zien, met goede datavisualisatie
	-	Push: als de admin een vraag en antwoorden publiceert, moeten de gebruikers die nu zijn ingelogd een melding zien en in staat zijn de vraag direct te beantwoorden. (Bedenk zelf op welke manier dit precies gebeurt. Ook: mogen ze meteen nadat ze geantwoord hebben een overzicht van de gegevens antwoorden zien? Zo nee, wanneer dan wel?)

4. Online Foto album


## Online Foto album

Ik wil series foto's kunnen aanmaken, bekijken en editen.
	-	Overzichtspagina alle foto's
	-	Foto toevoegen aan verzameling met meta-info (locatie, fotograaf, alt-tekst)
	-	Overzichtspagina serie
	-	Serie samenstellen (welke foto's en in welke volgorde)
	-	Detailpagina foto
	-	Serie als carrousel aanbieden
	-	Serie als slideshow aanbieden

5. Routebescrijving naar het Device Lab

## Routebescrijving naar het Device Lab

Ik wil de routebeschrijving van mijn huis tot aan het Device Lab stap voor stap kunnen zien.
	-	Selecteer te voet, fiets, OV of auto
	-	Toon routebeschrijving met kaartjes en noodzakelijke teksten
	-	Maak offline beschikbaar
	-	Gebruikers moeten meerdere varianten beschikbaar hebben, zelfs als ze offline zijn
	-	??? Transportsoorten moeten te mengen zijn; bijvoorbeeld 'mijn fiets staat bij station X'

6. Sportwedstrijd score website

## Sportwedstrijd score website

Ik wil de scores of tijden van een sportwedstrijd doorgeven aan geïnteresseerden, die vervolgens kunnen reageren.
	-	Admin interface waar je een wedstrijd kunt aanmaken
	-	Per wedstrrijd moet de admin scores of tijden kunnen invullen
	-	Gebruikers moeten zich kunnen aanmelden voor bepaalde wedstrijden (overzichtsscherm)
	-	Gebruikers die een wedstrijd volgen, krijgen een notificatie als er nieuwe informatie binnenkomt. (Hoe doe je dit als de gebruiker meerdere wedstrijden volgt?)
	-	Gebruikers kunnen hier een reactie op geven, die voor andere gebruikers (en de admin) te lezen is. De admin moet reacties kunnen weghalen.

7. Heb je zelf een idee? Dat kan, schrijf een use case en kom even overleggen.


### Criteria

Er is een Readme toegevoegd met daarin beschreven:
-	Een (wireflow) schets van de functionaliteit met een beschrijving van de core functionality. Geef ook aan wat de functional/reliable, usable en pleasurable laag.
-	een beschrijving van de feature(s)/Browser Technologies
-	een lijst met de vier browsers waarin je gaat testen, plus welke functionaliteiten zoals JavaScript je aan en uit zet tijdens de tests.	(Op desktop 1 Chromium 1 niet-Chromium, op mobiel 1 iOS + 1 Android OF een Samsung- en een niet-Samsung Android.)
-	welke browsers de feature(s) wel/niet ondersteunen
-	een beschrijving van de accessibility issues die zijn onderzocht
-	beschrijving PE en oplossingen toevoegen
-	De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
-	De user experience van de demo is goed
	-	de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
	-	het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
	-	de meest 'enhanced' versie is super vet, gaaf en h-e-l-e-maal te leuk om te gebruiken
-	Student kan de Basic functionaliteit van een use case doorgronden
-	Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development en de eigen opdracht
