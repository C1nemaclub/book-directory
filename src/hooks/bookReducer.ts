import { IBook } from '../components/Book/book.model';
import { InitialState, initialState } from './useBooks';

type ActionWithPayload = {
  type: 'ADD_BOOK';
  payload: IBook;
};

type ActionWithArray = {
  type: 'GET_BOOKS';
  payload: IBook[];
};

type ActionWithoutPayload = {
  type: 'DELETE_BOOK';
  payload: string
};

type ActionStart = {
  type: 'ACTION_START';
};

type ActionSuccess = {
  type: 'ACTION_SUCCESS';
};

type ActionFailed = {
  type: 'ACTION_FAILED';
  payload: string | null;
};

type ActionBooksLength = {
  type : "SET_BOOKS_LENGTH"
}

export type Action =
  | ActionWithPayload
  | ActionWithArray
  | ActionWithoutPayload
  | ActionStart
  | ActionSuccess
  | ActionFailed 
  | ActionBooksLength;

export const bookReducer = (state: InitialState, action: Action) => {
  const { type } = action;
  switch (type) {
    case 'ADD_BOOK':
      return { ...state, books: [...state.books, action.payload] };
    case 'GET_BOOKS':
      return { ...state, books: action.payload };
    case "DELETE_BOOK":
      return {...state, books: state.books.filter(item => {return item.id !== action.payload})}
    case "SET_BOOKS_LENGTH":
      return {...state, totalBooks: state.books.length }
    case 'ACTION_START':
      return { ...state, loading: true };
    case 'ACTION_SUCCESS':
      return { ...state, loading: false };
    case 'ACTION_FAILED':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
