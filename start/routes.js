'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('users', 'UserController.index')
  Route.post('user', 'UserController.store')
  Route.get('questions', 'QuestionController.index')
  Route.get('question', 'QuestionController.show')
  Route.post('answer', 'AnswerController.store')
}).prefix('api/v1')
