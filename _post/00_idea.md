# idea

- sketch
- Interstellar
- RawWorks
- idea
- POC
- van de fysieke wereld naar de digitale wereld

- drukken niet meer zo ingewikkeld als vroeger
- aanleveren van PDF
- aanlevern van design bestanden
- customizen design
- svg
- Inkscape
- Scribus
- Haxe
- QR npm code
- QRCode-svg

- hoe zorg je voor Privacy
- Wat wel op een tag en wat niet meer
- wat wil je delen met de rest en wat niet meer
- hoe kan je een custom tailord oplossing tonen aan klant
- maar niet aan de rest
- Azure AD inloggen (klanten zijn al Microsoft gebruikers)
- met unieke code EN inloggen je custom pagina bekijken
- QR is unieke code, maar niet "leesbaar" via gewone qr-code scanners
- dus heb je de website nodig om de code te kunnen lezen

- heb je dan voldoende aan "xasdfa-dadsf-aaf" of wil je de gewonen lezers gebruiken om te redirecten

## Flow

- qr op event name tag
  - hashing `email` ???
- qr scanner van telefoon
  - `https://www.rawevent.nl/aa-bb-cc-dd`
- kom je op de website
  - `aa-bb-cc-dd`
- info uitlezen in de database
- of
- convert `aa-bb-cc-dd` naar `Foo Bar`
- login via Azure Ad
  - prefill email? // nee, want dat zou iedereen kunnen doen via qr code
- check wie inlogt en welke pagina daarbij hoort.
-

## Website

- visit `https://www.rawevent.nl/` (public)
  - speakers `https://www.rawevent.nl/speakers`
  - call to action / ask for a consult `https://www.rawevent.nl/cta`
  - login `https://www.rawevent.nl/login`
  - about`https://www.rawevent.nl/about`
  - schedule `https://www.rawevent.nl/schedule`
  - Q&A `https://www.rawevent.nl/qa`
  - nl / engels (wisselen van taal)
  - 404 (met call to action en weer terug)
- visit `https://www.rawevent.nl/scanner`
  - kan ook je qr scannen, maar waarom? zit op je mobiel en wat kan deze nog toevoegen
  - mogelijk dat de scanner iets doet wat de gewone scanner niet kan: code vertalen naar iets bruikbaar?
- visit `https://www.rawevent.nl/aa-bb-cc` (unieke code) via QR

  - vind "personal" page van attendee --- alleen naam zoals op de name tag
    - voornaam
    - achternaam
    - company
    - cta
    - extra info om een sales gesprek
    - wat krijg je als je inlogt

- mogelijkheden als je naar personal page gaat

  - visit uitgelogt jezelf
    - basis info
    - voornaam
    - achternaam
    - company
    - info voordeel inloggen
    - inloggen knop
  - visit _ingelogt_ jezelf
    - upgrade info van je bedrijf
  - gesprek inplannen
  - gesprek aanvragen
  - bel met me
  - visit uitgelogt andere bezoeker
  - visit _ingelogt_ andere bezoeker
    - gesproken met aanvinken (connectie?)

- visit `https://www.rawevent.nl/login` (Azure AD) login

---

## order posts

- 01 Start
- 02 Dummy data
- 03 QR
- 04 Event Badge
- 05 Combine QR and Event Badge
- 06 Print
- 07 Website
- 08 UX (hoe ga je de site door)
