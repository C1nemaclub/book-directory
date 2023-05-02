import React, { FormEvent, useState } from 'react';

type MyFormProps = {
  submitHandler: ({}: { name: string }) => void;
};
function MyForm({ submitHandler }: MyFormProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.length > 10) {
      setError('Long name');
      return;
    }
    submitHandler({ name: name });
    setError('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} data-testid='form'>
        <input
          value={name}
          name='name'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <p>{error}</p>
    </>
  );
}

export default MyForm;
