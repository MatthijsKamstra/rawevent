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

Nu dit alles nog verzamelen in 1 Scribus document.

---

Ik ben eigenlijk opgeleid tot grafisch ontwerper en daarom weet ik dat gecustomizde event-badges aangeboden worden door verschillende partijen.
Nu ben ik ook niet vies van het wiel opnieuw uitvinden en je zou dit project daaronder kunnen scharen.
Maar waarom zou je een partij inhuren om iets te doen wat je zelf ook zou kunnen maken.

Drukwerk doen is niet meer zo complex als vroeger en er zijn genoeg open source programma's waar je gebruik van kunt maken.
Meestal heeft het te maken met het vervangen van Adobe software.
Dus voor geintereseerden even een kort overzicht waarmee je Adobe software zou kunnen vervangen

| Adobe Suite       | Open Source |
| ----------------- | ----------- |
| Adobe Photoshop   | Gimp        |
| Adobe Illustrator | Inkscape    |
| Adobe Indesign    | Scribus     |
| Adobe Animate     | Synfig      |
| Adobe Lightroom   | Darktable   |
| Adobe Premiere    | OpenShot    |
| Adobe Premiere    | Shotcut     |

Ik gebruik voor dit deel van het project Scribus (drukwerk) en Inkscape (vector).

Goed om te weten is dat ik wel eerder gewerkt heb met Scribus en daarvoor code heb geschreven om data via script in een scribus file te krijgen. Voor geinterseerden kan je repo vinden op github: https://github.com/MatthijsKamstra/gen-scribus.

Dit deel van het uitzoeken voor POC loop ik tegen wat problemen aan.

- Scribus kan svg importeren, maar dat moet met de hand (geen zin om 100+ files te importen en te positioneren)
- Er zitten fouten in de svg import (kijk naar het plaatje)
- Er zit ruimte tussen de QR code (idem)

Hmmmm dit heeft wat meer tijd nodig.
Eens kijken of ik dit kan oplossen voor de volgende LinkedIn post.

Dus ik ga jullie afleiden met een AI gegeneerd plaatje van een drukwerk bezorger.

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- Scribus: https://www.scribus.net/
- Generate Scribus files: https://github.com/MatthijsKamstra/gen-scribus
- Inkscape: https://inkscape.org/
- Haxe: https://haxe.org/

#POC #RawWorks #Interstellar #design #creativecoding #haxe #JavaScript 🚀

## Chat-gpt
