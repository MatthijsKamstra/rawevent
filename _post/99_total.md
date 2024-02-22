# Post Mortum Proof of Concept voor een RawEvent

Tijdens een inspirerend gesprek met een collega van Interstellar waren we druk aan het brainstormen over een Sales event waar de Event badges meer zouden kunnen doen dan alleen maar de naam van de deelnemers tonen.

Ik ben altijd enthousiast over dit soort ideeën: het verbinden van de fysieke en digitale wereld en het verrijken van de algehele ervaring. 🌐💡 Maar zoals ze zeggen: "Ideeën zijn goedkoop, de uitvoering is alles." 💪

Ik heb mijn uitwerking gedeeld op LinkedIn. Hier is een samenvatting van die posts in één document.

## Deel 1: de Pitch

### Transformeer Fysieke Evenementen naar Digitale Belevenissen met RawWorks en Interstellar

Ben je klaar om de manier waarop evenementen worden ervaren te revolutioneren? Maak kennis met RawWorks en Interstellar, waar we de fysieke en digitale werelden naadloos samenbrengen. Stel je een wereld voor waarin evenementbadges niet alleen identificatiemiddelen zijn, maar poorten naar gepersonaliseerde digitale interacties.

Onze samenwerking tussen RawWorks en Interstellar combineert de creativiteit van schetsen met de grootsheid van interstellaire verkenning en brengt een Proof of Concept voort die traditionele evenementdynamiek overstijgt. Printen is geen gedoe meer; met RawWorks hoef je alleen maar een PDF of ontwerpbestand in te dienen, het aan te passen naar wens met tools als SVG, Inkscape en Scribus, en voilà! Jouw gepersonaliseerde evenementbadge is klaar.

Maar daar houdt het niet op. Privacy is van het grootste belang, en RawWorks en Interstellar zorgen ervoor dat je gegevens selectief worden gedeeld. Via unieke QR-codes kunnen deelnemers veilig toegang krijgen tot op maat gemaakte webpagina's, met behulp van Azure AD-login voor Microsoft-gebruikers, wat zowel gemak als vertrouwelijkheid garandeert.

Dit is hoe het werkt: Elke deelnemer ontvangt een QR-code ingebed in hun evenementbadge, die hen naar een unieke webpagina leidt bij het scannen. Of het nu gaat om het bekijken van het schema, het betrekken van sprekers of netwerken, onze website voorziet in elke aspect van de evenementreis. Plus, met taalopties en intuïtieve navigatie, voelen deelnemers zich meteen thuis.

Maar de echte magie? Gepersonaliseerde pagina's. Deelnemers kunnen met slechts één scan toegang krijgen tot hun eigen gepersonaliseerde ruimte, met relevante informatie en zelfs het faciliteren van netwerkmogelijkheden. En voor evenementorganisatoren is het beheren van deelnemersinteracties een fluitje van een cent, van het plannen van vergaderingen tot het bijhouden van betrokkenheid.

Bij RawWorks en Interstellar transformeren we niet alleen evenementen; we herdefiniëren ervaringen. Sluit je aan bij ons terwijl we een reis maken van schetsen naar digitale rijken, waardoor elk evenement onvergetelijk wordt. Welkom in de toekomst van evenementen met RawWorks en Interstellar.

## 🚀 Deel 2: RawEvent POC - Dummy data!

Bij een event draait het natuurlijk om een grote groep bezoekers. 🌐 Allemaal krijgen ze een event-badge met hun naam (voornaam en achternaam), het bedrijf/organisatie waarvoor ze werken, en natuurlijk de unieke QR-code! 🎫 Voor nu focus ik me op dat laatste. Ik begrijp dat er later in het proces ruimte is voor branding, maar ik wil eerst "bewijzen" dat het mogelijk is om met code een grote hoeveelheid event-badges te creëren.

Ik start met de dummy data. 🤖 Hierdoor wordt al snel duidelijk wat de complexiteit is bij grote aantallen. Zoals een bekende Nederlandse filosoof eens zei: "Massa is Kassa"! 💰

De data die ik genereer, komt uit een library die ik zelf heb geschreven, maar er zijn genoeg alternatieven (zie onderaan de post). Ik gebruik Haxe voor projecten waarbij ik snel wil prototypen. Reden? Snel werken en gemakkelijk kunnen wisselen van taal (Node, Eval en Neko).

De gegenereerde data richt zich voornamelijk op de informatie op de event-badge:

- Voornaam
- Achternaam
- Bedrijf/Organisatie

In het screenshot zie je ook een e-mail, maar die ga ik uiteindelijk verwijderen... privacy is belangrijk! 🤐

## 🚀 Deel 3: RawEvent POC - QR-code!

Laten we er even voor zorgen dat we allemaal dezelfde informatie hebben:

> QR staat voor Quick Response. Het is een tweedimensionale streepjescode die snel informatie kan overdragen wanneer gescand met een smartphone of QR-codelezer. 📱

De volgende stap is om te zien of ik 100+ QR-codes kan genereren. 🤖 Er is een natuurlijk omslagpunt, en voor mij is 10 stuks al een goed moment om het te automatiseren.

Ik ontdekte een JavaScript-bibliotheek die ook `svg` kan genereren: https://www.npmjs.com/package/qrcode-svg 🌐 Hiermee stuur ik naar een oplossing waarvan ik weet dat IK het werkend kan krijgen.

Eerst kijken of ik de generatie aan de praat kan krijgen in Haxe (node.js) en daarna kijken of ik een serie kan genereren.

## 🚀 Deel 4: RawEvent POC - Event badge!

Om dat een visual het altijd lekker doet in een post, heb ik gebruik gemaakt van AI om even een snel design the maken. Maar het mooi maken is niet mijn doel hier.
Ik wil duidelijkheid dat ik een badge kan maken met de (dummy) data.

Daarom heb ik een badge gemaakt in Inkscape en voor de mensen die dat niet weten, Inkscape maakt gebruik van `svg`.

> Inkscape is een gratis open-source programma voor het maken en bewerken van vectorafbeeldingen. Het is ideaal voor grafisch ontwerp en illustratie.

Waarom wil ik gebruik maken van `svg`: dit is eigenlijk "leesbaar" document met een xml achtige structuur.
Super geschikt om text manipulatie te doen. En omdat een vector bestand is gemakkelijk te schalen voor drukwerk.

Ik heb "svgo" (Node.js tool for optimizing SVG files) gebruikt om de `svg` weer te strippen van Inkscape data, maar ik denk dat Inkscape dat zelf ook wel kan.

Daarna was het een simpel loopje door de dummy data en de strings (`$company`, `$firstname` en `$lastname`) te vervangen met de juiste data.

## 🚀 Deel 5: RawEvent POC - Combineer QR en Event Badge!

In Deel 3 van deze serie heb ik de QR-codes gegenereerd, en in deel 4 heb ik de event-badges gegenereerd. Nu is het tijd om de twee te combineren.

Het klinkt misschien niet zo spannend, eigenlijk is het gewoon twee `svg`-bestanden inlezen en de qr-code `svg` in de event-badge `svg` kopiëren op de juiste plek. 😅 Hierbij heb ik wel een beetje gesmokkeld door eerst de schaal en positionering uit te zoeken in Inkscape.

Wat daaruit komt, is een transform, heel erg mysterieus allemaal:

```xml
<g id="qrcode" transform="matrix(0.26682031,0,0,0.26682031,4.847,35.24044)">
	...
</g>
```

Zou dat ook kunnen worden opgelost met schaal- en x- en y-positiewaarden?

```xml
<g x="0" y="0" transform="scale(2)">
    ...
</g>
```

## 🚀 Deel 6: RawEvent POC - Print!

Welkom bij de volgende post in mijn serie, waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel? Het creëren van een event-badge met persoonlijke informatie (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde informatie wordt getoond. 💻

Als grafisch ontwerper weet ik dat aangepaste event-badges beschikbaar zijn bij verschillende partijen, maar waarom niet zelf iets maken? 🎨 Drukwerk is tegenwoordig niet zo ingewikkeld meer, en er zijn geweldige open-source programma's beschikbaar.

Voor de geïnteresseerden deel ik graag een kort overzicht van mogelijke Adobe-vervangers:

| Adobe Suite       | Open Source |
| ----------------- | ----------- |
| Adobe Photoshop   | Gimp        |
| Adobe Illustrator | Inkscape    |
| Adobe Indesign    | Scribus     |
| Adobe Animate     | Synfig      |
| Adobe Lightroom   | Darktable   |
| Adobe Premiere    | OpenShot    |
| Adobe Premiere    | Shotcut     |

Voor dit deel van het project gebruik ik Scribus (voor drukwerk) en Inkscape (voor vector). 🖨️

Goed om te weten: ik heb eerder met Scribus gewerkt en zelfs code geschreven om data via script in een Scribus-bestand te krijgen. Voor geïnteresseerden is de repo te vinden op GitHub: https://github.com/MatthijsKamstra/gen-scribus.

Helaas stuit ik in deze fase van de POC op enkele uitdagingen:

- Scribus kan svg importeren, maar handmatig (geen zin om 100+ bestanden te importeren en te positioneren)
- Er zijn fouten in de svg-import (zie de afbeelding)
- Er is ruimte tussen de QR-code (idem)

Hmmmm, dit vraagt om wat meer tijd. Ik ga proberen dit op te lossen voor de volgende LinkedIn post.

Dus ik ga jullie afleiden met een AI gegeneerd plaatje van een drukwerk bezorger.

## 🚀 Deel 7: RawEvent POC - Print 2!

Gisteren gaf ik al aan dat het proces voor het maken van drukwerk nog niet helemaal soepel verloopt.

- Scribus kan svg importeren, maar dat moet handmatig (geen zin om 100+ bestanden te importeren en te positioneren)
- Er zitten fouten in de svg-import (zie de afbeelding)
- Er is ruimte tussen de QR-code (idem)

De ruimte tussen de QR-codes is een instelling bij het genereren. Niet spannend, dus kijk ik naar een eenvoudige/geautomatiseerde methode om de `svg` om te zetten naar `png`. Met het oog op drukwerk moet ik de afmetingen kunnen controleren om geschikte afbeeldingen voor drukwerk te gebruiken.

Omdat ik al Inkscape heb geïnstalleerd, kan ik dat gebruiken.

```bash
inkscape --export-type png -w 1024 bin/export/combo/00000_combo_slyvia_de_vries.svg
```

Nu nog alles verzamelen in één Scribus-document en exporteren naar `pdf` voor drukwerk.

Goed om te weten: ik heb eerder met Scribus gewerkt en zelfs code geschreven om data via script in een Scribus-bestand te genereren. Voor geïnteresseerden is de repo te vinden op GitHub: https://github.com/MatthijsKamstra/gen-scribus. Deze repo is (nog) niet geschikt om "Single pages" te genereren, maar dat is een detail dat gemakkelijk aan te passen is in Scribus op het moment dat we een pdf genereren.

Voor de kritische kijker, het is inderdaad nog niet perfect... en dat is in deze fase prima. Lets move forwards!

## 🚀 Deel 8: RawEvent POC - Website!

Tijd om te praten over de plek waar de QR-code naartoe gaat verwijzen: de landing page... of website.

De meest gangbare frontend zou React of Vue zijn, maar ik heb de afgelopen 1.5 jaar Angular gebruikt voor mijn day job (en I like it ❤️).

Mijn frontend is in Angular met de basic styling in Bootstrap! (say it loud and proud!)

Nu zul je zeggen dat het veel werk is om helemaal van nul te beginnen met een project.

Dat klopt, maar dit weekend heb ik snel een logo gemaakt (WIP 🙈) en ik heb een hero van een ander project even hiervoor gebruikt. Dan lijkt het snel wat.

En ik had al een scaffold script geschreven om snel een basisproject op te zetten met o.a. navigatie, routing, home/about/etc pagina, folderstructuur, enzovoort.

Omdat leuke plaatjes het beter doen bij posts, laat ik hieronder een paar stukjes zien van mijn script.

```sh

#!/usr/bin/env bash


# Ik gebruik ficons voor mijn icons

npm list | grep ficons || npm install ficons --package-lock


# Maak extra folders aan

mkdir -p src/styles


# Zorg ervoor dat folders naar GitHub worden geüpload

touch src/app/shared/config/.gitkeep


# Genereer Angular components

ng generate component components/nav


# Genereer content voor files

echo '<i class="fa fa-magic"></i>' > src/app/elements/icons/icons.component.html

# Enzovoort

```

Met Github Pages (website hosten van je repo), Github workflow heb je een website die live staat. De URL is dan nog niet wat je graag zou willen, maar dat is later prima op te lossen met CNAME.

## 🚀 Deel 9: RawEvent POC - UX!

Om een flowchart te maken gebruik ik Draw.IO, die je online kunt gebruiken maar ook via een app op je computer.

Hier kijk ik naar de mogelijke manieren waarop je naar de website kunt komen:

- via de QR-code van jezelf
- via de QR-code van andere bezoekers
- via de URL van de website

De verschillende onderdelen die je kunt zien als je:

- niet ingelogd bent
- wel ingelogd bent

En de basis waar de website aan moet voldoen.

Normaal zou je dit overleggen met de klant (hmmmm, dat ben ik) en daarna doorgeven aan de ontwerper zodat hij de pagina's kan ontwerpen (hmmmm, dat ben ik weer).

## Resources

Volg mijn progress in code en de website:

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- RawEvent website: https://matthijskamstra.github.io/rawevent/

Tech tools:

- Haxe: https://haxe.org/
- Haxe dummy data generator: https://github.com/MatthijsKamstra/generate-dummy-data
- Voorbeeld dummy data: https://github.com/MatthijsKamstra/generate-dummy-data/blob/main/export/rawevent/attendees_00176.json
- Generate Scribus files: https://github.com/MatthijsKamstra/gen-scribus
- Github Pages: https://pages.github.com/
- Github workflow: https://docs.github.com/en/actions/using-workflows
- Github workflow voor dit project: https://github.com/MatthijsKamstra/rawevent/blob/main/.github/workflows/gh-pages.yml

Design tools:

- Scribus: https://www.scribus.net/
- Inkscape: https://inkscape.org/
- svgo: https://inkscape.org/
- Draw.IO: https://www.drawio.com/

Extra info:

- Wat is een QR-code: https://nl.wikipedia.org/wiki/QR-code
- Wat is SVG: https://nl.wikipedia.org/wiki/Scalable_Vector_Graphics

#POC #RawWorks #Interstellar #design #Scribus #Inkscape #creativecoding #Haxe #JavaScript #Angular #bash 🚀
