import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { ButtonWrapper } from './NotFound.styles'

const NotFound = () => (
  <Container>
    <h1>This Slice Was Not Found!</h1>
    <ButtonWrapper to="/" as={Link}> Go Home</ButtonWrapper>
  </Container>
)

export default NotFound
