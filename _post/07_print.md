# Print

herschrijf voor een linkedin post

- maak gebruik van emojis
- schrijf enthousiast
- schrijf in het nederlands

---

di 30-01-2024 - 10:00 AM

🚀 **Deel 7: RawEvent POC - Print 2!**

Welkom bij de volgende post in de serie waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel is het creëren van een event-badge met persoonlijke informatie (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde informatie wordt getoond. 💻

Zoals ik gisteren al had aangegeven verloopt het process om drukwerk te maken nog niet helemaal vlot.

- Scribus kan svg importeren, maar dat moet met de hand (geen zin om 100+ files te importen en te positioneren)
- Er zitten fouten in de svg import (kijk naar het plaatje)
- Er zit ruimte tussen de QR code (idem)

De ruimte tussen de QR codes is een setting bij het genereren. Niet spannend, dus kijk ik naar een gemakkelijk/geautomatischeerde methode om de `svg` om te zetten naar `png`. En met het oog op drukwerk moet ik de afmeting kunnen controleren om een drukwerk waardige plaatjes te gebruiken.

Omdat ik al Inkscape heb geinstalleerd kan ik die gebruiken.

```bash
inkscape --export-type png -w 1024 bin/export/combo/00000_combo_slyvia_de_vries.svg
```

Nu dit alles nog verzamelen in 1 Scribus document en exporteren naar `pdf` voor drukwerk.

Goed om te weten is dat ik wel eerder gewerkt heb met Scribus en daarvoor code heb geschreven om data via script in een scribus file te genereren. Voor geinterseerden kan je repo vinden op github: https://github.com/MatthijsKamstra/gen-scribus. Deze repo is (nog) niet geschikt om "Single pages" te genereren maar dat is een detail die gemakkelijk aan te passen is in Scribus op het moment dat we een pdf genereren.

Voor de kritische kijker, het is inderdaad nog niet perfect... en dat is deze fase prima. Lets move forwards!

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- Scribus: https://www.scribus.net/
- Generate Scribus files: https://github.com/MatthijsKamstra/gen-scribus
- Inkscape: https://inkscape.org/
- Haxe: https://haxe.org/

#POC #RawWorks #Interstellar #design #creativecoding #haxe #JavaScript #scribus #Inkscape 🚀

## Chat-gpt

🚀 **Deel 7: RawEvent POC - Print 2!**

di 30-01-2024 - 10:00 uur

Welkom bij de volgende post in mijn serie, waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel? Het creëren van een event-badge met persoonlijke informatie (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde informatie wordt getoond. 💻

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

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- Scribus: https://www.scribus.net/
- Generate Scribus files: https://github.com/MatthijsKamstra/gen-scribus
- Inkscape: https://inkscape.org/
- Haxe: https://haxe.org/

#POC #RawWorks #Interstellar #design #creativecoding #haxe #JavaScript #scribus #Inkscape 🚀
