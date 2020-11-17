import React from 'react'
import { useQuery } from '@apollo/client'

import { getBook } from '../queries/book'

export default function Bookdetails({ bookId }) {

    const variables = {
        id: bookId
    };

    const { error, loading, data } = useQuery(getBook, { variables })

    if (error) {
        return (
            <>
                <p className="error">
                    Ouch book details fetching query failed.
                    Maybe the developper did something wrong
                </p>
                <p className="error">BookId was {bookId}</p>
            </>
        )
    }

    if (loading) {
        return <p>Please wait a bit, data are traveling toward your location</p>
    }


    const { name, genre, author } = data.book;

    return (
        <div className="book-details">
            <h3>{name}</h3>
            <h5>{genre}</h5>
            <p>The book was written by: {author.name}</p>
            <ul>
                <li>author currently is {author.age} years old</li>
                <li>author has written {author.books.length} books as of now</li>
                <li>List of the author's other works</li>
                {
                    author.books.map(({ name, genre }) =>
                        <ul style={{ marginTop: 10 }} key={name}>
                            <li>{name}</li>
                            <li>{genre}</li>
                        </ul>
                    )
                }
            </ul>
        </div >
    )
}
