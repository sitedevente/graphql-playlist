const { Schema, model } = require('mongoose')

const AuthorSchema = new Schema({
    name: String,
    age: String,
})

const AuthorModel = new model('Author', AuthorSchema)

module.exports = {
    AuthorSchema,
    AuthorModel
}