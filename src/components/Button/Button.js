import styled from 'styled-components'

const Button = styled.button`
  border: none;
  color: white;
  padding: 0.5rem 0.75rem;
  transition: all 0.5s;
  text-decoration: none;
  border-radius: 0.125rem;
  background-color: green;
  box-shadow: 0px 1px 2px #0009;

  &:hover {
    transform: scale(1.1);
  }
`

export default Button
