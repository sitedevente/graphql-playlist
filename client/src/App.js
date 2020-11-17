import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import BookList from './components/BookList'
import AddBook from './components/AddBook'
import BookDetails from './components/BookDetails'

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache: new InMemoryCache(),
});

function App() {

  const [bookId, setBookId] = useState('');

  const clickOnBook = (id) => {
    console.log('book clicked', id)
    setBookId(id)
  }

  return (
    <ApolloProvider client={client}>
      <div className="flex">
        <div className="main">
          <h1>Ninja's Reading List</h1>
          <BookList handleClick={clickOnBook} />
        </div>
        <div className="drawer">
          <AddBook />
          {bookId !== '' && <BookDetails bookId={bookId} />}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
