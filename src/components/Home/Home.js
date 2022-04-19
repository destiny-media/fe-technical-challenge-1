import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import Container from '../Container'

const Home = () => (
  <Container>
    <h1>Destiny Pizzeria</h1>
    <h3>Choose The Best Ingredients, Make It Your Own!</h3>
    <Button 
      as={Link} 
      to="/Dough" 
      style={{ backgroundColor: '#2E86AB' }}
    >
      Build Your Pizza Now!
    </Button>
  </Container>
)

export default Home
