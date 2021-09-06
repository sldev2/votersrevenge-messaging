// Initializes the `messages` service on path `/messages`
const { Messages } = require('./messages.class')
const createModel = require('../../models/messages.model')
const hooks = require('./messages.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/messages', new Messages(options, app))

  // // Connect to your MongoDB instance(s)
  // MongoClient.connect('mongodb://localhost:27017/feathers').then(function(db){
  //   // Connect to the db, create and register a Feathers service.
  //   app.use('/messages', service({
  //     Model: db.collection('messages'),
  //     paginate: {
  //       default: 2,
  //       max: 4
  //     }
  // }));

  // Get our initialized service so that we can register hooks
  const service = app.service('messages')

  service.hooks(hooks)

  service.publish((data, context) => {
    return app.channel(`room/${data.room}`)
  })

}
