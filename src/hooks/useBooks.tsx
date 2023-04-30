import React, { useState, useEffect, useReducer } from 'react';
import { IBook } from '../components/Book/book.model';
import { bookReducer } from './bookReducer';
import bookService from '../services/bookService';

export type InitialState = {
  books: IBook[];
  loading: boolean;
  error: null | string;
};

export const initialState: InitialState = {
  books: [],
  loading: false,
  error: null,
};

function useBooks() {
  const [state, dispatch] = useReducer(bookReducer, initialState);

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

  useEffect(() => {
    getBooks();
  }, []);

  return {
    getBooks,
    removeBook,
    books: state.books,
    loading: state.loading,
    error: state.error,
  };
}

export default useBooks;
