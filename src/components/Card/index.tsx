import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { useCard } from '../../hooks/useCard'
import { useProductModal } from '../../hooks/useProductModal'
import { ICard } from "../../interfaces/ICard"
import { Body, Container, Header, OnSale, Thumbnail } from "./styles"

export function Card(props: ICard){
  const { toggleModal } = useProductModal()
  const { calcDiscount } = useCard();
  
  const [discount, setDiscount] = useState(0);

  const product = props.product
  
  useEffect(() => {
    if(product.onSale){
      setDiscount(
        calcDiscount(parseFloat(String(product.price).replace(',','.')), parseFloat(String(product.oldPrice).replace(',','.')))
      )
    }
  }, [calcDiscount, product.oldPrice, product.onSale, product.price]);

  return (
    <Container onClick={() => {toggleModal(product)}}>
      <Header>
        <Thumbnail>
        {product.onSale && <OnSale>{discount}% OFF</OnSale>}
          <Image
            src={product.thumbnail}
            alt={`Foto de ${product.title}`}
            width={192}
            height={192}
          /> 
        </Thumbnail>

        <h2>{product.title}</h2>
      </Header>
      
      <Body>
        <div>
          {product.onSale ? (
           <>
             <div>
               <small>De</small> <span>R$ {product.oldPrice}</span>
             </div>
             <div>
               <small>Por</small> R$ {product.price}
             </div>
           </> 
          ) : (
            <span>R$ {product.price}</span>
          )}
        </div>

        <button type="button">
          <FaIcons.FaCartPlus />
        </button>
      </Body>
    </Container>
  )
}