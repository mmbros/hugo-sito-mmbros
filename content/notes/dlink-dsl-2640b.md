---
title: "Dlink DSL-2640B"
subtitle: ""
description: ""
date: 2020-06-11T23:48:51+02:00
# lastmod: 
# categories: []
# tags: []
draft: true
---


## Download for DSL-2640B

* https://www.dlink.com.sg/dsl-2640b/
* Product Overview: DSL-2640B_Datasheet
* Manual
* Quick Installation Guide





## Set one DSL-2640B as repeater (HOW TO)

http://forums.dlink.com/index.php?topic=59005.0


* __Main Router__ - The one connected to the Internet.
* __Secondary Router__ - The one used to extend your wifi

### Step 1: Main Router
1. Login to the admin page on your browser, default is 192.168.1.1
2. Status page - Write down the Wireless MAC address e.g.. 11:22:33:44:55:66
3. Setup > Wireless settings > Configure your wireless settings (SSID,Password, Channel etc)
4. Setup > Local Network
The default IP address is 192.168.1.1, leave it as it is.
Set the DHCP IP address range > 192.168.1.10 to 192.168.1.254
5. Apply settings and the router should save and reboot.
6. Turn it off.

### Step 2: Secondary Router
(I suggest resetting it to default settings - press the little button on the
back while it's switched on for a few seconds until it reboots)

1. Login to the admin page 192.168.1.1
2. Again take note of the Wireless MAC address e.g. AA:BB:CC:DD:EE:FF
3. Configure the wireless settings just like in the main router (both routers
   must have the same settings especially the channel)
4. Change the IP address to 192.168.1.2
5. Turn off DHCP server
6. Apply and let it reboot.  At this time since the DHCP server is turn off so
   you have to manually set your laptop/PC's IP address if it conflicts
   with the router's.. I changed mine to 192.168.1.11 during the process.
7. Login to the router on 192.168.1.2
8. Once in enter 192.168.1.2/wlwds.cmd
9. You're now in the Bridge mode page.
   AP mode - ACCESS POINT
   Bridge restrict - Enabled
   Remote Bridge MAC address - enter the MAIN router's MAC address into one of
   the boxes (e.g.. 11:22:33:44:55:66)
10. Click SAVE/APPLY
11. Turn off after the secondary router has rebooted.

### Step 3: Main Router
1. Turn it on
2. Login 192.168.1.1 then to 192.168.1.1/wlwds.cmd
3. Turn on the secondary router
4. Once the secondary router is turned on in the main router's Bridge mode page change the Bridge restrict to
Enabled(Scan).. it should start scanning for the secondary router's MAC address. If everything's goes to plan the
secondary router should show in the list with the correct SSID and BBSID (AA:BB:CC:DD:EE:FF) and a checkbox next to it. Check the checkbox, click SAVE/APPLY and let it reboot.

Reboot both routers.. check if you can log in to both 192.168.1.1 and 192.168.1.2.
