import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  render(<App />);
});

describe('App Component', () => {
  it('Should multiply two numbers', () => {
    expect(2 * 2).toEqual(4);
  });
});
