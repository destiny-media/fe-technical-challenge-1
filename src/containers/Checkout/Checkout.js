import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/Container'
import styled from 'styled-components'
import { setFormProperty, calculateTotals, reset } from './Checkout.slice'
import Button from '../../components/Button'
import Input from '../../components/Input/Input'
import { useHistory } from "react-router-dom";
import { postOrder } from './Checkout.thunks'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'
 

const Checkout = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const {form, details, order, isFetching} = useSelector(({ Checkout }) => Checkout)
    const dough = useSelector(({ Dough }) => Dough).selection
    const sauce = useSelector(({ Sauces }) => Sauces).selection
    const toppings = useSelector(({ Toppings }) => Toppings).selection.map(t => t[1])

    const handleInputText = (e) => {
         dispatch(
            setFormProperty(
                {'name': e.target.name,
                'value': e.target.value, 
                'max': e.target.max,
                'pattern': e.target.pattern}))
    }

    const submitForm = async (e) => {
        e.preventDefault();
        dispatch(postOrder(form));
    }

    useEffect(() => {
   
        if (!details?.total) dispatch(calculateTotals({dough, sauce, toppings}))
        if (!dough?.label) history.push("/Dough")
        if (!sauce?.label) history.push("/Sauce")
        if (!toppings?.length) history.push("/Toppings")

        if (order?.status === 200) {
            dispatch(reset());
            history.push("/ThankYou")
        }
        
    }, [dispatch, dough, sauce, toppings, order])    

    return (
        isFetching ?
            <Container style={{ flexWrap: 'wrap', margin: '4rem', flexDirection: 'row' }}>
                <Loader />
            </Container> 
             : 
            <FlexContainer>
                <FormWrapper>
                    <h1>Checkout</h1>
                    <form onSubmit={e => submitForm(e)}>

                        <Input 
                            $isValid={form?.name?.isValid}
                            placeholder="Name" 
                            type="text" 
                            name="name" 
                            max="50"
                            pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" 
                            value={form?.name?.value || ''}
                            onChange={e => handleInputText(e)}
                            required
                            />
                        <Input 
                            $isValid={form?.ccnumber?.isValid}
                            placeholder="Credit Card Number" 
                            type="text" 
                            name="ccnumber" 
                            max="16"
                            pattern="(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)" 
                            value={form?.ccnumber?.value || ''}
                            onChange={e => handleInputText(e)}
                            required
                            />

                        <InputWrapper>
                            <Input
                                $small={true}
                                $isValid={form?.ccmonth?.isValid}
                                placeholder="MM" 
                                type="text" 
                                name="ccmonth"
                                max="2"
                                pattern="^\d{2,}$"
                                value={form?.ccmonth?.value || ''}
                                onChange={e => handleInputText(e)} 
                                required/>
                                
                            <Input
                                $small={true}
                                $isValid={form?.ccyear?.isValid}
                                placeholder="YYYY" 
                                type="text" 
                                name="ccyear" 
                                max="4"
                                pattern="^\d{4,}$"
                                value={form?.ccyear?.value || ''}
                                onChange={e => handleInputText(e)}
                                required
                                />
                        </InputWrapper>
                        
                        <Button $full={true}>
                            Place Your Order
                        </Button>
                    </form>
                </FormWrapper>

                <DetailsWrapper>
                    <h1>Details</h1>
                    <PizzaImage src={dough.image} alt={dough.title} />

                    <p><strong>Dough</strong></p>
                    <PizzaSection>
                    <span> {dough.label} </span> <span>${dough.price?.toFixed(2)}</span>
                    </PizzaSection>

                    <p><strong>Sauce</strong></p>
                    <PizzaSection>
                    <span> {sauce.label} </span> <span>${sauce.price?.toFixed(2)}</span>
                    </PizzaSection>

                    <p><strong>Toppings</strong></p>
                    {toppings.map((topping,i) => {
                        return (<PizzaSection key={i}><span key={i}>{topping.label} </span> <span> ${topping?.price.toFixed(2)}</span></PizzaSection>)
                    })}
                    
                    <TotalSection>
                        <p> <strong>Subtotal</strong></p> <p>${details?.subtotal?.toFixed(2)}</p>
                    </TotalSection>
                    <TotalSection>
                        <p> <strong>Taxes</strong></p> <p> ${details?.tax?.toFixed(2)}</p>
                    </TotalSection>
                    <TotalSection>
                        <p> <strong>TOTAL</strong></p> <p>${details?.total?.toFixed(2)}</p>
                    </TotalSection>
                
                </DetailsWrapper>
                
            </FlexContainer>
    )
}

export default Checkout

const FlexContainer = styled.div`  
    display: flex;
    flex-direction: row;
    align-self: stretch;
    text-align: left;
    padding: 40px 60px 40px 60px;

    @media (max-width: 800px) {
        flex-direction: column;
        padding: 0px;
    }
`

const FormWrapper = styled.div`  
    padding: 20px 60px 20px 60px;
    flex: 100%;
`

const DetailsWrapper = styled.div`  
    border-radius: 0.125rem;
    box-shadow: 0px 1px 2px #0009; 
    padding: 20px 60px 20px 60px;
    flex: 100%;  
`
const InputWrapper = styled.div` 
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
`

const PizzaImage = styled.img`
    flex: 2;
    max-height: 10rem;
    display: flex;
`
const PizzaSection = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1px;
    border-bottom: 1px dashed #0002;
`

const TotalSection = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px dashed #0002;
    
    
`
