const types = `
	
	# This "Book" type defines the queryable fields for every book in our data source.
	type Book {
		id: ID
		name: String
		genre: String
		author: Author
	}	

	type AddBookMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		book: Book
	}

`

const queries = `
	books: [Book!]!
	book(id: ID!): Book
`

const mutations = `
	addBook(authorId: ID!, name: String, genre: String): AddBookMutationResponse!
`

module.exports = {
	types,
	queries,
	mutations
}