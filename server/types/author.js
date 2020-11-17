const types = `
	
	type Author {
		id: ID
		name: String
		age: Int
		books: [Book]
	}

	type AddAuthorMutationResponse implements MutationResponse {
		code: String!
		success: Boolean!
		message: String!
		author: Author
	}

`

const queries = `
	authors: [Author]
	author(id: ID!): Author
`

const mutations = `
	addAuthor(name: String, age: String): AddAuthorMutationResponse
`

module.exports = {
	types,
	queries,
	mutations
}