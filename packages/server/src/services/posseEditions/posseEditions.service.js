// Initializes the `messages` service on path `/messages`
const { Messages } = require('./posseEdition.class')
const createModel = require('../../models/messages.model')
const hooks = require('./messages.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/posseEditions', new PosseEditions(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('posseEditions')

  service.hooks(hooks)

  // service.publish((data, context) => {
  //   return app.channel(`room/${data.room}`)
  // })
}