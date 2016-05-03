---
layout: page
title : "[OLOD]"
---

Welkom op de digitale syllabus van het OLOD **{{ site.title }}**!

Deze syllabus bevat een introductie tot de te kennen werkwijze en technologieën, met daarnaast tips, koppelingen naar documentatie, artikels en tutorials die je op weg helpen bij de zelfstudie. Het is geenszins de bedoeling dat deze syllabus alle leerstof bevat, maar wel om je richting te geven bij zelfstudie.

Veel studieplezier tijdens deze boeiende ontdekkingstocht!  
{{ site.data.olod.authors | map: 'name' | map: 'full' | join: ', ' }}

|         {{ site.title }} | Informatie                                      |
|-------------------------:|:------------------------------------------------|
|      Opleidingsonderdeel | {{ site.data.olod.title.full }}                 |
|             Academiejaar | {{ site.data.olod.copyright.year }}             |
| Verantwoordelijke Docent | [{{ site.data.olod.authors[0].name.full }}][]   |
|      Onderwijsinstelling | [{{ site.data.olod.copyright.institute.nl }}][] |
|                Opleiding | {{ site.data.olod.programme.degree.nl }}        |
|        Afstudeerrichting | {{ site.data.olod.programme.major.nl }}         |
|               Keuzeoptie | {{ site.data.olod.programme.minor.short }}      |
{:.table}


{% comment %}
<!-- ⚓ Hyperlinks -->
{% endcomment %}
[{{ site.data.olod.authors[0].name.full }}]: {{ site.data.olod.authors[0].website }}
[{{ site.data.olod.copyright.institute.en }}]: http://www.arteveldeuniversitycollege.be
[{{ site.data.olod.copyright.institute.nl }}]: http://www.arteveldehogeschool.be

{% include afkortingen.md %}