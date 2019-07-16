'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
   let message = error.message
   let status = error.status

   if(error.name == 'HttpException') {
     message = 'Route not found'
     status = 404
   } else if (error.name == 'Error') {
     message = 'Internal Server Error'
     status = 500
   }
   return response.status(status).send({message})
  }
  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler
