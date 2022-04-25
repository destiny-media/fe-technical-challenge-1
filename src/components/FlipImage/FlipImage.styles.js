import styled from 'styled-components'
import { a } from 'react-spring'

export const ABack = styled(a.div)`  
    position: absolute;
    cursor: pointer;
    will-change: transform, opacity;
    height: 10rem;
    width: 17rem;
    background-size: cover;
    background-image: url(${({ $image }) => $image});
    background-position: center;
`

export const AFront = styled(a.div)`  
    position: absolute;
    max-height: 10rem;
    width: 10rem;
    height: 17rem;
    min-width: 17rem;
    cursor: pointer;
    will-change: transform, opacity;

    background-image: url(https://previews.123rf.com/images/pashapixel/pashapixel1905/pashapixel190500094/121767190-funny-happy-pineapple-in-sunglasses-on-swimming-pool-background-at-tropical-sunny-day-creative-food-.jpg);
    background-size: 15rem;
`

export const ImagePlaceHolder = styled.div`  
    position: relative;
    max-height: 10rem;
    width: 10rem;
    height: 17rem;
    min-width: 17rem;
`