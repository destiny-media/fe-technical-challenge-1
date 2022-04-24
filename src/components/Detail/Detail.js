import React from 'react'
import { DetailsSection, PizzaImage, PizzaWrapper, TotalWrapper } from './Detail.styles'


const Detail = ({dough, sauce, toppings, details}) => (
    
    <DetailsSection>
        <h1>Order</h1>
        <PizzaImage src={dough.image} alt={dough.title} />

        <h4>Dough</h4>
        <PizzaWrapper>
        <span> {dough.label} </span> <span>${dough.price?.toFixed(2)}</span>
        </PizzaWrapper>

        <h4>Sauce</h4>
        <PizzaWrapper>
        <span> {sauce.label} </span> <span>${sauce.price?.toFixed(2)}</span>
        </PizzaWrapper>

        <h4>Toppings</h4>
        {toppings.map((topping,i) => {
            return (<PizzaWrapper key={i}><span key={i}>{topping.label} </span> <span> ${topping?.price.toFixed(2)}</span></PizzaWrapper>)
        })}
        
        <TotalWrapper>
            <h4>Subtotal:</h4> <h4>${details?.subtotal?.toFixed(2)}</h4>
        </TotalWrapper>
        <TotalWrapper>
            <h4>Taxes:</h4> <h4>${details?.tax?.toFixed(2)}</h4>
        </TotalWrapper>
        <TotalWrapper>
            <h4>TOTAL:</h4> <h4>${details?.total?.toFixed(2)}</h4>
        </TotalWrapper>

    </DetailsSection>        
)

export default Detail