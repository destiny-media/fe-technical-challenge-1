import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { ButtonWrapper, InfoWrapper } from './Home.styles'

const Home = () => (
  <Container>
    <h1>Destiny Pizzeria</h1>
    <InfoWrapper>Choose The Best Ingredients, Make It Your Own!</InfoWrapper>
    <ButtonWrapper 
      as={Link} 
      to="/Dough" 
    >
      Build Your Pizza Now!
    </ButtonWrapper>
  </Container>
)

export default Home
