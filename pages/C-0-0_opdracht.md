---
layout   : page
title    : Opdracht
permalink: opdracht/
published: true
tags     :
---

Probleemstelling
----------------

Hoe kan een softwaresysteem het ecologisch, economisch en sociaal probleem van zwerfvuil en sluikstorten helpen oplossen?

Werkstuk
--------

Ontwerp en ontwikkel **individueel** een databasegebaseerd softwaresysteem gemaakt met de technologieën die tijdens de colleges aan bod komen, en bestaat uit:

 1. *Mobile Hybrid App* 
 2. *Application Programming Interface*
 3. *Backoffice*

Deliverables
------------

### Repository

Het werkstuk wordt op een [Bitbucket][]-repository gepubliceerd dat toegankelijk is voor:

 - [Olivier Parent][docent-opr-bitbucket]
 - [Philippe De Pauw - Waterschoot][docent-pdp-bitbucket]

### Mappen en bestanden

Bitbucket-repository:

> ##### Mappen & Bestanden :open_file_folder:
> ---
>```
> nmdad3.local/
> ├── app/
> ├── docs/
> │   ├── academische_poster.pdf
> │   ├── checklist.md
> │   ├── presentatie.pdf
> │   ├── productiedossier.pdf
> │   └── timesheet.xslx
> ├── www/
> └── README.md
>```
{:.card .card-block}

 - De map `app/` is voor de *Mobile Hybrid App;*
 - De map `www/` is voor de website (Backoffice en API).
 - Het bestand `README.md` bevat:
   - Informatie:
     - Voornaam en familienaam
     - Opleidingsonderdeel: New Media Design & Development III
     - Academiejaar
     - Opleiding: Bachelor in de grafische en digitale media
     - Afstudeerrichting: Multimediaproductie
     - Keuzeoptie: proDEV
     - Opleidingsinstelling: Arteveldehogeschool
   - Alle nodige gegevens om het werkstuk te deployen.

Werkwijze
---------

### Projectmethodologie

Werk op een *Agile* manier. In deze context wil dit zeggen dat je de deelfunctionaliteiten prioritiseert en een voor een uitwerkt tot op een niveau dat het productieklaar is. De belangrijkste deelfunctionaliteiten worden eerst uitgewerkt.

Je doorloopt de volledige workflow per feature op een correcte en volledig manier:

> # **4D:** Define → Design → Develop → Deploy.
{:.card .card-block}

De opgeleverde functionaliteiten moeten productiewaardig zijn (geen visuele bugs en perfect volgens de vooraf bepaalde specificaties. Pas hiervoor **Behaviour-Driven Development** toe en zorg ervoor dat de code goed gedocumenteerd is.

### Milestones

> ##### **Tip** :bulb:
> ---
> Dit wil niet zeggen dat je moet wachten tot de voorgaande milestone voltooid is om aan de volgende te beginnen!
{:.alert .alert-info}

> ##### Milestone 1 :triangular_flag_on_post:
> ---
> Voorbereidingen **voorstellen**.
>
> - Academische Poster
>   - Opmaak en vormgeving klaar
>   - Inhoud aanwezig, maar moet nog aangevuld of geüpdatet worden.
> - Productiedossier
>   - Opmaak en vormgeving klaar
>   - Inhoud aanwezig, maar moet nog aangevuld of geüpdatet worden.
> - Presentatie
>   - Opmaak en vormgeving klaar
>   - Inhoud aanwezig, maar moet nog aangevuld of geüpdatet worden.
> - Timesheet
>   - Ingevuld tot op vandaag.
> - Eerste versie op repository:
>   - Academische Poster
>   - Checklist
>   - Productiedossier
>   - Presentatie
>   - Timesheet
{:#milestone-1 .card .card-block}

> ##### Milestone 2 :round_pushpin:
> ---
> *Alpha*-versie **voorstellen**.
>
> - Eerste functionaliteiten aanwezig en getest.
> - Ruwe versie gebruikersinterface.
> - Bijgewerkt versie op repository:
>   - Academische Poster
>   - Checklist
>   - Productiedossier
>   - Presentatie
>   - Timesheet
{:#milestone-2 .card .card-block}

> ##### Milestone 3 :round_pushpin:
> ---
> *Beta*-versie **voorstellen**.
>
> - Alle functionaliteiten aanwezig en getest.
> - Gebruikersinterface klaar om te testen.
> - Klaar om door gebruikers getest te woren.
> - Bijgewerkt versie op repository:
>   - Academische Poster
>   - Checklist
>   - Productiedossier
>   - Presentatie
>   - Timesheet
{:#milestone-3 .card .card-block}

> ##### Milestone 4 :checkered_flag:
> ---
> *Release Candidate*-versie **opleveren**.
>
> - Alle functionaliteiten aanwezig.
> - Gebruikersinterface opgepoetst.
> - Klaar voor *Acceptance Test* door klant.
> - Definitieve versie op repository:
>   - Academische Poster
>   - Checklist
>   - Productiedossier
>   - Presentatie
>   - Timesheet
> - Link naar Bitbucket-repository doorsturen naar docent.  
>   Aan de hand van de inzendingen wordt het uurrooster voor het examen opgesteld.
{:#milestone-4 .card .card-block}

> ##### Mondeling Examen :speech_balloon:
> ---
> *Release Candidate*-versie **voorstellen** aan de jury.
>
> - Stel het werkstuk voor in maximaal **15 minuten**:
>   - Live demonstraties
>   - Screencast
> - Afgedrukte versie:
>   - Academische Poster
{:#milestone-exam-oral .card .card-block}

### Source Code Management

#### Branches

Gebruik git met de [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

Nieuwe branch per functionaliteit, nadat de functionaliteit klaar is voor productie (nadat alle testen succesvol verlopen zijn), dan wordt de branch in de master branch gemerged.

Naast de `master` branch 

|  Postfix    | Omschrijving                                                           |
|-------------|------------------------------------------------------------------------|
| `-feature`  | Nieuwe functionaliteit                                                 |
| `-hotfix`   | Voor een bugfix die niet kan wachten op een volgende geplande release. |
{:.table}

#### Commits

Commits moeten voorafgegaan worden door een prefix.

|  Prefix     | Omschrijving                                                           |
|-------------|------------------------------------------------------------------------|
| `[FEATURE]` | Deelfunctionaliteit in een *feature branch.*                           |
| `[WIP]`     | Tussentijdse commits voor WIP, iets wat nog niet af is.                |
| `[FIX]`     | Bugfix                                                                 |
| `[TASK]`    | bijvoorbeeld refactoring (structuur, naamgeving aanpassen), updates van derden toepassen. |
{:.table}

> ##### **Voorbeeld** :package:
> ---
> Branch `account-feature`:
>
> - `[FEATURE]` Add user registration form and save data to db
> - `[TASK]` Rename field `lastname` to `familyname`
{:.alert .alert-success}

Tips
----

> ##### **Tip** :bulb:
> ---
> Schrijf nette code:
>
> - gebruik correct **Engels** voor code, naamgeving, commentaar, etc. Programmeren is een internationale aangelegenheid.   
> - volg een/de standaard, indien mogelijk.
> - let op insprongen en witruimte.
> - gebruik duidelijke naamgevingen (liever te lang dan te kort).
> - schrijf commentaar als de bedoeling van de code voor een developer niet meteen voor de hand ligt.
{:.alert .alert-info}

> ##### **Tip** :bulb:
> ---
> **Vragen, onduidelijkheden, problemen, opmerkingen of zit je compleet vast?**  
> Ga naar het menu "help" rechtsboven.
{:.alert .alert-info}


{% comment %}
<!-- ⚓ Afkortingen -->
{% endcomment %}
*[WIP]:                     Work in Progress

{% comment %}
<!-- ⚓ Hyperlinks -->
{% endcomment %}
[Arteveldehogeschool]:      http://www.arteveldehogeschool.be
[Bitbucket]:                https://bitbucket.org
[Chamilo]:                  http://chamilo.arteveldehs.be
[docent-opr]:               http://www.olivierparent.be
[docent-opr-bitbucket]:     https://bitbucket.org/olivierparent
[docent-opr-mail]:          mailto:olivier.parent@arteveldehs.be?subject=[OLOD]
[docent-pdp]:               http://www.drdynscript.eu
[docent-pdp-bitbucket]:     https://bitbucket.org/drdynscript
[docent-pdp-mail]:          mailto:philippe.depauw@arteveldehs.be?subject=[OLOD]