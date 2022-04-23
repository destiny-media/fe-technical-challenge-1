import React, { useEffect } from 'react'
import { useTrail, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { getToppings } from './Toppings.thunks'
import { selectToppings } from './Toppings.slice'
import Container from '../../components/Container'
import Button from '../../components/Button'

const Toppings = () => {
  const dispatch = useDispatch()
  const { selection, options, isFetching } = useSelector(({ Toppings }) => Toppings)
  const selectionMap = new Map(selection)
  const animation = useTrail(options.length, { 
    opacity: 1, 
    transform: 'translateY(0rem)', 
    from: { opacity: 0, transform: 'translateY(5rem)' } 
  })
    
  useEffect(() => {
    if(options.length === 0) dispatch(getToppings())
  }, [dispatch, options.length])

  return (
    <Container style={{ flexWrap: 'wrap', width: '80%', alignSelf: 'center', flexDirection: 'row' }}>
      {isFetching ? 
        <Loader /> : 
        animation.map((style, index) => {
          const item = options[index]

          return (
            <animated.div key={item.id} style={style}>
              <Card title={item.label} footnote={<span>${item.price}</span>} isActive={selectionMap.has(item.id)} onClick={() => dispatch(selectToppings(item))} />
            </animated.div>
          )
        })
      }
      {!!selection.length && (
        <Button 
          as={Link}
          to="/Checkout"
          style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
        >
          Go To Checkout!
        </Button>
      )}
       
            
    </Container>
  )
}

export default Toppings
