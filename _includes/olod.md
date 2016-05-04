{% comment %}
<!-- ⚓ Afkortingen -->
{% endcomment %}
*[{{ site.title }}]:                            {{ site.data.olod.title.full }}
*[{{ site.data.olod.programme.minor.short }}]:  {{ site.data.olod.programme.minor.full }}


{% comment %}
<!-- ⚓ Hyperlinks -->
{% endcomment %}
[{{ site.data.olod.authors[0].name.full }}]:    {{ site.data.olod.authors[0].website }}
[Chamilo]:                                      http://chamilo.arteveldehs.be/index.php?application=weblcms&course={{ site.data.olod.course.chamilo_id }}&tool=document&go=course_viewer
[ECTS-fiche]:                                   {{ site.data.olod.course.ects_fiche }}
