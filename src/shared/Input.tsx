import React, { forwardRef } from 'react';
import styled from 'styled-components';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  ref: any;
};

const Input = (props: InputProps) => {
  return <TextInput {...props} />;
};

const TextInput = styled.input`
  font-size: max(16px, 1em);
  font-size: 1.1rem;
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid dodgerblue;
  border-radius: 4px;
  color: #363636;
`;

export default Input;
