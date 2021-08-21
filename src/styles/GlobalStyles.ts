import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --text: #3F3F3F;
    --title: #333333;
    --text-secondary: #818181;
    --background-desktop: #F3F3F4;
    --white: #FFFFFF;
    --red: #FF5959;
    --green: #1BBB16;
    --green-light: #77D500;
    --purple: #B11E89;  
    --purple-light: #B41C8B;
    --gray: #D9D9D9;
    --gray-medium: #ACACAC;
    --gray-light: #EDEDED;
  }

  body, input, textarea, button {
    font: 400 1rem "Quicksand", sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 82.5%;
    }
  }

  body{
    background: var(--white);
    color: var(--text);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
