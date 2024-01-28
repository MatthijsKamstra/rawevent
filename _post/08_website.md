# Website

herschrijf voor een linkedin post

- maak gebruik van emojis
- schrijf enthousiast
- schrijf in het nederlands

---

wo 31-01-2024 - 10:00 AM

🚀 **Deel 8: RawEvent POC - Website**

Tijd om te praten over de plek waar de QR code heen gaat verwijzen: de landing page... of website.

Welkom bij de volgende post in de serie waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel is het creëren van een event-badge met persoonlijke informatie (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde informatie wordt getoond. 💻

De meest gangbare frontend zou React of Vue zijn, maar ik heb de afgelopen 1.5 jaar Angular gebruikt voor mijn dayjob (en I like it ❤️).

Mijn frontend is in Angular met de basic styling in Bootstrap!

Nu zul je zeggen dat is veel werk om helemaal van nul te beginnen met een project.
Dat klopt, maar dit weekend heb ik snel een logo gemaakt (WIP 🙈) en ik heb een hero van een ander project even hiervoor gebruikt. Dan lijkt het snel wat.

En ik had al een scaffold script geschreven om snel een basis project op te zetten met oa. navigatie, routing, home/about/etc pagina, folder structure, enzovoort.

Omdat leuke plaatjes het beter doen bij posts, ga ik niet een screenshot zien van mijn script, maar een klein stukje zodat je dit zelf zou kunnen maken.

```sh
#!/usr/bin/env bash

# Ik gebruik ficons for mijn icons
npm list | grep ficons || npm install ficons --package-lock

# Maak extra folders aan
mkdir -p src/styles

# zorg ervoor dat folders naar github worden geupload
touch src/app/shared/config/.gitkeep

# genereer Angular components
ng generate component components/nav

# genereer content voor files
echo '<i class="fa fa-magic"></i>' > src/app/elements/icons/icons.component.html

# enzovoort
```

Met Github Pages (website hosten van je repo), Github workflow heb je website die live staat. De url is dan nog niet wat je graag zou willen, maar dat is later prima op te lossen CNAME.

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- Github pages: https://pages.github.com/
- RawEvent website: https://matthijskamstra.github.io/rawevent/
- Github workflow: https://docs.github.com/en/actions/using-workflows
- Github workflow voor dit project: https://github.com/MatthijsKamstra/rawevent/blob/main/.github/workflows/gh-pages.yml

#POC #RawWorks #Interstellar #design #creativecoding #JavaScript #Angular #bash #design 🚀

## Chat-gpt

🚀 Deel 8: RawEvent POC - Website!

Tijd om te praten over de plek waar de QR-code naartoe gaat verwijzen: de landing page... of website.

> Welkom bij de volgende post in de serie waarin ik jullie meeneem door de stappen van het maken van een POC. 🎉 Mijn doel? Het creëren van een event-badge met persoonlijke informatie (naam en bedrijf/organisatie) én een unieke QR-code. 🏷️ Deze code opent een speciale pagina waarop na inloggen gepersonaliseerde informatie wordt getoond. 💻

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

- RawEvent POC source: https://github.com/MatthijsKamstra/rawevent
- RawEvent website: https://matthijskamstra.github.io/rawevent/
- Github Pages: https://pages.github.com/
- Github workflow: https://docs.github.com/en/actions/using-workflows
- Github workflow voor dit project: https://github.com/MatthijsKamstra/rawevent/blob/main/.github/workflows/gh-pages.yml

#POC #RawWorks #Interstellar #design #creativecoding #JavaScript #Angular #bash #design 🚀
