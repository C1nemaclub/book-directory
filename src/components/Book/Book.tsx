import React from 'react';
import { IBook } from './book.model';

export type BookProps = IBook & {
  onRemove: (id: string) => void;
};

function Book(props: BookProps) {
  const { title, id, onRemove } = props;

  return (
    <div>
      <p>{title}</p>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
}

export default Book;
