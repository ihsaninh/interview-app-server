'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('question_id').unsigned().references('id').inTable('questions')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('answer').notNullable()
      table.string('attachment').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
