#!/bin/bash
# Project blackhole
# This is the script required for autostarting
# all dependent executables
# and is called by rocket.service launcher
# at the boot time
# Author: Martin Shishkov
# fixed with LEDMatrix demo

sudo nohup ~/dot_test/Dot_test &
echo "LEDMatrix demo started"
echo "gulliversoft, starting capture loop" 
tail -F /var/log/syslog | grep --line-buffered 'IEEE 802.11: associated'| { read line; echo $line; sudo dhcpcd; webiopi -c /etc/webiopi/config; exit 0; }
