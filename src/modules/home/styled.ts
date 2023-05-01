import styled from 'styled-components';

interface props {
    variant?: 'text' | 'contained' | 'outlined'
}

export const ButtonHome = styled.button<props>`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  background-color: ${props => props.variant === 'text' ? 'darkBlue' : 'red'};
`;