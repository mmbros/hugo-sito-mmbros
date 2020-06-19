---
title: "Test"
# subtitle: ""
description: "Pagina di prova"
date: 2020-05-30T23:47:12+02:00
url: "/templates/test.gohtml"
---

<div class="file-explorer">
<h3>Path: [[ .path ]]</h3>
<ul class="files">
[[ template 'subtree' .Children ]]
</ul>
<div>


[[ define 'subtree' ]]
[[ range . ]]
<li>[[ .Info.Name ]][[ if .Info.IsDir ]]/[[ end ]]</li>
[[ with .Children ]]
<ul>
[[ template 'subtree' . ]]
</ul>
[[ end ]]
[[ end ]]
[[ end ]]
