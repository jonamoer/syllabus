---
layout   : page
title    : Code
permalink: styleguide/code/
published: true
tags     : styleguide
---

Code
----

> ##### Zie ook :books:
> ---
> - <http://rouge.jneen.net>
> - <https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers>
{:.card.card-block}

{% comment %}
### [Apache HTTP Server][] (`apache`)
{% endcomment %}

### [Batch](https://technet.microsoft.com/en-us/library/bb490869.aspx) (`bat`)

(Geen highlighting.)

{% highlight bat linenos %}
{% include_relative _code/styleguide/styleguide.bat %}
{% endhighlight %}{:data-file="styleguide.bat"}

### [Blade][] (`blade`)

(Geen highlighting.)

{% highlight blade linenos %}{% raw %}
{!! !!}
{% endraw %}{% endhighlight %}{:data-file="index.blade.php"}

### Configuration (`conf`)

{% highlight conf linenos %}
{% include_relative _code/styleguide/styleguide.conf %}
{% endhighlight %}{:data-file="styleguide.conf"}

### [C#]() (`cs`)

{% highlight cs linenos %}
{% include_relative _code/styleguide/styleguide.cs %}
{% endhighlight %}{:data-file="styleguide.cs"}

### [CSS][] (`css`)

{% highlight css linenos %}
{% include_relative _code/styleguide/styleguide.css %}
{% endhighlight %}{:data-file="styleguide.css"}

### [Emmet][] (`emmet`)

(Geen highlighting.)

{% highlight emmet %}
html:xs
html:5
section>(article*5)>lipsum
{% endhighlight %}

### [Gherkin][] (`gherkin`)

{% highlight gherkin linenos %}
{% include_relative _code/styleguide/styleguide.gherkin %}
{% endhighlight %}{:data-file="styleguide.gherkin"}

### [HTML][] (`html`)

{% highlight html linenos %}
{% include_relative _code/styleguide/styleguide.html %}
{% endhighlight %}{:data-file="styleguide.html"}

### [Ini](https://technet.microsoft.com/en-us/library/cc731332.aspx) (`ini`)

{% highlight ini linenos %}
{% include_relative _code/styleguide/styleguide.ini %}
{% endhighlight %}{:data-file="styleguide.ini"}

### [Inky][] (`inky`)

(Geen highlighting.)

{% highlight inky linenos %}
{% include_relative _code/styleguide/styleguide.inky.html %}
{% endhighlight %}{:data-file="styleguide.inky.html"}

### [JavaScript][ECMAScript] (`js`)

{% highlight js linenos %}
{% include_relative _code/styleguide/styleguide.js %}
{% endhighlight %}{:data-file="styleguide.js"}

### [JSON][] (`json`)

{% highlight json linenos %}
{% include_relative _code/styleguide/styleguide.json %}
{% endhighlight %}{:data-file="styleguide.json"}

### [Liquid][] (`liquid`)

{% highlight liquid linenos %}{% raw %}
{% %}
{{ }}
{% endraw %}{% endhighlight %}{:data-file=""}

### [NGINX][] (`nginx`)

{% highlight nginx linenos %}
http {
    server {
    }
}
{% endhighlight %}{:data-file="nginx.conf"}

### [Markdown][] (`md`)

{% highlight md linenos %}
{% include_relative _code/styleguide/styleguide.md %}
{% endhighlight %}{:data-file="styleguide.md"}

### [Ruby][] (`rb`)

{% highlight rb linenos %}
{% include_relative _code/styleguide/styleguide.rb %}
{% endhighlight %}{:data-file="styleguide.rb"}

### [PHP][] (`php`)

{% highlight php linenos %}
{% include_relative _code/styleguide/styleguide.php %}
{% endhighlight %}{:data-file="styleguide.php"}


### [SCSS][] (`scss`)

{% highlight scss linenos %}
{% include_relative _code/styleguide/styleguide.scss %}
{% endhighlight %}{:data-file="styleguide.scss"}

### Shell Script (`sh`)

{% highlight sh linenos %}
{% include_relative _code/styleguide/styleguide.sh %}
{% endhighlight %}{:data-file="styleguide.sh"}

### [SQL][] (`sql`)

{% highlight sql linenos %}
{% include_relative _code/styleguide/styleguide.sql %}
{% endhighlight %}{:data-file="styleguide.sql"}

### [Swift][] (`swift`)

{% highlight swift linenos %}
{% include_relative _code/styleguide/styleguide.swift %}
{% endhighlight %}{:data-file="styleguide.swift"}

### [TypeScript][] (`ts`)

{% highlight ts linenos %}
{% include_relative _code/styleguide/styleguide.ts %}
{% endhighlight %}{:data-file="styleguide.ts"}

### [Twig][] (`twig`)

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

### [XML][] (`xml`)

{% highlight xml linenos %}
{% include_relative _code/styleguide/styleguide.xml %}
{% endhighlight %}{:data-file="styleguide.xml"}

### [YAML][] (`yml`)

{% highlight yml linenos %}
{% include_relative _code/styleguide/styleguide.yaml %}
{% endhighlight %}{:data-file="styleguide.yaml"}

---

Command Line
------------

### macOS Terminal (`zsh`)

{% highlight zsh %}
$ ls
{% endhighlight %}

### Ubuntu Bash (`bash`)

{% highlight bash %}
$ ls
{% endhighlight %}

### Windows Command (`cmd`)

(Geen highlighting.)

{% highlight cmd %}
C:> dir
{% endhighlight %}

### PowerShell (`posh`) for macOS/Linux/Windows

{% highlight posh %}
PS> ls
{% endhighlight %}


{% include afkortingen-cli.md %}
{% include hyperlinks.md %}