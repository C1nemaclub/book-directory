import React, { PropsWithChildren } from 'react';
import { IBook } from '../Book/book.model';
import Book from '../Book/Book';

type BookListProps = {
  books: IBook[];
  render: (props: IBook) => JSX.Element;
};
function BookList({ books, render }: BookListProps) {
  return <div>{books.map(render)}</div>;
}

export default BookList;
