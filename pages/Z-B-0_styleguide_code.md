---
layout   : page
title    : Code
permalink: styleguide/code/
published: true
tags     : styleguide
---

Code
----

> ##### Zie ook :book:
> ---
> - <http://rouge.jneen.net>
> - <https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers>
{:.card.card-block}

### [Apache HTTP Server][] (`apache`)

{% highlight apache linenos %}
# Ensure that Apache listens on port 80
Listen 80
<VirtualHost *:80>
    DocumentRoot "/www/example1"
    ServerName www.example.com

    # Other directives here
</VirtualHost>

<VirtualHost *:80>
    DocumentRoot "/www/example2"
    ServerName www.example.org

    # Other directives here
</VirtualHost>
{% endhighlight %}{:data-file="httpd.conf"}

---

Command Line
------------

### macOS Terminal (`sh`)

{% highlight sh %}
$ ls
{% endhighlight %}

### Ubuntu Bash (`bash`)

{% highlight bash %}
$ ls
{% endhighlight %}

### Windows Command (`cmd`)

(Geen highlighting.)

{% highlight bat %}
C:\> dir
{% endhighlight %}

### Windows PowerShell (`posh`)

{% highlight posh %}
PS> ls
{% endhighlight %}


{% include afkortingen-cli.md %}
{% include hyperlinks.md %}