import React from 'react';
import { IBook } from './book.model';

export type BookProps = IBook & {
  onRemove: (id: string) => void;
  onEdit: (book: IBook) => void;
};

function Book(props: BookProps) {
  const { title, id, price, pageCount, language, genre,publicationDate, author, onRemove, onEdit } = props;

  return (
    <tr onClick={()=>onEdit({title, id, price, pageCount, language, genre, publicationDate, author})}>
      <td>{title}</td>
      <td>{author}</td>
      <td>{price}</td>
      <td>{language}</td>
      <td>{pageCount}</td>
      <td>{genre}</td>
      <td><button onClick={() => onRemove(id)}>Delete</button></td>
    </tr>
  );
}

export default Book;
