import React, { useReducer } from 'react';
import { IBook } from '../components/Book/book.model';
import { bookReducer } from './bookReducer';
import bookService from '../services/bookService';
import useBooks from './useBooks';
import { renderHook, act } from '@testing-library/react';

const mockBooks: IBook[] = [
  {
    title: 'Bride Flight',
    authors: ['Nicoli Coltherd', 'Katharine Newell'],
    publicationDate: '9/10/1960',
    genre: 'biography',
    language: 'Nepali',
    pageCount: 2145,
    price: 836.59,
    id: '471430583-2',
  },
  {
    title: "Santiago's Book",
    authors: ['Santiago', 'Velasquez'],
    publicationDate: '4/5/1947',
    genre: 'adventure',
    language: 'English',
    pageCount: 7894,
    price: 466.48,
    id: '404',
  },
];

// describe('useBooks', () => {
//   it('Should return the book array', async () => {
//     const mockGetBooks = vi
//       .spyOn(bookService, 'getBooks')
//       .mockResolvedValue(mockBooks);

//     const { result } = renderHook(() => useBooks());
//     const { getBooks, books } = result.current;

//     await act(async () => {
//       await getBooks();
//     });

//     expect(mockGetBooks).toHaveBeenCalled();
//     expect(books).toHaveLength(2);
//   });
// });
