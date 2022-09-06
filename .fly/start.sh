#!/bin/sh

set -ex

if [ -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

# inspired from https://fly.io/docs/app-guides/multiple-processes/
yarn rw exec updateQueue &
npx rw-server --port ${PORT} $@
