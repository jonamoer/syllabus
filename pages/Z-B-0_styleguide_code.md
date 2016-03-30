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
{% endraw %}{% endhighlight %}{:data-file="index.blade.php"}

### CSS

{% highlight css linenos %}
{% include_relative _code/styleguide/styleguide.css %}
{% endhighlight %}{:data-file="styleguide.css"}

### Emmet

{% highlight emmet %}
html:xs
html:5
section>(article*5)>lipsum
{% endhighlight %}

### HTML

{% highlight html linenos %}
{% include_relative _code/styleguide/styleguide.html %}
{% endhighlight %}{:data-file="styleguide.html"}

### Ini

{% highlight ini linenos %}
{% include_relative _code/styleguide/styleguide.ini %}
{% endhighlight %}{:data-file="styleguide.ini"}

### Inky

{% highlight inky linenos %}
{% include_relative _code/styleguide/styleguide.inky.html %}
{% endhighlight %}{:data-file="styleguide.inky.html"}


### JSON

{% highlight json linenos %}
{% include_relative _code/styleguide/styleguide.json %}
{% endhighlight %}{:data-file="styleguide.json"}

### JavaScript

{% highlight js linenos %}
{% include_relative _code/styleguide/styleguide.js %}
{% endhighlight %}{:data-file="styleguide.js"}

### PHP

{% highlight php linenos %}
{% include_relative _code/styleguide/styleguide.php %}
{% endhighlight %}{:data-file="styleguide.php"}

### SCSS

{% highlight scss linenos %}
{% include_relative _code/styleguide/styleguide.scss %}
{% endhighlight %}{:data-file="styleguide.scss"}

### SQL

{% highlight sql linenos %}
{% include_relative _code/styleguide/styleguide.sql %}
{% endhighlight %}{:data-file="styleguide.sql"}

### TypeScript

{% highlight ts linenos %}
{% include_relative _code/styleguide/styleguide.ts %}
{% endhighlight %}{:data-file="styleguide.ts"}

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
{% include_relative _code/styleguide/styleguide.yaml %}
{% endhighlight %}{:data-file="styleguide.yaml"}

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
