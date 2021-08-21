import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;
`

export const Header = styled.header`
  background: var(--purple);
  padding: 1rem .75rem;
  
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;

    background: none;
    border: none;
    
    color: var(--white);
    font-weight: 500;
    font-size: 1.15rem;

    span{
      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--white);
      color: var(--purple);
      border-radius: 50%;

      font-size: 2rem;
      padding: .25rem;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3rem .75rem;

  h2{
    color: var(--purple);
  }

  ul{
    list-style: none;
    align-self: flex-start;
    margin: 0 1rem;

    font-weight: 500;
  }
`

export const Thumbnail = styled.div`
  border: 1px solid var(--gray-light);
  border-radius: 5px;
  position: relative;
  
  width: fit-content;
`

export const Observation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem 1rem;
  
  border-bottom: 1px solid var(--gray);

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .5rem;

    p{
      color: var(--purple);
      font-size: 1.05rem;
      font-weight: 700;
    }

    span{
      font-weight: 500;
      color: var(--text-secondary);
      font-size: .9rem;
    }
  }
`

