import { useSentry } from '@envelop/sentry'

import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import Sentry from 'src/lib/sentry'
import services from 'src/services/**/*.{js,ts}'

const extraPlugins = [
  useSentry({
    includeRawResult: false, // set to `true` in order to include the execution result in the metadata collected
    includeResolverArgs: false, // set to `true` in order to include the args passed to resolvers
    includeExecuteVariables: false, // set to `true` in order to include the operation variables values
    // appendTags: (args) => { return { ... }} // if you wish to add custom "tags" to the Sentry transaction created per operation
  }),
]

export const handler = createGraphQLHandler({
  getCurrentUser,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
