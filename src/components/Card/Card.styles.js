import styled from 'styled-components'

export const CardBase = styled.div`  
  display: flex;
  width: 20rem;
  max-height: 22rem;
  margin: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  flex-direction: column;
  border-radius: 0.125rem;
  box-shadow: 0px 1px 2px #0009;
  border-bottom: ${({ $isActive }) => $isActive ? '3px solid green' : 'none'};
`

export const CardImage = styled.img`
  flex: 2;
  max-height: 10rem;
  display: flex;
`

export const CardDetail = styled.div`
  flex: 1;
  display: flex;
  
  flex-direction: column;

  & > span, h4 {
    padding: 0 0.5rem;
  }

  & > span {
    margin-bottom: 0.5rem;
  }
`

export const CardFooter = styled.div`
  align-self: stretch;
  border-top: 1px solid #0002;
  padding: 0.75rem;
  text-align: end;
`