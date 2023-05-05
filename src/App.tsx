import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useBooks from './hooks/useBooks';
import BookList from './components/BookList/BookList';
import Book from './components/Book/Book';
import { IBook } from './components/Book/book.model';
import BookForm from './components/BookForm/BookForm';
import { FaPlus } from 'react-icons/fa';
import GlobalStyle from './globalStyles';
import Modal from 'react-modal'
import './App.css';
import Button from './shared/Button';

Modal.setAppElement("#root")

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeBook , setActiveBook] = useState<IBook>()
  const { books, loading, error, totalBooks, removeBook, addBook, editBook} = useBooks();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const handleBookEdit = (book: IBook) => {
    setIsModalOpen(true)
    setActiveBook(book)
  }

  const handleBookCreate = () => {
    setIsModalOpen(true)
    setActiveBook(undefined)
  }

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay:{
      backgroundColor: 'rgba(94, 94, 94, 0.7)'
    }
  };
  
  return (
    <>
      <Container>
        <GlobalStyle />
        <Modal isOpen={isModalOpen} onRequestClose={()=>setIsModalOpen(false)} style={modalStyle}>
          <BookForm defaultValues={activeBook} submitForm={activeBook ? editBook : addBook} onCancel={()=>setIsModalOpen(false)} />
        </Modal>
        <FaPlus onClick={handleBookCreate} className='show-form-icon' />
        <h3>{totalBooks} Books in Total</h3>
        <BookList
          books={books}
          render={(props: IBook) => (<Book key={props.id} onRemove={removeBook} onEdit={handleBookEdit} {...props} />)} />
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
