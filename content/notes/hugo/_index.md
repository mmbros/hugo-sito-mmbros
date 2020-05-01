---
title: "Hugo"
subtitle: "Static site generator"
date: 2020-03-27T18:35:32+01:00
lastmod: 2020-04-12T17:38:34+0200
draft: true
categories: "App"
---

## Test


## Riferimenti

* [Hugo documentation](https://gohugo.io/documentation/)
* [regisphilibert.com](https://regisphilibert.com/)

## Temi

* [Minimo](https://themes.gohugo.io//theme/minimo/) Minimalist theme for Hugo

## Faq

### Rendere visibile il sito sulla rete locale

Se lindirizzo di rete del PC su cui gira il server Hugo è `192.168.1.12` 
per rendere visibile il sito sull rete locale eseguire:

```
hugo server -w --bind=0.0.0.0 --baseUrl=192.168.1.12
```


### Create Section Taxonomies

* https://github.com/gohugoio/hugo/issues/1208
* https://discourse.gohugo.io/t/create-section-taxonomies/343
