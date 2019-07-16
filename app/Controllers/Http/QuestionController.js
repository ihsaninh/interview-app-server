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

  async show({ request, response }) {
    try {
      const {number} = request.get('number')
      let question;
      let question_count
      if (number) {
        question = await Question.findBy('number', number)
        const countAll = await Question.query().count()
        question_count = countAll[0]['count(*)']
      } else {
        question = await Question.findBy('number', 1)
      }
      return response.status(200).send({
        question: question,
        question_count: question_count
      })
    } catch (e) {
      return response.status(400).send({
        'message':'Something went wrong!'}
        )
    }
  }

}

module.exports = QuestionController
