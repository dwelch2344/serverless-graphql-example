const middy = require('middy')
const { jsonBodyParser, httpErrorHandler } = require('middy/middlewares')

const configure = handler =>
  middy(handler)
    .use(httpErrorHandler())
    .use(jsonBodyParser())

module.exports = {
  configure
}
