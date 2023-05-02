import React from 'react';
import { IBook } from './book.model';

export type BookProps = IBook & {
  onRemove: (id: string) => void;
};

function Book(props: BookProps) {
  const { title, id, price, pageCount, language, genre, onRemove } = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{language}</td>
      <td>{pageCount}</td>
      <td>{genre}</td>
      <td><button onClick={() => onRemove(id)}>Delete</button></td>
    </tr>
  );
}

export default Book;
