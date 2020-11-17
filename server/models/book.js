const { Schema, model } = require('mongoose')

const BookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
})

const BookModel = new model('Book', BookSchema)

module.exports = {
    BookSchema,
    BookModel
}