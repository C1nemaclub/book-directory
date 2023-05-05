import axios from 'axios';
import { API_URL } from '../constants';
import { IBook } from '../components/Book/book.model';

const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const removeBook = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response;
};

const addBook = async (book: IBook): Promise<IBook> => {
  return (await axios.post(API_URL, book)).data
}

const editBook = async (book: IBook): Promise<any> => {
  return (await axios.put(`${API_URL}/${book.id}`, book)).data
}

const bookService = {
  getBooks,
  removeBook,
  addBook,
  editBook
};

export default bookService;
