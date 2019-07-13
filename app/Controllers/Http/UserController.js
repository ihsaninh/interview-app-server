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

    async create({ request, response, view }) {
    }

    async store({ request, response, auth }) {
      let user = await User.create(request.all())
      let token = await auth.generate(user)
      Object.assign(user, token)
      return response.json(user)
      }

    async show({ params, request, response, view }) {
    }

    async edit({ params, request, response, view }) {
    }

    async update({ params, request, response }) {
    }

    async destroy({ params, request, response }) {
    }
}

module.exports = UserController
