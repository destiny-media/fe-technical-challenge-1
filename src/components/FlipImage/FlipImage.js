import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { ABack, AFront, ImagePlaceHolder } from './FlipImage.styles'

const FlipImage = ({image}) => {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <div onClick={() => set(state => !state)}>
            <ABack $image={image} style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
            <AFront style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
            <ImagePlaceHolder />
        </div>
    )

}

export default FlipImage