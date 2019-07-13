'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {

    async index({ request, response, view }) {
    }

    async create({ request, response, view }) {
    }

    async store({ request, response, auth }) {
        try {
            const answerData = request.all()
            const answer = await Answer.create(answerData)
            return response.status(201).send(answer)
          } catch (e) {
            return response.status(400).send({
                message: 'Something went wrong!'
            })
          }
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

module.exports = AnswerController
