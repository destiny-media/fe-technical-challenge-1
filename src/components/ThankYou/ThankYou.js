import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import { ButtonWrapper, InfoWrapper } from './ThankYou.styles'

const ThankYou = () => (
  <Container>
    <h1>Thank You!</h1>
    <InfoWrapper>Your order will be ready for pickup in 30 minutes.</InfoWrapper>
    <ButtonWrapper to="/" as={Link}> Go Home</ButtonWrapper>
  </Container>
)

export default ThankYou
