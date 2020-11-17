import { gql } from '@apollo/client';

export const getBooks = gql`
    {
        books {
            id
            name
        }
    }
`

export const getBook = gql`
    query($id: ID!){
        book(id: $id) {
            name
            genre
            author {
                name
                age
                books {
                    name
                    genre
                }
            }
        }
    }
`

export const addBook = gql`
    mutation($authorId: ID!, $name: String!, $genre: String!) {
        addBook( authorId: $authorId, name: $name, genre: $genre) {
            success
            message
            book {
                id
                name
            }
        }
    }
`