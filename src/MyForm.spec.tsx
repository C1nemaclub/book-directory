import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from './MyForm';

const submitHandler = vi.fn();

beforeEach(() => {
  render(<MyForm submitHandler={submitHandler} />);
});

describe('MyForm', () => {
  it('Should submit the form', () => {
    const form = screen.getByTestId('form');
    const input = screen.getByPlaceholderText('Name') as HTMLInputElement;

    expect(input.value).toBe('');
    expect(form).toBeDefined();

    fireEvent.change(input, { target: { value: 'SantiagoVelasquez' } });
    expect(input.value).toBe('SantiagoVelasquez');

    
    fireEvent.submit(form);

    const error = screen.getByText(/Long Name/i);
    expect(error.textContent).toBe('Long name');
    // expect(submitHandler).toHaveBeenCalledWith({ name: 'SantiagoVelasquez' });
  });
});
