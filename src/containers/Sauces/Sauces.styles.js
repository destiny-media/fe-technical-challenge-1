import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../../components/Container'

export const ContainerWrapper = styled(Container)`
  flex-wrap: wrap; 
  margin: 4rem; 
  flex-direction: row;
`

export const ButtonWrapper = styled(Button)`  
  position: absolute;
  bottom: 2rem; 
  right: 2rem;
`