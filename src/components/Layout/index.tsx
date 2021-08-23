import * as FaIcons  from "react-icons/fa";
import { useSearch } from "../../hooks/useSearch";
import { CartFooter } from "../CartFooter";
import { Catalog } from "../Catalog";
import { Header } from "../Header";
import { TextField } from "../TextField";
import { Container, SearchField } from "./styles";
import MediaQuery from 'react-responsive';

export function Layout({ children }){
  const { isSearchOpen, resultSearch } = useSearch()

  return (
    <Container>
      <Header />

      <main>
        <SearchField>
          <MediaQuery minWidth={760}>
            <TextField placeHolder='O que você procura?' doResearch>
              <FaIcons.FaSearch />
            </TextField>
          </MediaQuery>
        </SearchField>

        { isSearchOpen ? <Catalog sectionTitle="Resultado da Busca" products={resultSearch} search /> : children}
      </main>

      <CartFooter />
    </Container>
  )
}