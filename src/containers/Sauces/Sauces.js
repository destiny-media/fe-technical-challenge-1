import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTrail, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../../components/Card'
import { getSauces } from './Sauces.thunks'
import { selectSauce } from './Sauces.slice'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Container from '../../components/Container'

const Sauces = () => {
  const dispatch = useDispatch()
  const { selection, options, isFetching } = useSelector(({ Sauces }) => Sauces)
  const animation = useTrail(options.length, { 
    opacity: 1, 
    transform: 'translateY(0rem)', 
    from: { opacity: 0, transform: 'translateY(5rem)' } 
  })

  useEffect(() => {
    if(options.length === 0) dispatch(getSauces())
  }, [dispatch, options.length])

  return (
    <Container style={{ flexWrap: 'wrap', margin: '4rem', flexDirection: 'row' }}>
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
        <Button 
          as={Link}
          to="/Toppings"
          style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
        >
          Go To Toppings!
        </Button>
      )}
    </Container>
  )
}

export default Sauces
