import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import Container from '../Container'

const ThankYou = () => (
  <Container>
    <h1>Thank You!</h1>
    <Button to="/" as={Link} style={{ backgroundColor: 'blue' }}> Go Home</Button>
  </Container>
)

export default ThankYou
