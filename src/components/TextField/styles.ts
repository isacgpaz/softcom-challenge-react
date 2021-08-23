import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  border: 1.5px solid var(--gray);
  border-radius: 4px;

  color: var(--text-secondary);

  transition: all .3s ease;
  
  &:focus-within{
    border: 1.5px solid var(--purple);
    
    span{
      font-size: 1.35rem;
    }
  }

  input{
    border: none;
    border-radius: 4px;
    flex: 1;

    padding: .5rem;
    transition: all 0.2s ease;

    &:focus{
      outline: none;
      padding: .5rem .75rem;

      &~span{
        color: var(--purple);
      }
    }
  }

  span{
    display: flex;
    align-items: center;

    padding: .25rem .65rem;
    font-size: 1.15rem;

    transition: all .2s ease;
  }
`
