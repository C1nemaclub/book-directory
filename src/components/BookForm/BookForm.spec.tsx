import { act } from 'react-dom/test-utils';
import BookForm from './BookForm';
import { render, screen, fireEvent } from '@testing-library/react';

const formProps = {
  submitForm: vi.fn(),
};

// const submitForm = vi.fn();
beforeEach(() => {
  // render(<BookForm submitForm={submitForm} />);
});

describe('BookForm', () => {
  // it('Should change the input onChange', () => {
  //   const submitForm = vi.fn();

  //   render(<BookForm submitForm={submitForm} />);

  //   const titleInput = screen.getByPlaceholderText(
  //     /title/i
  //   ) as HTMLInputElement;
  //   expect(titleInput.textContent).toBe('');
  //   fireEvent.change(titleInput, { target: { value: 'Booky' } });
  //   expect(titleInput.value).toBe('Booky');
  // });

  it('Should update the form values', () => {
    const submitForm = vi.fn();
    render(<BookForm submitForm={submitForm} />);
    const form = screen.getByTestId('form')

    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'The Alchemist' } });
    fireEvent.change(screen.getByPlaceholderText('Language'), { target: { value: 'English' } });
    fireEvent.change(screen.getByPlaceholderText('price'), { target: { value: 10 } });
    fireEvent.change(screen.getByPlaceholderText('Page Amount'), { target: { value: 200 } });
    fireEvent.change(screen.getByPlaceholderText('Release Date'), { target: { value: '10/12/1998' } });
    fireEvent.change(screen.getByPlaceholderText('Author'), { target: { value: 'Paulo Coelho' } });
    fireEvent.change(screen.getByTestId('genre-select'), { target: { value: 'Adventure' } });


    fireEvent.submit(form);
    
    expect(submitForm).toHaveBeenCalled();
  });
});


// <Input {...register('title')} placeholder='Title' />
// <Input {...register('language')} placeholder='Language' />
// <Input {...register('price')} placeholder='price' type='number' />
// <Input {...register('pageCount')} placeholder='Page Amount' type='number' />
// <Input {...register('publicationDate')} placeholder='Release Date' type='date' />
// <Input {...register('author')} placeholder='Author' />
// <Select {...register('genre')} data-testId="genre-select">
//   {genres.map(genre => <option key={genre}>{genre}</option>)}
// </Select>