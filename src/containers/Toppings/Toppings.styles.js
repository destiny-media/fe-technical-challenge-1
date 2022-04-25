import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'

export const ContainerWrapper = styled(Container)`
  flex-wrap: wrap; 
  width: 80%; 
  align-self: center;
  flex-direction: row;
`

export const ButtonWrapper = styled(Button)`  
  position: absolute;
  bottom: 2rem; 
  right: 2rem;
`