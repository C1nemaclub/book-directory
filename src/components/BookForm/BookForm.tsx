import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../shared/Input';

function BookForm() {
  const data = useForm();
  console.log(data);

  return (
    <div>
      <Input placeholder='Hello' className='my-input' />
    </div>
  );
}

export default BookForm;
