'use strict'

const Question = use('App/Models/Question')

class QuestionController {

  async index({ response }) {
    try {
      const questions = await Question.all()
      return response.status(200).send({
        data: questions
      })
    } catch (e) {
      return response.status(400).send({
        message: 'bad request'
      })
    }
  }

  async create({ request, response, view }) {
  }

  async store({ request, response }) {
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

module.exports = QuestionController
