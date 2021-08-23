import * as FaIcons  from "react-icons/fa";
import { useSearch } from "../../hooks/useSearch";
import { CartFooter } from "../CartFooter";
import { Catalog } from "../Catalog";
import { Header } from "../Header";
import { TextField } from "../TextField";
import { Container, SearchField } from "./styles";
import MediaQuery from 'react-responsive';
import { useProductModal } from "../../hooks/useProductModal";
import { ProductModal } from "../ProductModal";

export function Layout({ children }){
  const { isSearchOpen, resultSearch } = useSearch()
  const { isModalOpen, product } = useProductModal()

  return (
    <Container>
      <Header />

      <main>
        { isModalOpen ? (
          <>
            <ProductModal product={product} />

            <MediaQuery minWidth={760}>
              <SearchField>
                  <MediaQuery minWidth={760}>
                    <TextField placeHolder='O que você procura?' doResearch>
                      <FaIcons.FaSearch />
                    </TextField>
                  </MediaQuery>
                </SearchField>

                { isSearchOpen ? <Catalog sectionTitle="Resultado da Busca" products={resultSearch} search /> : children }
              </MediaQuery>    
            </>
          ) : (
            <>
              <SearchField>
                <MediaQuery minWidth={760}>
                  <TextField placeHolder='O que você procura?' doResearch>
                    <FaIcons.FaSearch />
                  </TextField>
                </MediaQuery>
              </SearchField>

              { isSearchOpen ? <Catalog sectionTitle="Resultado da Busca" products={resultSearch} search /> : children }
            </>    
          )
        }
            
      </main>

      <CartFooter />
    </Container>
  )
}