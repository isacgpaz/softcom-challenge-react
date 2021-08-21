import * as FaIcons from 'react-icons/fa'
import { useCart } from '../../hooks/useCart';
import { Cart, Container } from "./styles"

export function CartFooter(){
  const { totalItems, totalCart } = useCart();

  return (
    <Container>
      <Cart>
        <button type="button">
          <FaIcons.FaShoppingCart />
        </button>
          
        <div>
          {totalItems} Produto{totalItems == 1 ? null : 's'} no Carrinho
          <span>
            R$ {totalCart.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </Cart> 
    </Container>
  )
}