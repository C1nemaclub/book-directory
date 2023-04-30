import { render, screen, fireEvent } from '@testing-library/react';
import { BookProps } from './Book';
import Book from './Book';

const props: BookProps = {
  title: 'Misery',
  authors: ['Santiago', 'Sam'],
  publicationDate: '1/19/1960',
  id: '4563jkgr-132',
  genre: 'drama',
  language: 'english',
  pageCount: 454,
  price: 250,
  onRemove: vi.fn(),
};

beforeEach(() => {
  render(<Book {...props} />);
});

describe('Book ', () => {
  it('Should render the Book', () => {
    expect(render(<Book {...props} />).baseElement).toBeDefined();
  });
  it('Should render the Book title', () => {
    const bookTitle = screen.getByText(/Misery/);
    expect(bookTitle.textContent).toEqual('Misery');
  });
  it('Should call onRemove with the correct Id', () => {
    const deleteButton = screen.getByText(/delete/i);
    deleteButton.click();
    expect(props.onRemove).toHaveBeenCalledWith('4563jkgr-132');
  });
});
