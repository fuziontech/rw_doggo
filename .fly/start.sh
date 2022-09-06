#!/bin/sh

set -ex

if [ -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

# inspired from https://fly.io/docs/app-guides/multiple-processes/
set -m # to make job control work
npx rw-server --port ${PORT} $@ &
yarn rw exec updateQueue &
fg %1 # gross!
