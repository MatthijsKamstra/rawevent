# Event Badge

herschrijf voor een linkedin post

- maak gebruik van emojis
- schrijf enthousiast
- schrijf in het nederlands

---

26-01-2024 - 10:00 AM

🚀 **Deel 4: RawEvent POC - Event badge!**

Welkom bij de volgende post in de serie waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel is het creëren van een event-badge met persoonlijke informatie (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde informatie wordt getoond. 💻

Om dat een visual het altijd lekker doet in een post, heb ik gebruik gemaakt van AI om even een snel design the maken. Maar het mooi maken is niet mijn doel hier.
Ik wil duidelijkheid dat ik een badge kan maken met de (dummy) data.

Daarom heb ik een badge gemaakt in Inkscape en voor de mensen die dat niet weten, Inkscape maakt gebruik van `svg`.

> Inkscape is een gratis open-source programma voor het maken en bewerken van vectorafbeeldingen. Het is ideaal voor grafisch ontwerp en illustratie.

Waarom wil ik gebruik maken van `svg`: dit is eigenlijk "leesbaar" document met een xml achtige structuur.
Super geschikt om text manipulatie te doen. En omdat een vector bestand is gemakkelijk te schalen voor drukwerk.

Ik heb "svgo" (Node.js tool for optimizing SVG files) gebruikt om de `svg` weer te strippen van Inkscape data, maar ik denk dat Inkscape dat zelf ook wel kan.

Daarna was het een simpel loopje door de dummy data en de strings (`$company`, `$firstname` en `$lastname`) te vervangen met de juiste data.

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- Inkscape: https://inkscape.org/
- svgo: https://inkscape.org/
- Wat is SVG: https://nl.wikipedia.org/wiki/Scalable_Vector_Graphics
- Haxe: https://haxe.org/

#POC #RawWorks #Interstellar #design #creativecoding #haxe #JavaScript #nodejs #svg #inkscape 🚀

---

## Chat-gpt

🚀 Deel 4: RawEvent POC - Event badge!

Welkom bij de volgende episode in mijn serie, waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel? Het ontwikkelen van een event-badge met persoonlijke info (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde info wordt getoond. 💻

Om een visueel aspect toe te voegen aan deze post, heb ik snel een ontwerp gemaakt met behulp van AI. Maar de focus ligt niet op esthetiek; ik wil duidelijk maken dat ik een badge kan maken met (dummy) data.

Ik heb Inkscape gebruikt om de badge te creëren (https://github.com/MatthijsKamstra/rawevent/blob/main/haxe/bin/template/nametag_cleaner_v01.svg).
Voor wie dat niet weet, Inkscape maakt gebruik van `svg`.

> Inkscape is een gratis open-source programma voor het maken en bewerken van vectorafbeeldingen. Ideaal voor grafisch ontwerp en illustratie. 🎨

Waarom kies ik voor `svg`? Dit bestandsformaat is leesbaar met een XML-achtige structuur, perfect voor tekstmanipulatie. En omdat het een vectorbestand is, is het eenvoudig schaalbaar voor drukwerk.

Ik heb "svgo" gebruikt om de `svg` te optimaliseren en te ontdoen van Inkscape-data. Al denk ik dat Inkscape dat zelf ook kan.

Vervolgens was het een eenvoudige stap door de dummy data en de strings (`$bedrijf`, `$voornaam` en `$achternaam`) te vervangen met de juiste gegevens.

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- Inkscape: https://inkscape.org/
- Event Badge: https://github.com/MatthijsKamstra/rawevent/blob/main/haxe/bin/template/nametag_cleaner_v01.svg
- svgo: https://inkscape.org/
- Wat is SVG: https://nl.wikipedia.org/wiki/Scalable_Vector_Graphics
- Haxe: https://haxe.org/

#POC #RawWorks #Interstellar #design #creativecoding #haxe #JavaScript #nodejs #svg #inkscape 🚀
