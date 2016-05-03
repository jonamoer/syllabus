---
layout   : page
title    : Werkstuk
permalink: opdracht/werkstuk/
published: false
tags     :
---

Subsystemen
-----------

### Mobile Hybrid App

Met de app kunnen burgers zwerfvuil melden aan de milieuambtenaar van de gemeentelijke milieudienst.

### API

Via een API staat de app in verbinding met de back-end van het softwaresysteem.

### Backoffice

Via het webgebaseerde backoffice van het softwaresysteem kan de milieuambtenaar de zwerfvuilmeldingen zien en acties ondernemen.

Specificaties
-------------

### Technische Specificaties

> ##### **Opgelet** :warning:
> ---
>
> - Onderstaande technologieën **moeten** toegepast worden om te kunnen slagen voor dit opleidingsonderdeel.
> - Indien andere technologieën nodig zijn, dan mogen die gebruikt worden. Op voorwaarde dat de nieuwe technologie niet als vervanging voor een van de onderstaande technologieën gebruikt wordt.  
>   Bijvoorbeeld: jQuery mag niet gebruikt worden als hetzelfde met AngularJS bereikt kan worden. 
> - Uitzonderingen kunnen enkel met toestemming van de docent.
{:.alert .alert-warning}

#### Ontwikkelomgeving

 - [Oracle VM Virtualbox][]
 - [Vagrant][vagrant]
 - [Artevelde Laravel Homestead][Artestead]
   - [PHP][]
   - [MySQL][]
 - [Git][]
 - [Firefox Developer Edition][]

> ##### **Tip** :bulb:
> ---
> IDE's, editors en GUI-tools zijn vrij te kiezen. Enkele suggesties:
>
> - [Atom][]
> - [Brackets][]
> - [MySQL Workbench][]
> - [PhpStorm][] (licentie is te vinden op [Chamilo][])
> - [Sequel Pro][]
> - [SourceTree][]
> - [Visual Studio Code][]
{:.alert .alert-info}

#### Automatisatie

 - [Composer][]
 - [Node.js][]
   - [Bower][]
   - [gulp.js][]

#### Server-side

 - …
 
#### Client-side

 - …

#### Documentatie

 - …

### Functionele Specificaties

> ##### **Opgelet** :warning:
> ---
> De onderstaande specificaties zijn de minimumspecificaties. Vul ze aan met zelfbedachte functionaliteiten. 
{:.alert .alert-warning}

#### App

 - …

#### API

De API is een RESTful API waarlangs de Mobile Hybrid App communiceert met de back-end.

De functionaliteit is afhankelijk van de functionaliteit van de Mobile Hybrid App, maar moet minstens 1 voorbeeld van elk van de onderdelen van CRUD bevatten. 

#### Backoffice

 - Rollen
   - …
 - …

### Niet-functionele Specificaties

 - Documenteer alle PHP en JavaScript code met docblocks.
 - Grafisch verantwoord, esthetisch verzord en gebruiksvriendelijk.  
   Zoals van elk product van een student *Bachelor in de grafische en digitale media* verwacht mag worden!


{% comment %}
<!-- ⚓ Hyperlinks -->
{% endcomment %}

{% comment %}
<!-- ⚓ Hyperlinks: technologie en software componenten -->
{% endcomment %}
[gh-angular-ngdoc]:         https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation
[gh-doc-fm]:                https://help.github.com/articles/github-flavored-markdown
[gh-doctrine-fixtures]:     https://github.com/doctrine/DoctrineFixturesBundle
[gh-doctrine-migrations]:   https://github.com/doctrine/DoctrineMigrationsBundle
[gh-faker]:                 https://github.com/fzaninotto/Faker
[gh-fos-rest]:              https://github.com/FriendsOfSymfony/FOSRestBundle
[gh-nelmio-apidoc]:         https://github.com/nelmio/NelmioApiDocBundle
[gh-nelmio-cors]:           https://github.com/nelmio/NelmioCorsBundle
[geojson]:                  http://geojson.org
[google-maps]:              https://developers.google.com/maps
[html5]:                    http://www.w3.org/TR/html5
[html5-geolocation]:        https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
[html5-localstorage]:       https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[ionic-sdk]:                http://ionicframework.com
[mysql-manual]:             http://dev.mysql.com/doc/refman/5.6/en
[phpunit]:                  https://phpunit.de
[phpdocumentor]:            http://www.phpdoc.org
[psr]:                      http://www.php-fig.org
[psr2]:                     http://www.php-fig.org/psr/psr-2
[psr7]:                     http://www.php-fig.org/psr/psr-7
[Sass]:                     http://sass-lang.com
[sqlite]:                   https://www.sqlite.org
[sf]:                       http://symfony.com
[sf-console]:               http://symfony.com/doc/current/components/console/introduction.html


{% comment %}
<!-- ⚓ Hyperlinks: applicaties -->
{% endcomment %}


{% include afkortingen.md %}
{% include hyperlinks.md %}