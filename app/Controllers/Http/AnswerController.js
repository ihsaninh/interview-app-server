'use strict'

const Answer = use('App/Models/Answer')
const User = use('App/Models/User')

class AnswerController {
  // async store({ request, response }) {
  //   try {
  //     const answerData = request.all()
  //     const answer = await Answer.create(answerData)
  //     return response.status(201).send(answer)
  //   } catch (e) {
  //     return response.status(400).send({
  //       message: 'Something went wrong!'
  //     })
  //   }
  // }

  async store({request, response}) {
    try {
      const {userId, questionId, answer, attachment} = request.all()
      const user = await User.findBy('id', userId)

      await user.questions().detach(questionId)
      await user.questions().attach(questionId, (row) => {
        if(row.question_id === questionId) {
          row.answer = answer
          row.attachment = attachment
      }
      })
      user.questions = await user.questions().fetch()
      return response.status(201).send(user)
    } catch(e) {
      return response.status(400).send({
        message: 'Something went wrong!'
      })
    }
  }
}

module.exports = AnswerController
