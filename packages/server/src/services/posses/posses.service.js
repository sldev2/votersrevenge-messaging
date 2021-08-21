// Initializes the `rooms` service on path `/rooms`
const { Rooms } = require('./rooms.class')
const createModel = require('../../models/rooms.model')
const hooks = require('./rooms.hooks')

module.exports = async function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    multi: ['patch']
  }

  // Initialize our service with any options it requires
  app.use('/posses', new Posses(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('posses')

  service.hooks(hooks)

  // Ensure a #general room exists on bootup
  // try {
  //   const posses = await service.find({
  //     query: {
  //       name: 'general'
  //     },
  //     paginate: false
  //   })
  //   if (!rooms.length) {
  //     console.log('Creating initial `general` room')
  //     await service.create({
  //       name: 'general'
  //     })
  //   }
  // } catch (err) {
  //   console.error('Error: ', err.message)
  // }
}
