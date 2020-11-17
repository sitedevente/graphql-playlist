const { BookModel } = require('../models/book')

class BookController {

    // Here book should have a name, a genre and an authorId
    static async create(book) {
        console.log('inside controller', book)

        const newBook = new BookModel(book)
        return await newBook.save()
    }

    static async findAll() {
        return await BookModel.find();
    }

    static async findAllByAuthor(authorId) {
        return await BookModel.find({ "authorId": authorId });
    }

    static async findOne(id) {
        return await BookModel.findById(id);
    }

    static async update(id) {

    }

    static async delete(id) {

    }

}

module.exports = {
    BookController
}