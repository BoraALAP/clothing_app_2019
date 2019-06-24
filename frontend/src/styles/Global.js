import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');

    body{
        margin:0;
        font-family: ${props => props.theme.font.main}
    }

    section{
        padding: 3em;
        margin: 2em 0; 
        display: grid;
    }

    h1,h2,h3,h4,h5,h6{
        text-transform: uppercase;
        font-weight: 300;
    }
`

export default GlobalStyle