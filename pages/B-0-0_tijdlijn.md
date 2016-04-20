---
layout   : page
title    : Tijdlijn
permalink: tijdlijn/
published: true
tags     :
---

<section class="timeline">
    {% for point in site.data.timeline %}
        <article class="timeline-point{% if point.type %}{{ point.type | prepend: ' timeline-point-'}}{% endif %}">
            {% if point.icon %}
            <div class="timeline-icon"><i class="fa fa-{{ point.icon }}"></i></div>
            {% endif %}
            <div class="timeline-content"{% if point.date %} data-date="{{ point.date }}"{% endif %}>
                {% for article in point.cont %}
                    {% if article.h %}
                        <h1>{{ article.h }}</h1>
                    {% endif %}
                    {% if article.l %}
                        <ul>
                        {% for listitem in article.l %}
                            <li>{{ listitem }}</li>
                        {% endfor %}
                        </ul>
                    {% endif %}
                    {% if article.p %}
                        {% for paragraph in article.p %}
                        <p>{{ paragraph }}</p>
                        {% endfor %}
                    {% endif %}
                    {% if article.m %}
                        <h1><a href="{{ article.m.a | prepend: site.baseurl }}">{{ article.m.l }}</a> <small>{{ article.m.s }}</small></h1>
                    {% endif %}
                    {% if article.c %}
                        <h1><a href="https://chamilo.arteveldehs.be/index.php?application=weblcms&course={{ site.data.olod.course.chamilo_id }}&tool=document&go=course_viewer">Uurrooster</a> <small>{{ article.c }} bekend op Chamilo</small></h1>
                    {% endif %}
                {% endfor %}
            </div>
        </article>
    {% endfor %}
</section>


{% comment %}
<!-- ⚓ Afkortingen -->
{% endcomment %}
*[1EK]:                     Eerste Examenkans
*[2EK]:                     Tweede Examenkans
*[TBC]:                     To Be Confirmed
*[TBD]:                     To Be Decided