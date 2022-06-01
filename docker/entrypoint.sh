#!/bin/bash
set -e

/usr/sbin/sshd -D &

sleep 10s

php-fpm &

wait

exit $?
