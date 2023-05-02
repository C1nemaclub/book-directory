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

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<IBook | null>(null)
  const { books, loading, error, totalBooks, removeBook, addBook } = useBooks();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  const edit = (book: IBook) => {
    console.log(book);
    setIsModalOpen(true)
    setModalContent(book)
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
        <Modal isOpen={isModalOpen} ariaHideApp={false} style={modalStyle} onRequestClose={()=>setIsModalOpen(false)}>
          <div>
            <h1>{modalContent?.author}</h1>
            <Button style={{backgroundColor: 'red'}} onClick={()=>setIsModalOpen(false)}>Close</Button>
          </div>
        </Modal>
        <BookForm submitForm={addBook} showForm={showForm} onCancel={()=>setShowForm(false)} />
        <FaPlus onClick={() => setShowForm(true)} className='show-form-icon' />
        <h3>{totalBooks} Books in Total</h3>
        <BookList
          books={books}
          render={(props: IBook) => (<Book key={props.id} onRemove={removeBook} onEdit={edit} {...props} />)} />
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
