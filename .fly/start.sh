#!/bin/sh

set -ex

if [ -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

# less than ideal because two processes in a vm
npx rw-server --port ${PORT} $@ & yarn rw exec updateQueue
