import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: var(--white);
  border: 1px solid var(--gray);
  border-radius: 5px;

  padding: .75rem;

  width: 13rem;
  height: 22rem;

  cursor: pointer;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: .35rem;

  h2{
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.1rem;
  }
`

export const Thumbnail = styled.div`
  border: 1px solid var(--gray-light);
  border-radius: 5px;
  position: relative;

  img{
    transition: all .2s ease;
  }

  &:hover{
    img{
      transform: scale(.875);
    }
  }
`

export const OnSale = styled.span`
  position: absolute;
  z-index: 1;
  
  background: var(--green-light);
  color: var(--white);
  border-radius: 2px;

  font-size: .9rem;
  font-weight: 700;

  padding: .1rem .35rem;
`

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div{
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;

    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: .35rem;
      color: var(--text-secondary);
      font-size: 1.25rem;
        
      small{
        font-size: .9rem;
        font-weight: 500;
      }
      
      span{
        font-size: 1rem;
        color: var(--red);
        text-decoration: line-through;
      }

      &:last-child{
        small{
          color: var(--text-secondary);
        }

        color: var(--title);
      }
    }
  }

  button{
    display: flex;
    align-items: center;

    background: none;
    color: var(--purple);
    font-size: 1.5rem;
    border: none;
  }
`