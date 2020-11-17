require('dotenv').config()
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose')

const { typeDefs } = require('./types')
const { AuthorController, BookController } = require('./controllers')

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

mongoose.connection

	.once('open', () => {
		console.log('Connected to the mongoDB')
	})

	.once('error', () => {
		console.log('error happened while connecting to mongoose')
	});

// Could be interesting to export the resolvers to make it more readable if it grows larger
// types were already splitted to show an example of how it could looks like 
const resolvers = {
	MutationResponse: {
		__resolveType(mutationResponse, context, info) {
			return null;
		},
	},

	Query: {
		books: async () => {
			return await BookController.findAll();
		},

		book: async (_, { id }) => {
			return BookController.findOne(id);
		},

		authors: async () => {
			return await AuthorController.findAll();
		},

		author: async (_, { id }) => {
			return AuthorController.findOne(id);
		},
	},

	Author: {
		books: ({ id }) => {
			console.log(id, ' retrieve books inside author query')
			return BookController.findAllByAuthor(id);
		}
	},

	Book: {
		author: ({ authorId }) => {
			return AuthorController.findOne(authorId)
		}
	},

	Mutation: {
		addBook: async (_, args) => {
			const newBook = await BookController.create(args)

			return {
				code: 200,
				success: true,
				message: "book should have been added",
				book: newBook
			}
		},

		addAuthor: async (_, args) => {
			const newAuthor = await AuthorController.create(args)

			return {
				code: 200,
				success: true,
				message: "book should have been added",
				author: newAuthor
			}
		},
	}
};

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
