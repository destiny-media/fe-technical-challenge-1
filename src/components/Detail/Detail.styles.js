import styled from 'styled-components'

export const DetailsSection = styled.div`  
    border-radius: 0.125rem;
    box-shadow: 0px 1px 2px #0009; 
    padding: 20px 60px 20px 60px;
`

export const PizzaImage = styled.div`
    position: relative;
    height: 10rem;
    width: 17rem;
    background-size: cover;
    background-image: url(${({ $image }) => $image});
    background-position: center;
`

export const PizzaWrapper = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1px;
    border-bottom: 1px dashed #0002;
`

export const TotalWrapper = styled.div`  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`