import { createContext, ReactNode, useState } from "react";

interface QuantifierProviderProps{
  children: ReactNode
}

interface QuantifierContextData{
  addCounter: () => void;
  removeCounter: () => void;
  counter: number
}

export const QuantifierContext = createContext({} as QuantifierContextData);

export function QuantifierProvider({ children }: QuantifierProviderProps){
  const [counter, setCounter] = useState(1);

  function addCounter(){
    setCounter(counter + 1);
  }

  function removeCounter(){
    if(counter > 1){
      setCounter(counter - 1);
    }
  }

  return (
    <QuantifierContext.Provider value={{
      addCounter,
      removeCounter,
      counter,
    }}>
      { children }
    </QuantifierContext.Provider>
  )
}