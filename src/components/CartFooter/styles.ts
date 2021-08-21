import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 1.25rem;
  width: 100%;
  z-index: 2;
  padding: 0 .75rem;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  background: var(--purple);
  color: var(--white);
  border-radius: 5px;

  padding: .75rem;

  font-size: 1.15rem;
  font-weight: 700;

  transition: all .3s ease;
  
  button{
    display: flex;
    align-items: center;
    justify-content: center;
      
    background: var(--purple);
    color: var(--white);
    border: none;

    font-size: 1.25rem;
    padding: .25rem;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex: 1;

    span{
      background: var(--white);
      color: var(--purple);
      border-radius: 25px;
      
      padding: .25rem 1rem;
    }
  }

`
