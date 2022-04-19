import React, { useEffect } from 'react'
import { useTrail, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../../components/Card'
import Loader from '../../components/Loader'
import { getToppings } from './Toppings.thunks'
import Container from '../../components/Container'

const Toppings = () => {
  const dispatch = useDispatch()
  const { options, isFetching } = useSelector(({ Toppings }) => Toppings)
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
          const { id, label, price } = options[index]

          return <animated.div key={id} style={style}><Card title={label} footnote={<span>${price}</span>} /></animated.div>
        })
      }      
    </Container>
  )
}

export default Toppings
