---
title: "Raspberry Pi"
subtitle: ""
description: ""
date: 2020-06-19T00:37:05+02:00
# lastmod: 
# categories: []
# tags: []
draft: true
---

## Enviroment

### Rete locale

Configurare sul router degli indirizzi IP statici per le interfacce di rete del
RPi. In questo modo sara' possibile connettersi da remoto (ssh, ftp, ecc...)
utilizzando sempre gli stessi indirizzi IP locali, evitando che il DHCP del
router assegni ogni volta indirizzi diversi.

Ad esempio:

    RPI4 ETH  -> 192.168.1.10
    RPI4 WiFi -> 192.168.1.11


#### Configurazione IP statico sul FASTGate

Per configurare l'IP statico sulla rete locale del FASTGate:

1. Andare su `Avanzate` > `Impostazioni LAN` > `Aggiungi Associazione DHCP`

2. Inserire Indirizzo IP e MAC Address del dispositivo 

## Configurazione sistema RPi

### Start

* *NON* connettersi alla rete

### User

- creare un nuovo user
- aggiungere al nuovo user gli stessi gruppi aggiuntivi dello user di default (pi)

### Firewall

* Impostare iptables

      sudo iptables-apply iptables.rules 
 
  NOTA: per mostrare le regole attualmente impostate utilizzare `iptables -S`

* Connettersi alla rete

* Aggiornare i pacchetti

      sudo apt update
      sudo apt ugrade

* Installare `iptables-persistant` e seguire le istruzioni per rendere
  permanenti le regole

      sudo apt install iptables-persistant

  NOTA: per salvare le regole di iptables successivamente all'installazione 
  del pacchetto `iptables-persistant` usare:

      dpkg-reconfigure iptables-persistant

### SSH

https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md

sulla macchina che si collega a RPI

    ssh-keygen
    ssh-copy-id

### Datetime sync

https://lb.raspberrypi.org/forums/viewtopic.php?t=222236

sudo apt install htpdate

timedatectl set-ntp off

service:
/lib/systemd/system/htpdate.service

config:
/etc/default/htpdate

edit HTP_SERVERS in /etc/default/htpdate config file

htpdate -d -q www.corriere.it www.google.it www.wikipedia.it


After: network.target remote-fs.target



### Mount dei dischi

1. creare la cartella di mount

       sudo mkdir /media/usb900

2. ottenere l'UUID del disco

       ll /dev/disk/by-uuid/

3. editare il file `/etc/fstab` ed inserire la riga

       UUID=xyz  /media/usb900  ext4  defaults 0 0


### Suono sul Raspberry

- links

  * http://blog.scphillips.com/posts/2013/01/sound-configuration-on-raspberry-pi-with-alsa/
  * https://jeffskinnerbox.wordpress.com/2012/11/15/getting-audio-out-working-on-the-raspberry-pi/

- module: bcm2835
  
      lsmod | grep bcm2835


#### Headphone analog is Mono


  ``` bash
  $ amixer scontents
  Simple mixer control 'Headphone',0
    Capabilities: pvolume pvolume-joined pswitch pswitch-joined
    Playback channels: Mono
    Limits: Playback -10239 - 400
    Mono: Playback -511 [91%] [-5.11dB] [on]
```
ALSA amixer restituisce mono ma in realtà il suono é stereo!


> Although ALSA reports mono, it's actually playing in stereo. Not sure specifically why ALSA does this, but I think it because we have no control over the left and right channels, just an overall volume, which ALSA gets confused about.
>
> With regard to the volume, ALSA has a maximum of 100%, but Pulseaudio allows you to overegg the pudding with up to 150% or more, BUT this is a recipe for distortion. We/ALSA limit to 100% for that reason - anything more may result in distortion.

Fonte: [analog Sound Raspberry PI 4 is mono, not stereo](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=257785&sid=a60b1d829ee5fc10ad3ef8f52f0f9cce&start=25#p1574840) 

Per verificare che il suono é stereo basta riprodurre un file di test. Ad esempio:

    ffplay -nodisp stereo-test.mp3

## App

### Transmission

* Installare Transmission Daemon

    sudo apt install transmission-daemon

* Editare il file di configurazione

alt-speed-down: 100
alt-speed-up: 10
download-dir: /media/usb900/torrent/complete
encryption: 0 ???
idel-seeding-limit-enabled: true ???
incomplete-dir: /media/usb900/torrent/incomplete
incomplete-dir-enabled: true
peerpp

### Firefox

5. Aprire Firefox e installare il plugin "uBlock Origin"

6. Reboot

### Rust

rust
racer
need nightly rust
per racer need src ->
  rustup component add rust-src

rustup toolchain add nightly
cargo +nightly install racer


### Musica

* mpd
* mpc
* beets




