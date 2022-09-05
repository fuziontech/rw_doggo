#!/bin/sh

set -ex

if [ -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

# npx rw-server --port ${PORT} $@ && yarn rw exec updateQueue
npx rw-server --port ${PORT} $@
