import { gql } from '@apollo/client';

export const getAuthors = gql`
    {
        authors {
            id
            name
        }
    }
`

export const getAuthorsWithBook = gql`
    {
        authors {
            name
            age
            books {
                name
                genre
            }
        }
    }
`