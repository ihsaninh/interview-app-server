'use strict'

const User = use('App/Models/User')

class UserController {

  async index({ response }) {
    try {
      const users = await User.all()
      return response.status(200).send({
        data: users
      })
    } catch (e) {
      return response.status(400).send({
        message: 'bad request'
      })
    }
  }

  async store({ request, response, auth }) {
    try {
      const user = await User.create(request.all())
      const token = await auth.generate(user)
      Object.assign(user, token)
      return response.json(user)
    } catch (e) {
      console.log(e)
      return response.status(400).send({
        message: 'Something went wrong!'
      })
    }
  }
}

module.exports = UserController
