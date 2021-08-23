import { createContext, ReactNode, useState } from "react";
import { ProductModal } from "../components/ProductModal";
import { IProduct } from "../interfaces/IProduct";

interface ProductModalProviderProps{
  children: ReactNode
}

interface ProductModalContextData{
  isModalOpen: boolean;
  toggleModal: (product?: IProduct) => void;
  product: IProduct;
}

export const ProductModalContext = createContext({} as ProductModalContextData);

export function ProductModalProvider({ children }: ProductModalProviderProps){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);

  function toggleModal(product?: IProduct): void{
    setIsModalOpen(!isModalOpen);
    
    if(product){
      setProduct(product);
    }
  }
  
  return (
    <ProductModalContext.Provider value={{
      isModalOpen,
      toggleModal,
      product
    }}>
      { children }
    </ProductModalContext.Provider>
  )
}
