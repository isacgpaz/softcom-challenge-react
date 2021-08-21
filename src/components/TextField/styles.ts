import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  border: 1px solid var(--gray);
  border-radius: 4px;

  color: var(--text-secondary);

  transition: all .3s ease;
  
  &:focus-within{
    border: 2px solid var(--purple);
  }

  input{
    border: none;
    border-radius: 4px;
    flex: 1;

    padding: .5rem;

    &:focus{
      outline: none;
    }
  }

  span{
    display: flex;
    align-items: center;

    padding: .25rem .5rem;
    font-size: 1.15rem;
  }
`
