import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTrail, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import Card from '../../components/Card'
import { getSauces } from './Sauces.thunks'
import { selectSauce } from './Sauces.slice'
import Loader from '../../components/Loader'
import { ButtonWrapper, ContainerWrapper } from './Sauces.styles';

const Sauces = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const { selection, options, isFetching } = useSelector(({ Sauces }) => Sauces)
  const dough = useSelector(({ Dough }) => Dough)
  const animation = useTrail(options.length, { 
    opacity: 1, 
    transform: 'translateY(0rem)', 
    from: { opacity: 0, transform: 'translateY(5rem)' } 
  })

  useEffect(() => {
    if (options.length === 0) dispatch(getSauces())
    if (!dough?.selection?.label) history.push("/Dough");
  }, [dispatch, dough, history, options.length])

  return (
    <ContainerWrapper>
      {isFetching ? 
        <Loader /> : 
        animation.map((style, index) => {
          const item = options[index]

          return (
            <animated.div key={item.id} style={style}>
              <Card 
                title={item.label} 
                image={item.image} 
                description={item.description}
                isActive={item.id === selection.id}
                onClick={() => dispatch(selectSauce(item))}
              />
            </animated.div>
          )
        })
      }
      {!!selection.id && (
        <ButtonWrapper
          as={Link}
          to="/Toppings"
        >
          Go To Toppings!
        </ButtonWrapper>
      )}
    </ContainerWrapper>
  )
}

export default Sauces
