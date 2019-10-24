'use strict'

const middies = require('./src/middleware/middies')
const { schema } = require('./src/graphql')
const { ApolloServer } = require('apollo-server-lambda')

const server = new ApolloServer({
  schema,
  tracing: true,
  context: {
    findme: 'cool'
  }
})

const handler = server.createHandler()

const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        context
      },
      null,
      2
    )
  }
}

module.exports = {
  hello: middies.configure(hello),
  graphql: handler
}
