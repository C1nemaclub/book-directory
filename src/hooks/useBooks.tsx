import React, { useState, useEffect, useReducer } from 'react';
import { IBook } from '../components/Book/book.model';
import { bookReducer } from './bookReducer';
import bookService from '../services/bookService';

export type InitialState = {
  books: IBook[];
  totalBooks: number;
  loading: boolean;
  error: null | string;
};

export const initialState: InitialState = {
  books: [],
  totalBooks: NaN,
  loading: false,
  error: null,
};

function useBooks() {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  useEffect(()=>{
     dispatch({type: "SET_BOOKS_LENGTH"})
  }, [state.books])


  const getBooks = async () => {
    try {
      dispatch({ type: 'ACTION_START' });
      const data = await bookService.getBooks();
      dispatch({ type: 'GET_BOOKS', payload: data });
      dispatch({ type: 'ACTION_SUCCESS' });
    } catch (e: any) {
      dispatch({ type: 'ACTION_FAILED', payload: 'There was an error' });
    }
  };

  const removeBook = (id: string): void => {
    try {
      dispatch({ type: 'ACTION_START' });      
      bookService.removeBook(id)
      dispatch({ type: 'DELETE_BOOK', payload: id });
      dispatch({ type: 'ACTION_SUCCESS' });
    } catch (e: any) {
      dispatch({ type: 'ACTION_FAILED', payload: 'There was an error deleting a book' });
    }
  };
  
  const addBook = async (book: IBook) => {
    try{
      dispatch({ type: 'ACTION_START' });      
      const response = await bookService.addBook(book)
      dispatch({type: "ADD_BOOK", payload: response})
      dispatch({ type: 'ACTION_SUCCESS' });
    } catch(e){
      dispatch({ type: 'ACTION_FAILED', payload: 'There was an error creating a book' });
    }    
  }

  const editBook =  async (book: IBook) => {
    console.log(book);
    try{
      dispatch({ type: 'ACTION_START' });   
      await bookService.editBook(book)
      getBooks()
      dispatch({ type: 'ACTION_SUCCESS' });    
    } catch(e){
      dispatch({ type: 'ACTION_FAILED', payload: 'Error editing a Book' });
    }
  }


  useEffect(() => {
    getBooks();
  }, []);

  return {
    getBooks,
    removeBook,
    addBook,
    editBook,
    totalBooks: state.totalBooks,
    books: state.books,
    loading: state.loading,
    error: state.error,
  };
}

export default useBooks;
