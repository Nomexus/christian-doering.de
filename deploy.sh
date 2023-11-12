#!/usr/bin/env bash

export PATH=$PATH:/opt/plesk/node/16/bin/

remotehash=`git ls-remote git@github.com:Nomexus/christian-doering.de.git | grep refs/heads/main | cut -f 1`
# get hash of the last main commit from file
localhash=`cat .currenthash`

if [ "$remotehash" != "$localhash" ]; then
  touch ~/christian-doering.de_deployment.log
  echo -e "----- Deployment Start -----\r\n\r\n" &> ~/christian-doering.de_deployment.log
  npm ci &>> ~/christian-doering.de_deployment.log
  npm run build:client &>> ~/christian-doering.de_deployment.log
  npm run build:server &>> ~/christian-doering.de_deployment.log
  touch tmp/restart.txt
  echo -e "\r\n\r\n----- Deployment End -----" &>> ~/christian-doering.de_deployment.log

  # save latest commit hash in file
  echo "$remotehash" > .currenthash
fi