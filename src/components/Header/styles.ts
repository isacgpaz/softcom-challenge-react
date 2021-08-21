import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-items: center;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: .4rem;
  padding: 1rem .725rem;
  border-bottom: 4px solid var(--purple);
`

export const Thumbnail = styled.div`
  display: flex;
  align-items: center;

  border: 2px solid var(--purple);
  border-radius: 50%;

  img{
    width: 15rem;
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
  }
`

export const Navigation = styled.div`
  padding: .725rem;
  
  display: flex;
  flex-direction: column;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

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

    li{
      display: flex;
      align-items: center;
      gap: 1rem;
      
      a{
        display: flex;
        align-items: center;
        white-space: nowrap;
        font-weight: 700;

        transition: all .2s ease;
          
        &.active{
          color: var(--purple);
          text-decoration: underline;
        }
      }
    }  
  }
`