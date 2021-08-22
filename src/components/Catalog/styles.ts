import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.25rem .725rem;

  h2{
    color: var(--title);
  }
`

export const ProductsList = styled.div`
  display: flex;
  justify-items: center;
  gap: 1rem;

  overflow: hidden;
  overflow-x: scroll;

  margin: 1rem 0;

  &::-webkit-scrollbar{
    display: none;
  }
`