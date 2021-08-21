import { useEffect, useState } from 'react';
import * as TiIcons from 'react-icons/ti';
import { useCart } from '../../hooks/useCart';
import { useProductModal } from '../../hooks/useProductModal';
import { useQuantifier } from '../../hooks/useQuantifier';
import { IProduct } from '../../interfaces/IProduct';
import { IQuantifier } from '../../interfaces/IQuantifier';
import { Cart, Container } from "./styles";

export function Quantifier(props: IQuantifier){
  const { addCounter, removeCounter, counter } = useQuantifier()  
  const { totalCart, addItemToCart } = useCart()
  const { toggleModal } = useProductModal()
  
  const [price, setPrice] = useState(String(props.price));

  useEffect(() => {
    setPrice((parseFloat(String(props.price).replace(',','.')) * counter).toFixed(2).replace('.', ','));
  }, [counter, props.price]);

  return (
    <Container>
      <div>
        <button type="button" onClick={removeCounter}>
          <TiIcons.TiMinus />
        </button>
        <span className="price">
          {counter}
        </span>
        <button type="button" onClick={addCounter}>
          <TiIcons.TiPlus />
        </button>
      </div>

      <Cart onClick={() => { 
        toggleModal({} as IProduct)
  
        addItemToCart(
          parseFloat(String(price).replace(',','.')), counter
        ); 
      }}>
        Adicionar

        <span>
          R$ {price}
        </span>
      </Cart>
    </Container>
  )
}