---
layout: page
title : Syllabus
---
{% assign olod = site.data.olod %}

Welkom op de digitale syllabus van het OLOD **{{ olod.title.short }}**!

Deze syllabus bevat een introductie tot de te kennen werkwijze en technologieën, met daarnaast tips, koppelingen naar documentatie, artikels en tutorials die je op weg helpen bij de zelfstudie. Het is geenszins de bedoeling dat deze syllabus alle leerstof bevat, maar wel om je richting te geven bij zelfstudie.

Veel studieplezier tijdens deze boeiende ontdekkingstocht!  
{{ olod.authors | map: 'name' | map: 'full' | join: ', ' }}

|   {{ olod.title.short }} | Informatie                            |
|-------------------------:|:--------------------------------------|
|      Opleidingsonderdeel |  {{ olod.title.full }}                |
|             Academiejaar |  {{ olod.copyright.year }}            |
| Verantwoordelijke Docent | [{{ olod.authors[0].name.full }}][]   |
|      Onderwijsinstelling | [{{ olod.copyright.institute.nl }}][] |
|                Opleiding |  {{ olod.programme.degree.nl }}       |
|        Afstudeerrichting |  {{ olod.programme.major.nl }}        |
|               Keuzeoptie |  {{ olod.programme.minor.short }}     |
{:.table}


{% comment %}
<!-- ⚓ Hyperlinks -->
{% endcomment %}
[{{ olod.authors[0].name.full }}]: {{ olod.authors[0].website }}
[{{ olod.copyright.institute.en }}]: http://www.arteveldeuniversitycollege.be
[{{ olod.copyright.institute.nl }}]: http://www.arteveldehogeschool.be

{% include afkortingen.md %}