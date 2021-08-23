import { useSearch } from "../../hooks/useSearch";
import { CartFooter } from "../CartFooter";
import { Catalog } from "../Catalog";
import { Header } from "../Header";
import { Container } from "./styles";

export function Layout({ children }){
  const { isSearchOpen, resultSearch } = useSearch()

  return (
    <Container>
      <Header />

      <main>
        { isSearchOpen ? <Catalog sectionTitle="Resultado da Busca" products={resultSearch} search /> : children}
      </main>

      <CartFooter />
    </Container>
  )
}