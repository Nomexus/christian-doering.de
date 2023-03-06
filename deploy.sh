#!/usr/bin/env bash

export PATH=$PATH:/opt/plesk/node/16/bin/

touch ~/christian-doering.de_deployment.log
echo -e "----- Deployment Start -----\r\n\r\n" &> ~/christian-doering.de_deployment.log
npm ci &>> ~/christian-doering.de_deployment.log
npm run build:client &>> ~/christian-doering.de_deployment.log
npm run build:server &>> ~/christian-doering.de_deployment.log
touch tmp/restart.txt
echo -e "\r\n\r\n----- Deployment End -----" &>> ~/christian-doering.de_deployment.log