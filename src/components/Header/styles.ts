import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-items: center;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: 1rem .725rem;
  border-bottom: 4px solid var(--purple);

  @media(min-width: 540px) {
    padding: 1.5rem 4rem;
    gap: 2rem;
  }
`

export const Thumbnail = styled.div`
  display: flex;
  align-items: center;

  border: 3px solid var(--purple);
  border-radius: 50%;

  img{
    width: 15rem;

    @media(min-width: 650px) {
      width: 8rem;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: .4rem;
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h2{
    color: var(--title);
  }

  span{
    display: flex;
    align-items: center;
    gap: .25rem;
  
    font-weight: 700;
    font-size: .785rem;
    color: var(--green);
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    display: flex;
    flex-direction: column;
    justify-items: center;

    p{
      display: flex;
      align-items: center;  
      gap: .25rem;

      font-weight: 700;
    }
    
    span{
      color: var(--text-secondary);
      font-weight: 700;
    }

    @media(min-width: 540px) {
      flex-direction: row;
      gap: .5rem;
    }
  }
`

export const Navigation = styled.div`
  padding: .725rem .725rem 0;
  
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid var(--gray); 

  @media(min-width: 760px) {
    padding: .5rem 4rem;
  }
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ul{
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;

    overflow: hidden;
    overflow-x: scroll;

    padding: .75rem 0;

    &::-webkit-scrollbar{
      display: none;
    }

    @media(min-width: 760px) {
      overflow: visible;
      overflow-x: visible;
      justify-content: space-between;
      width: 100%;
    }

    @media(min-width: 1080px) {
      overflow: visible;
      overflow-x: visible;
      justify-content: space-between;
    }

    li{
      display: flex;
      align-items: center;
      gap: 1rem;

      a{
        display: flex;
        align-items: center;
        gap: .35rem;
        white-space: nowrap;
        font-weight: 500;

        transition: all .2s ease;

        &.active{
          color: var(--purple);
          text-decoration: underline;
        }
      }
    }
  }
`