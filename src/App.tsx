import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useBooks from './hooks/useBooks';
import BookList from './components/BookList/BookList';
import Book from './components/Book/Book';
import { IBook } from './components/Book/book.model';
import BookForm from './components/BookForm/BookForm';
import { FaPlus } from 'react-icons/fa';
import GlobalStyle from './globalStyles';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const { books, loading, error, removeBook, addBook } = useBooks();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  
  return (
    <>
      <Container>
        <GlobalStyle />
        <BookForm submitForm={addBook} showForm={showForm} onCancel={()=>setShowForm(false)} />
        <FaPlus onClick={() => setShowForm(true)} className='show-form-icon' />
        <BookList
          books={books}
          render={(props: IBook) => (
            <Book key={props.id} onRemove={removeBook} {...props} />
          )}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 80%;
  margin: auto;

  .show-form-icon {
    font-size: 3rem;
    color: dodgerblue;
    cursor: pointer;
  }
`;

export default App;
