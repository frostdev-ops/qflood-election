#!/bin/bash
killall -9 node; killall -9 npm
qbittorrent-nox --configuration=./qBitClient/ &
sleep 1s
npm run start &
sleep 1s
npm run start_electron 