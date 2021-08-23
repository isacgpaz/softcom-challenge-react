import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--white);
  border-top: 5px solid var(--purple);
  padding: .5rem 4rem;

  a{
    color: var(--purple);
    font-weight: 500;
    text-decoration: underline;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--purple);
  font-weight: 700;

  img{
    width: 150px;
    height: 50px;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .25rem;

  color: var(--purple);
  font-weight: 700;

  div{
    display: flex;
    gap: .5rem;

    img{
      width: 30px
    }
  }
`