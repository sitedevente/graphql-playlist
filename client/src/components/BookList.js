import React from 'react';
import { useQuery } from '@apollo/client';

import { getBooks } from '../queries/book'

function BookList({ handleClick }) {
    const { loading, error, data } = useQuery(getBooks);

    if (loading) return <p>Loading....</p>

    if (error) return <p>Ops! Something went wrong</p>

    return (
        <div className="book-list">
            {
                data.books.map(({ id, name }, index) => {
                    return (
                        <li onClick={() => handleClick(id)} key={index}>
                            {name}
                        </li>
                    )
                })
            }
        </div>
    )

}

export default BookList;
