import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { getAuthors } from '../queries/author'
import { getBooks, addBook } from '../queries/book'

function AddBook() {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const { error, loading, data } = useQuery(getAuthors)
    const [addBookMut] = useMutation(addBook);

    if (loading) return <p>Loading....</p>

    if (error) return <p>Ops! Something went wrong</p>

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, genre, authorId);
        addBookMut({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{
                query: getBooks
            }]
        })

        // clear the form fields
        setName('')
        setGenre('')
        setAuthorId('')
    }

    return (
        <>
            <form className="add-book" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" value={genre} onChange={({ target: { value } }) => setGenre(value)} />
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select value={authorId} onChange={({ target: { value } }) => setAuthorId(value)}>
                        <option value={0} hidden>Choose here</option>
                        {
                            data.authors.map(({ id, name }) => {
                                return (
                                    <option key={id} value={id}>{name}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <button type="submit">Add a new book to the list</button>
            </form>
        </>
    )

}

export default AddBook;