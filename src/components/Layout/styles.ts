import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  main{
    margin-bottom: 5rem;

    @media(min-width: 540px) {
      padding: 2rem 4rem;
      background: var(--background-desktop);
    }
  }
`

export const SearchField = styled.div`
  div{
    width: 45%;
  }
`