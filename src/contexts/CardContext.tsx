import { createContext, ReactNode } from "react";

interface CardProviderProps{
  children: ReactNode
}

interface CardContextData{
  calcDiscount: (price: number, oldPrice: number) => number;
}

export const CardContext = createContext({} as CardContextData);

export function CardProvider({ children }: CardProviderProps){
  function calcDiscount(price: number, oldPrice: number){
    return Math.floor(((oldPrice * 100) / price) - 100);
  }

  return (
    <CardContext.Provider value={{
      calcDiscount
    }}>
      { children }
    </CardContext.Provider>
  )
}