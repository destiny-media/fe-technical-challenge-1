import React from 'react'
import { CardBase, CardDetail, CardFooter, CardImage } from './Card.styles'

const Card = ({ image, title, description, footnote, isActive, onClick }) => (
  <CardBase $isActive={isActive} onClick={onClick}>
    {image && <CardImage src={image} alt={title} />}
    <CardDetail>
      <h4>{title}</h4>
      {description && <span>{description}</span>}
      {footnote && <CardFooter>{footnote}</CardFooter>}
    </CardDetail>
  </CardBase>
)

export default Card