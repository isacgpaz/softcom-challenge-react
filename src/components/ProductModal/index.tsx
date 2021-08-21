import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md'
import { useCard } from '../../hooks/useCard'
import { useProductModal } from '../../hooks/useProductModal'
import { IProduct } from '../../interfaces/IProduct'
import { OnSale } from '../Card/styles'
import { Quantifier } from '../Quantifier'
import { TextField } from '../TextField'
import { Container, Header, Observation, ProductInfo, Thumbnail } from "./styles"

export function ProductModal(props: IProduct){
  const { calcDiscount } = useCard();
  
  const [discount, setDiscount] = useState(0);

  const product = props;

  useEffect(() => {
    if(product.onSale){
      setDiscount(
        calcDiscount(parseFloat(String(product.price).replace(',','.')), parseFloat(String(product.oldPrice).replace(',','.')))
      )
    }
  }, [calcDiscount, product.oldPrice, product.onSale, product.price]);

  const { toggleModal } = useProductModal()

  return (
    <Container>
       <Header>
        <button type="button" onClick={() => { toggleModal()}}>
          <span>
            <MdIcons.MdKeyboardArrowLeft />
          </span>
          Voltar
        </button>
       </Header>

       <ProductInfo>
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

        <ul>
          {product.description.map((item, index) => {
            return (
              <li key={index}>- {item}</li>
            )
          })}
        </ul>
       </ProductInfo>

       <Observation>
          <div>
            <p>Observações:</p>
            <span>0/500</span>
          </div>

          <TextField />
       </Observation>

       <Quantifier price={product.price}/>
    </Container>
  )
}