import styled from 'styled-components'

const Input = styled.input`
  width: ${({ $small }) => $small ? '45%' : '100%'};
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: ${({ $isValid }) => $isValid === false ? '3px solid #CB0E0E;' : '3px solid #ccc;'};
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

  &:focus {
    border: 3px solid #555;
  }
`

export default Input
