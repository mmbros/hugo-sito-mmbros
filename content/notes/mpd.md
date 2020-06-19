---
title: "MPD"
author: ""
type: ""
date: 2019-09-09T22:30:04+02:00
subtitle: "Music Player Daemon"
image: ""
categories: ["App"]
tags: ["mpd"]
description: "Music Player Daemon (MPD) is a flexible, powerful, server-side application for playing music"
---

## Links

- https://www.musicpd.org/


## Configurazione

1. Impostare la cartella `music` nel file di configurazione `/etc/mpd.conf`

2. Eseguire `mpc update` per caricare i file giá presenti nella cartella music nel
   database di `mpc`. Eseguire `mpc ls` per verificare l'aggiornamento del database.

3. Anche mentre si sta aggiornando il database è possibile riprodurre le canzoni,
   per verificare che funzioni tutto.
   * `mpc add /` per aggiungere tutte le canzoni presenti nel database nella
      coda di riproduzione.
   * `mpc play` per eseguire la prima canzone della coda.



### Errori

#### exception: Failed to open '/etc/mpd.conf': Permission denied

occorre aggiungere il gruppo `audio` all'utente corrente


#### exception: failed to open log file "/var/log/mpd/mpd.log" (config line 40): Permission denied

https://bugs.launchpad.net/ubuntu/+source/mpd/+bug/1842683


$ls -ld /var/log/mpd
drwxr-xr-x 2 mpd audio 4096 Sep 1 00:00 /var/log/mpd/

$ ls -l /var/log/mpd/
total 8
-rw-r--r-- 1 root root 600 Sep 4 09:36 mpd.log
-rw-r--r-- 1 root root 164 Aug 31 21:58 mpd.log.1.gz

$cat /etc/logrotate.d/mpd
/var/log/mpd/*.log {
        weekly
        missingok
        rotate 7
        compress
        notifempty
        copytruncate
        create 600
}

So I'd guess that the create statement in /etc/logrotate.d/mpd should read

   "create 600 mpd audio"

and not just "create 600"




## Clients

Given the following `mpd.conf` server configuration

    ...
	audio_outputi {
		type  "shout"
		name  "MPD stream on Raspberry Pi"
		host  "localhost"  # -> 192.168.1.2
		port  "8000"
		mount "/mpd"
	}
	...


the client will read the stream from URL:

    http://192.168.1.2:8000/mpd

