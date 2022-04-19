import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import Container from '../Container'

const NotFound = () => (
  <Container>
    <h1>This Slice Was Not Found!</h1>
    <Button to="/" as={Link} style={{ backgroundColor: '#F18F01' }}> Go Home</Button>
  </Container>
)

export default NotFound
