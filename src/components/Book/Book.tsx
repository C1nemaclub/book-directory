import React from 'react';
import { IBook } from './book.model';

export type BookProps = IBook & {
  onRemove: (book: IBook) => void;
  onEdit: (book: IBook) => void;
};

function Book(props: BookProps) {
  const { title, id, price, pageCount, language, genre,publicationDate, author, onRemove, onEdit } = props;
  const book = { title, id, price, pageCount, language, genre, publicationDate, author }

  return (
    <tr >
      <td>{title}</td>
      <td>{author}</td>
      <td>{price}</td>
      <td>{language}</td>
      <td>{pageCount}</td>
      <td>{genre}</td>
      <td><button onClick={() => onRemove(book)}>Delete</button></td>
      <td><button onClick={()=>onEdit(book)}>Edit</button></td>
    </tr>
  );
}

export default Book;
