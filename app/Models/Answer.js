'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
    users() {
        return this.belongsTo('App/Models/User')
    }
    questions() {
        return this.belongsTo('App/Models/Question')
    }
}

module.exports = Answer
