import styled from 'styled-components'

export const FlexContainer = styled.div`  
    display: flex;
    flex-direction: row;
    align-self: center;
    text-align: left;
    padding: 40px 40px;

    @media (max-width: 800px) {
        flex-direction: column;
        padding: 0px;

    }
`