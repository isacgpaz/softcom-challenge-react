import styled from 'styled-components'

interface ProductsListProps{
  grid?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  padding: 1.25rem .725rem;

  h2{
    color: var(--title);
  }

  @media(min-width: 760px) {
    padding: 1.5rem 0;

    h2{
      font-size: 1.1rem;
    }
  }
`

export const ProductsList = styled.div<ProductsListProps>`
  display: ${props => props.grid ? 'grid' : 'flex'};
  justify-items: center;
  gap: ${props => props.grid ? '1rem .25rem' : '1rem'};
  
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  
  overflow: ${props => props.grid ? 'visible' : 'hidden'};
  overflow-x: ${props => props.grid ? 'visible' : 'scroll'};
  
  margin: 1rem 0;

  animation: all .2s ease;
  
  &::-webkit-scrollbar{
    display: none;
  }

  @media(min-width: 540px) {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;

    overflow: visible;
    overflow-x: visible;
    max-width: 75vw;

    flex-wrap: wrap;
  }
`