import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/Container'
import { setFormProperty, calculateTotals, reset } from './Checkout.slice'
import { useHistory } from "react-router-dom";
import { postOrder } from './Checkout.thunks'
import Loader from '../../components/Loader'
import { FlexContainer } from './Checkout.styles'
import { useTrail, animated } from 'react-spring'
import Detail from '../../components/Detail'
import Form from '../../components/Form'

const Checkout = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const {form, details, order, isFetching} = useSelector(({ Checkout }) => Checkout)
    const dough = useSelector(({ Dough }) => Dough).selection
    const sauce = useSelector(({ Sauces }) => Sauces).selection
    const toppings = useSelector(({ Toppings }) => Toppings).selection.map(t => t[1])

    const animation = useTrail(1, { 
        opacity: 1, 
        transform: 'translateY(0rem)', 
        from: { opacity: 0, transform: 'translateY(5rem)' } 
      })


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
        
    }, [dispatch, dough, sauce, toppings, details, order, history])    

    return (
        isFetching ?
            <Container>
                <Loader />
            </Container> 
            
             : 

            <FlexContainer>
                <Form form={form} handleInputText={handleInputText} submitForm={submitForm}/>        
                {animation.map((style, index) => {
                    return (
                        <animated.div key={index} style={style}>
                            <Detail dough={dough} sauce={sauce} toppings={toppings} details={details}/>
                        </animated.div>
                    )
                })}
            </FlexContainer>
        )
    }

export default Checkout


