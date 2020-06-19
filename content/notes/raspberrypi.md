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

## Sistema

### User

- creare un nuovo user
- aggiungere al nuovo user gli stessi gruppi aggiuntivi dello user di default (pi)



### Firewall

...

### Mount dei dischi

1. creare la cartella di mount

       sudo mkdir /media/usb900

2. ottenere l'UUID del disco

       ll /dev/disk/by-uuid/

3. editare il file `/etc/fstab` ed inserire la riga

       UUID=xyz  /media/usb900  ext4  defaults 0 0


       


## App

### Musica

* mpd
* mpc
* beets




