# Combine QR and Event Badge

herschrijf voor een linkedin post

- maak gebruik van emojis
- schrijf enthousiast
- schrijf in het nederlands

---

vr 26-01-2024 - 10:00 AM

🚀 **Deel 5: RawEvent POC - Combineer QR en Event Badge!**

Welkom bij de volgende post in de serie waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel is het creëren van een event-badge met persoonlijke informatie (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde informatie wordt getoond. 💻

In Deel 3 van deze serie heb ik de QR codes gegenereerd
En in deel 4 heb ik de event badges gegeneerd.

Nu kunnen we de twee combineren.

Niet echt spannend, eingenlijk is het twee `svg` files inlezen en de qr-code `svg` in de event badge `svg` copieren op de juiste plek.

Hier heb ik wel een beetje gesmokkeld door de scale en positionering eerste even uit te zoeken in Inkscape.

Wat daar uitkomt is een transform, heel erg misterieus allemaal

```xml
<g id="qrcode" transform="matrix(0.26682031,0,0,0.26682031,4.847,35.24044)">
	...
</g>
```

Zou dat ook kunnen oplossen met scale en x en y positie waardes

```xml
<g x="0" y="0" transform="scale(2)">
    ...
</g>
```

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- Wat is een QR-code: https://nl.wikipedia.org/wiki/QR-code
- Wat is SVG: https://nl.wikipedia.org/wiki/Scalable_Vector_Graphics
- Haxe: https://haxe.org/
- Inkscape: https://inkscape.org/

#POC #RawWorks #Interstellar #design #creativecoding #haxe #JavaScript 🚀

---

## Chat-gpt

🚀 **Deel 5: RawEvent POC - Combineer QR en Event Badge!**

26-01-2024 - 10:00 uur

Welkom bij de volgende post in mijn serie, waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel? Het creëren van een event-badge met persoonlijke informatie (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde informatie wordt getoond. 💻

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

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- Wat is een QR-code: https://nl.wikipedia.org/wiki/QR-code
- Wat is SVG: https://nl.wikipedia.org/wiki/Scalable_Vector_Graphics
- Haxe: https://haxe.org/
- Inkscape: https://inkscape.org/

#POC #RawWorks #Interstellar #design #creativecoding #haxe #JavaScript #Inkscape #svg 🚀
