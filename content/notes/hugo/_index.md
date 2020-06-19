---
title: "Hugo"
subtitle: "Static site generator"
date: 2020-03-27T18:35:32+01:00
lastmod: 2020-04-12T17:38:34+0200
draft: true
categories: "App"
---

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


### How to HTTPS with Hugo LetsEncrypt and HAProxy

https://skarlso.github.io/2017/02/15/how-to-https-with-hugo-letsencrypt-haproxy/


### Deploy a Hugo Blog Github Actions

https://skarlso.github.io/2019/03/19/deploy-hugo-blog-github-actions/


[Deploy](./deploy-hugo-site-on-github/)


## Usare HUGO per costruire template dinamici

1. Creare una nuova sezione ad-hoc di nome `templates`

       mkdir content/templates

2. Creare la pagina `_index.md`

       hugo new templates/_index.md

3. Configurare le opzioni di build della sezione e delle pagine figlie come segue.
   Importante é fare in modo che la sezione non venga inclusa nelle liste.

       # section build options:
       _build:
         render: false
         list: false
       
       # children build options with cascade
       cascade:
         _build:
           render: true
           list: false

4. Per evitare che ciascuna pagina figlia sia creata all'interno di una cartella specifica,
   per ogni pagina specificare il valore di `url` all'interno del front-matter di
   di ogni pagina figlia.
   Ad esempio per la pagina `templates/login.html` impostare 

       url: "/templates/login.gohtml"

