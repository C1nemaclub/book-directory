import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useBooks from './hooks/useBooks';
import BookList from './components/BookList/BookList';
import Book from './components/Book/Book';
import { IBook } from './components/Book/book.model';
import BookForm from './components/BookForm/BookForm';
import GlobalStyle from './globalStyles';
import './App.css';

function App() {
  const { books, loading, error, removeBook } = useBooks();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <GlobalStyle />
      <Button>Typescript</Button>
      <BookForm />
      <BookList
        books={books}
        render={(props: IBook) => (
          <Book key={props.id} onRemove={removeBook} {...props} />
        )}
      />
    </>
  );
}

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: dodgerblue;
  cursor: pointer;
  transition: border-color 0.25s;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  &:hover {
    border-color: #363636;
  }
`;

export default App;
