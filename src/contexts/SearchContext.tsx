import { createContext, ReactNode, useState } from "react";
import { IProduct } from "../interfaces/IProduct";

interface SearchProviderProps{
  children: ReactNode
}

interface SearchContextData{
  isSearchOpen: boolean
  toggleSearch: () => void
  openSearch: () => void
  closeSearch: () => void
  getProductByName: (query: string) => void,
  getProducts: (products: Array<IProduct>) => void,
  resultSearch: Array<IProduct>
}

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps){
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [products, setProducts] = useState<Array<IProduct> | null>([])
  const [resultSearch, setResultSearch] = useState<Array<IProduct> | null>([])

  function toggleSearch(){
    setIsSearchOpen(!isSearchOpen)
  }

  function openSearch(){
    setIsSearchOpen(true)
  }
  
  function closeSearch(){
    setIsSearchOpen(false)
  }

  function getProducts(products: Array<IProduct>){
    setProducts(products)
  }

  function getProductByName(query: string){    
    const result = products.filter((product: IProduct) => { return product.title.toLowerCase().includes(query.toLowerCase()) });
    setResultSearch(result)
  }

  return (
    <SearchContext.Provider value={{
      openSearch,
      closeSearch,
      isSearchOpen,
      toggleSearch,
      getProductByName,
      getProducts,
      resultSearch
    }}>
      { children }
    </SearchContext.Provider>
  )
}