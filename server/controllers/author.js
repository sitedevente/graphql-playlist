const { AuthorModel } = require('../models/author')

class AuthorController {

    // Here book should have a name, a genre and an authorId
    static async create(author) {
        console.log('inside controller', author)
        
        const newAuthor = new AuthorModel(author)
        return await newAuthor.save()
    }

    static async findAll() {
        return await AuthorModel.find();
    }

    static async findOne(id) {
        return await AuthorModel.findById(id);
    }

    static async update(id) {

    }

    static async delete(id) {

    }

}

module.exports = {
    AuthorController
}