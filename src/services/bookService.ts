import axios from 'axios';
import { API_URL } from '../constants';

const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const removeBook = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response;
};

const bookService = {
  getBooks,
  removeBook,
};

export default bookService;
