import Image from 'next/image'
import * as FaIcons from 'react-icons/fa'
import { ICard } from "../../interfaces/ICard"
import { Body, Container, Header, OnSale, Thumbnail } from "./styles"

export function Card(props: ICard){
  const product = props.product

  return (
    <Container>
      <Header>
        <Thumbnail>
        {product.onSale && <OnSale>{0}% OFF</OnSale>}
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