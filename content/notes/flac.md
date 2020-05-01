---
title: "FLAC"
subtitle: "Free Lossless Audio Codec"
date: 2019-02-24T18:00:56+01:00
draft: true
tags: ["music"]
categories: ["app"]
description: "FLAC is an audio format similar to MP3, but lossless, meaning that audio is compressed in FLAC without any loss in quality."
---

## How do I split a flac with a cue?

- [source](https://unix.stackexchange.com/questions/10251/how-do-i-split-a-flac-with-a-cue)



I only know a CLI way. You will need `cuetools` and `shntool`.

```
cuebreakpoints file.cue | shnsplit -o flac file.flac
cuetag.sh file.cue "split-*".flac
word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word 
```




