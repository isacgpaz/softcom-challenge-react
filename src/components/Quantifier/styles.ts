import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: .75rem;

  div{
    &:first-child {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: .5rem;
  
      border: 1px solid var(--gray);
      border-radius: 4px;
  
      button{
        display: flex;
        align-items: center;
  
        background: none;
        border: none;
    
        color: var(--purple);
  
        font-size: 1.25rem;
      }

      span{
        font-weight: 700;
      }
    }
  }
`

export const Cart = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: .25rem 1rem;

  width: 50%;

  background: var(--purple);
  color: var(--white);
  border: none;
  border-radius: 4px;
`