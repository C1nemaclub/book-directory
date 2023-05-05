import React, { useState } from 'react';
import { useForm  } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IBook } from '../Book/book.model';
import Button from '../../shared/Button';


const genres = ['Drama', 'Adventure', 'Romance']

const bookSchema = yup.object().shape({
  title: yup.string().required().nonNullable().max(20),
  language: yup.string().required(),
  genre: yup.string().oneOf(genres).required(),
  price: yup.number().required(),
  pageCount: yup.number().required(),
  publicationDate: yup.date().required(),
  author: yup.string().required()
});


type BookFormProps = {
  submitForm: (book :IBook) => void 
  onCancel: () => void;
  defaultValues?: IBook
}

function BookForm({submitForm, onCancel, defaultValues}: BookFormProps) {

  const { register,handleSubmit, formState: { errors } } = useForm<IBook>({
    resolver: yupResolver(bookSchema), defaultValues
  });
  
  return (
          <FormContainer>
            <Form onSubmit={handleSubmit(submitForm)} data-testid="form">
              <h2>Create a new Book</h2>
              <div className="row">
                <div className="left-col col">
                  <Input {...register('title')} placeholder='Title' />
                  <Input {...register('language')} placeholder='Language' />
                  <Input {...register('price')} placeholder='Price' type='number' />
                  <Input {...register('pageCount')} placeholder='Page Amount' type='number' />
                </div>
                <div className="right-col col">
                  <Input {...register('publicationDate')} placeholder='Release Date' type='date' />
                  <Input {...register('author')} placeholder='Author' />
                  <Select {...register('genre')} data-testid="genre-select">
                    {genres.map(genre => <option key={genre}>{genre}</option>)}
                  </Select>
                </div>
              </div>
              <div className="button-row">
              <Button type='submit'>{defaultValues ? "Edit" : "Create"}</Button>
              <Button type="button" className='cancel-btn' onClick={onCancel}>Cancel</Button>
              </div>
            </Form>
          </FormContainer>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  .row{
    display: flex;
    gap: 20px;
    .col{
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
    }
  }

  .button-row{
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
    button{
      width: 100%;
    }
    button:nth-child(2){
      background: red
    }
  }
h2{
  color: #080957;
  font-size: 2rem;
}
`

const FormContainer = styled.div`
max-width: 800px;
padding: 1em 2em;
display: flex;
align-items: center;
justify-content: center;
`

const Input = styled.input`
  padding: .5em 1em;
  border-radius: 4px;
  outline: none;
  border: 1px solid #6d6c6ccc;
  min-height: 30px;
`;

const Select = styled.select`
  width: 100%;
  background-color: #f5f5f5;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 4px;
  outline: none;
  line-height: 1.15;
  border: 1px solid #6d6c6ccc;
  box-shadow: 0px 10px 20px -18px;
`


export default BookForm;
