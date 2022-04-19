import styled from 'styled-components'

const Loader = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 3px solid #2E86AB44;
  border-top: 3px solid #2E86AB;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`


export default Loader