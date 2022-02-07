import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #FDEBC2;
    font-family: 'helvetica';
    font-weight: 600;
    font-size: 1.2rem;
    height: 100vh;
    margin: 8px 84px;

    position: relative;

    h1 {
      font-size: 3.6rem;
      font-weight: 900;
    }

    h1, h2,h3,h4,h5,h6,p {
      margin: 0;
    }
    
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }
`
export default GlobalStyle
