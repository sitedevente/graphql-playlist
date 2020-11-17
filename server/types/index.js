const { gql } = require('apollo-server');

const book = require('./book')
const author = require('./author')

const typeDefs = gql`
	
	interface MutationResponse {
		code: String!
		success: Boolean!
		message: String!
	}
	
	${book.types}

	${author.types}
	
	type Query {
		${book.queries}

		${author.queries}
	}

	type Mutation {
		${book.mutations}

		${author.mutations}
	}

`;

module.exports = {
	typeDefs
}