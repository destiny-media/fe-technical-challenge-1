import React, { useEffect } from 'react'
import { useTrail, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { getToppings } from './Toppings.thunks'
import { selectToppings } from './Toppings.slice'
import { ButtonWrapper, ContainerWrapper } from './Toppings.styles';

const Toppings = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const { selection, options, isFetching } = useSelector(({ Toppings }) => Toppings)
  const dough = useSelector(({ Dough }) => Dough)
  const sauce = useSelector(({ Sauces }) => Sauces)

  const selectionMap = new Map(selection)
  const animation = useTrail(options.length, { 
    opacity: 1, 
    transform: 'translateY(0rem)', 
    from: { opacity: 0, transform: 'translateY(5rem)' } 
  })
    
  useEffect(() => {
    if(options.length === 0) dispatch(getToppings())
    if (!dough?.selection?.label) history.push("/Dough");
    if (!sauce?.selection?.label) history.push("/Sauce");
  }, [dispatch, dough, sauce, history, options.length])

  return (
    <ContainerWrapper>
      {isFetching ? 
        <Loader /> : 
        animation.map((style, index) => {
          const item = options[index]

          return (
            <animated.div key={item.id} style={style}>
              <Card title={item.label} footnote={<span>${item.price?.toFixed(2)}</span>} isActive={selectionMap.has(item.id)} onClick={() => dispatch(selectToppings(item))} />
            </animated.div>
          )
        })
      }
      {!!selection.length && (
        <ButtonWrapper
          as={Link}
          to="/Checkout"
        >
          Go To Checkout!
        </ButtonWrapper>
      )}
       
            
    </ContainerWrapper>
  )
}

export default Toppings
