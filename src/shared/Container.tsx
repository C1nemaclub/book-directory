import React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap: number;
  children: React.ReactNode;
};
function Container({ direction, children, gap }: ContainerProps) {
  return <FlexContainer direction={direction} gap={gap}>{children}</FlexContainer>;
}

const FlexContainer = styled.div<{ direction: 'row' | 'column' | 'row-reverse' | 'column-reverse', gap: number }>`
  padding: 1em 2em;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  gap: ${props => props.gap};;
  flex-direction: ${props => props.direction};
`;

export default Container;
