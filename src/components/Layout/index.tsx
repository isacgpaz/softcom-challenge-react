import { CartFooter } from "../CartFooter";
import { Header } from "../Header";
import { Container } from "./styles";

export function Layout({ children }){
  return (
    <Container>
      <Header />

      <main>
        { children }
      </main>

      <CartFooter />
    </Container>
  )
}