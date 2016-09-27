---
layout   : page
title    : Academische Poster
permalink: opdracht/poster/
published: false
---

> ##### **Opgelet** :warning:
> ---
> - **Afgedrukt op A3** (297×420 mm), in te dienen op het mondeling examen.
> - **PDF**-bestand te plaatsen op [Bitbucket][]-repository.
> - **Controleer extra goed op spellingsfouten!**
{:.alert.alert-warning}

Een afgedrukte A3-poster die de presentatie moet ondersteunen. De academische poster moet een leek duidelijk maken wat het project was:

 - Synopsis
 - Doel van de opdracht
 - Resultaat (ondersteund met schermafbeeldingen)
 - Gebruikte technologieën (gebuik officiële logo's indien mogelijk, maar vermijd specifieke versienummers zodat het niet te snel verouderd overkomt)

Niet vergeten te vermelden:

 - Voornaam en familienaam
 - Opleidingsonderdeel: {{ site.data.olod.title.full }}
 - Academiejaar: {{ site.data.olod.copyright.year }}
 - Opleiding: {{ site.data.olod.programme.degree.nl }}
 - Afstudeerrichting: {{ site.data.olod.programme.major.nl }}
 - Keuzeoptie: {{ site.data.olod.programme.minor.short }}
 - Opleidingsinstelling: {{ site.data.olod.copyright.institute.nl }}

> ##### **Voorbeeld** (Nederlands) :package:
> ---
> John Doe, Jane Doe
> {{ site.data.olod.title.full }}, Academiejaar {{ site.data.olod.copyright.year }}
> {{ site.data.olod.programme.degree.nl }}, {{ site.data.olod.programme.major.nl }} ({{ site.data.olod.programme.minor.short }})
> {{ site.data.olod.copyright.institute.nl }}
{:.alert.alert-success}

> ##### **Example** (English) :package:
> ---
> John Doe, Jane Doe
> {{ site.data.olod.title.full }}, Academic Year {{ site.data.olod.copyright.year }}
> {{ site.data.olod.programme.degree.en }}, {{ site.data.olod.programme.major.en }} ({{ site.data.olod.programme.minor.short }})
> {{ site.data.olod.copyright.institute.en }}
{:.alert.alert-success}

{% include afkortingen-computer.md %}
{% include hyperlinks.md %}
{% include olod.md %}