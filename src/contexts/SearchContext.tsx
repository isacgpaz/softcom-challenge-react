import { createContext, ReactNode, useState } from "react";

interface SearchProviderProps{
  children: ReactNode
}

interface SearchContextData{
  isSearchOpen: boolean
  toggleSearch: () => void
  openSearch: () => void
  closeSearch: () => void
  getProductByName: (query: string) => void
}

export const SearchContext = createContext({} as SearchContextData);

export function SearchProvider({ children }: SearchProviderProps){
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  function toggleSearch(){
    setIsSearchOpen(!isSearchOpen)
  }

  function openSearch(){
    setIsSearchOpen(true)
  }
  
  function closeSearch(){
    setIsSearchOpen(false)
  }

  function getProductByName(query: string){
    
  }

  return (
    <SearchContext.Provider value={{
      openSearch,
      closeSearch,
      isSearchOpen,
      toggleSearch,
      getProductByName  
    }}>
      { children }
    </SearchContext.Provider>
  )
}