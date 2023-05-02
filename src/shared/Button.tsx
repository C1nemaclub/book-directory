import React from 'react';
import styled from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     children: React.ReactNode;
// }

function Button(props: ButtonProps) {
  const {children} = props
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: dodgerblue;
  cursor: pointer;
  transition: border-color 0.25s;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  &:hover {
    border-color: #363636;
  }
`;

export default Button;
