import { useContext } from "react";
import { ProductModalContext } from "../contexts/ProductModalContext";

export function useProductModal(){
  const context = useContext(ProductModalContext);

  return context;
}