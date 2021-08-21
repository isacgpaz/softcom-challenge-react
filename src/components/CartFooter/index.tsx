import * as FaIcons from 'react-icons/fa'
import { Cart, Container } from "./styles"

export function CartFooter(){
  return (
    <Container>
      <Cart>
        <button type="button">
          <FaIcons.FaCartPlus />
        </button>
          
        <div>
          {0} Produtos no Carrinho
          <span>
            R$ 0,00
          </span>
        </div>
      </Cart> 
    </Container>
  )
}