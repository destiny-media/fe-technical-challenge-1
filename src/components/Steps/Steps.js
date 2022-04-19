import React from 'react'
import { Wrapper, Circle, Bar } from './Steps.styles'

const Steps = () => (
  <Wrapper>
    <Circle to="/Dough">
      1
    </Circle>
    <Bar />
    <Circle to="/Sauce">
      2
    </Circle>
    <Bar />
    <Circle to="/Toppings">
      3
    </Circle>
    <Bar />
    <Circle to="/Checkout">
      4
    </Circle>
  </Wrapper>
)

export default Steps
