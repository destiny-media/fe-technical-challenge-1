import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  max-height: 3rem;
  flex-direction: row;
  align-items: center;  
  align-self: stretch;
  justify-content: center;
  margin: 4rem 1rem 0rem 1rem;
`

export const Circle = styled(NavLink).attrs({
  activeStyle: {
    color: 'white',
    backgroundColor: '#C73E1D',
  }
})`
  height: 2rem;
  width: 2rem;
  color: #C73E1D;
  cursor: pointer;
  line-height: 2rem;
  text-align: center;
  border-radius: 50%;
  text-decoration: none;
  background-color: white;
  border: solid 0.25rem #C73E1D;
`

export const Bar = styled.div`
  width: 5rem;
  height: 0.5rem;
  background-color: #C73E1D;
`