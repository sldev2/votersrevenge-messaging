const users = require('./users/users.service.js')
const messages = require('./messages/messages.service.js')
const rooms = require('./rooms/rooms.service.js')
const subscriptions = require('./subscriptions/subscriptions.service.js')
const posses = require('./posses/posses.class.js')
const posseEdition = require('./posseEditions/posseEditions.class.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(messages)
  app.configure(rooms)
  app.configure(subscriptions)
  app.configure(posses)
  app.configure(posseEdition)
}
