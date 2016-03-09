---
layout   : page
title    : "Code"
permalink: styleguide/code/
published: true
tags     : styleguide
---

Code
----

### Blade

{% highlight blade linenos %}{% raw %}
{!! !!}
{% endraw %}{% endhighlight %}{:data-file=""}

### CSS

{% highlight css linenos %}
body {
    font-family: sans-serif;
}
{% endhighlight %}{:data-file=""}

### Emmet

{% highlight emmet %}
html:xs
html:5
section>(article*5)>lipsum
{% endhighlight %}

### HTML

{% highlight html linenos %}
<!DOCTYPE html>
<html>
<head>
    <title>html</title>
    <link rel="stylesheet" href="main.css">
</head>
</html>
{% endhighlight %}{:data-file="index.html"}

### Ini

{% highlight ini linenos %}
variables_order = "EGPCS"
{% endhighlight %}{:data-file=""}

### Inky

{% highlight inky linenos %}
<container>
    <row>
        <columns small="12" large="12">
        </columns>
    </row>
</container>
{% endhighlight %}{:data-file=""}


### JSON

{% highlight json linenos %}
[
    { "x": "y" },
    { "y": "z" }
]
{% endhighlight %}{:data-file=""}

### JavaScript

{% highlight js linenos %}
function logger(message) {
    console.log(message);
}
{% endhighlight %}{:data-file="main.js"}

### PHP

{% highlight php linenos %}
<?php

phpinfo();
{% endhighlight %}{:data-file="bestand.php"}

### SCSS

{% highlight scss linenos %}
html {
    body {
        .home {
            color: red;
        }
    }
}
{% endhighlight %}{:data-file="main.scss"}

### SQL

{% highlight sql linenos %}
-- Toon tabellen
SHOW TABLES;
{% endhighlight %}{:data-file="query.sql"}

### TypeScript

{% highlight ts linenos %}
class {
    
}
{% endhighlight %}{:data-file="main.ts"}

### Twig

{% highlight twig linenos %}{% raw %}
{% extends "layout.html" %}
{% block body %}
  <ul>
  {% for user in users %}
    <li><a href="{{ user.url }}">{{ user.username }}</a></li>
  {% endfor %}
  </ul>
{% endblock %}
{% endraw %}{% endhighlight %}{:data-file="index.twig.php"}

### YAML

{% highlight yaml linenos %}
 - X
   - X
{% endhighlight %}{:data-file="Artestead.yaml"}

---

Command Line
------------

### Bash

{% highlight bash %}
$ ls
{% endhighlight %}

### Batch

{% highlight bat %}
C:\> dir
{% endhighlight %}

### PowerShell

{% highlight powershell %}
PS> ls
{% endhighlight %}
