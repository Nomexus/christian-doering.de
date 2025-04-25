#!/usr/bin/env bash

git pull
npm ci
npm run build
pm2 restart christian-doering.de