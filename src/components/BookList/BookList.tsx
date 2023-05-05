import React, { PropsWithChildren, useEffect } from 'react';
import { IBook } from '../Book/book.model';
import Book from '../Book/Book';
import styled from 'styled-components';
import './styles.css';

type BookListProps = {
  books: IBook[];
  render: (props: IBook) => JSX.Element;
};

function BookList({ books, render }: BookListProps) {
  return (
    <table id='customers'>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Price</th>
        <th>Language</th>
        <th>Pages</th>
        <th>Genre</th>
        <th>Delete</th>
      </tr>
      {books.map(render).reverse()}
    </table>
  );
}

const Table = styled.table`
  border: 2px solid red;
`;

export default BookList;
