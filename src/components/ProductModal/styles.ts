import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;

  background: var(--white);

  display: flex;
  flex-direction: column;
  justify-items: center;
  align-content: center;

  @media(min-width: 760px) {
    background: none;
    backdrop-filter: brightness(70%);
  }
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
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  margin-top: 2rem;

  background: var(--white);
  border-radius: 4px;

  transition: all .2s ease;

  @media(min-width: 760px) {
    align-items: flex-start;
    flex-direction: row;
    margin: auto;
    width: 55%;
    padding: 2rem;

    img{
      width: 20rem;
    }
  }
`

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  color: var(--purple);

  transition: all .2s ease;

  &:hover {
    font-size: 1.15rem;
  }
`

export const ProductBody = styled.div` 
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 1.5rem;
  
  width: 100%;

  h2{
    text-align: center;
    max-width: 70%;
    margin: auto;
    color: var(--purple);

    @media(min-width: 760px) {
      text-align: left;
      padding: 0 .75rem;
      margin: 0 0 1rem;
      max-width: 100%;
    }
  }
  
  ul{
    list-style: none;
    font-weight: 500;
    width: 80%;
    margin: .5rem 1rem;

    @media(min-width: 760px) {
      margin: 0 .75rem;
    }
  }

  div{
    &:last-child{
      padding: 0 .75rem
    }
  }
`

export const Observation = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: .35rem;

  padding: 0 .75rem 2rem;
  
  border-bottom: 2px solid var(--gray-light);


  @media(min-width: 760px) {
    padding-bottom: .5rem;
    border-bottom: none;
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
      color: var(--purple);
      font-weight: 700;
      font-size: 1.125rem;
    }

    small{
      color: var(--text-secondary);
      font-weight: 500;
      font-size: .8rem;
    }
  }
`