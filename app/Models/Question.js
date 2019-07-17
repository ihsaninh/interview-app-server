'use strict'

const Model = use('Model')

class Question extends Model {
    users() {
    	return this.belongsToMany('App/Models/User').pivotTable('answers').withTimestamps()
    }
}

module.exports = Question
