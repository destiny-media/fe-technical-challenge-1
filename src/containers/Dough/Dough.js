import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTrail, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../../components/Card'
import { getDough } from './Dough.thunks'
import { selectDough } from './Dough.slice'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import Container from '../../components/Container'

const Dough = () => {
  const dispatch = useDispatch()
  const { selection, options, isFetching } = useSelector(({ Dough }) => Dough)
  const animation = useTrail(options.length, { 
    opacity: 1, 
    transform: 'translateY(0rem)', 
    from: { opacity: 0, transform: 'translateY(5rem)' } 
  })

  useEffect(() => {
    if(options.length === 0) dispatch(getDough())
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
                isActive={selection.id === item.id}
                onClick={() => dispatch(selectDough(item))}
              />
            </animated.div>
          )
        })
      }
      {!!selection.id && (
        <Button 
          as={Link}
          to="/Sauce"
          style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}
        >
          Go To Sauces!
        </Button>
      )}
    </Container>
  )
}

export default Dough
