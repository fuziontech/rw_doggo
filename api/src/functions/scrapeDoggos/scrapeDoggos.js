import { updateQueue } from 'src/lib/queue'
import Sentry from 'src/lib/sentry'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */

export const handler = async (event, context) => {
  try {
    await updateQueue.add()
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ success: true }),
    }
  } catch (e) {
    Sentry.captureException(e)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ success: false }),
    }
  }
}
