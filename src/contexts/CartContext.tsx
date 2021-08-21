import { createContext, ReactNode, useState } from "react";
import { IProduct } from "../interfaces/IProduct";

interface CartProviderProps{
  children: ReactNode
}

interface CartContextData{
  totalItems: number;
  totalCart: number;
  addItemToCart: (price: number, amount: number) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps){
  const [items, setItems] = useState<Array<IProduct> | []>([]);
  const [totalItems, setTotalItems] = useState(items.length);
  const [totalCart, setTotalCart] = useState(0);

  function addItemToCart(price: number, amount: number){
    setTotalItems(totalItems + amount);
    setTotalCart(totalCart + price);
  }

  return (
    <CartContext.Provider value={{
      totalItems,
      totalCart,
      addItemToCart
    }}>
      { children }
    </CartContext.Provider>
  )
}