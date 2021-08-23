import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as MdIcons from 'react-icons/md'
import * as FaIcons from 'react-icons/fa'
import MediaQuery from 'react-responsive'
import { useCard } from '../../hooks/useCard'
import { useProductModal } from '../../hooks/useProductModal'
import { IProduct } from '../../interfaces/IProduct'
import { OnSale, Thumbnail } from '../Card/styles'
import { Quantifier } from '../Quantifier'
import { TextField } from '../TextField'
import { ButtonCloseModal, Container, Header, Observation, ProductBody, ProductInfo } from "./styles"

interface ProductModalProps{
  product?: IProduct;
}

export function ProductModal(props: ProductModalProps){
  const { calcDiscount } = useCard();
  
  const [discount, setDiscount] = useState(0);

  const product = props.product;

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
      <MediaQuery maxWidth={760}>
        <Header>
          <button type="button" onClick={() => { toggleModal()}}>
            <span>
              <MdIcons.MdKeyboardArrowLeft />
            </span>
            Voltar
          </button>
        </Header>
      </MediaQuery>

      <ProductInfo>
        <MediaQuery minWidth={760}>
          <ButtonCloseModal type="button" onClick={() => { toggleModal()}}>
            <FaIcons.FaTimes />
          </ButtonCloseModal>
        </MediaQuery>

        <Thumbnail>
          {product.onSale && <OnSale>{discount}% OFF</OnSale>}
          <Image
            src={product.thumbnail}
            alt={`Foto de ${product.title}`}
            width={192}
            height={192}
          /> 
        </Thumbnail>

        <ProductBody>
          <div>
            <h2>{product.title}</h2>

            <ul>
              {product.description.map((description, index) => {
                return (
                  <li key={index}>- {description}</li>
                )
              })}
            </ul>
          </div>

          <Observation>
            <div>
              <p>Observações:</p>
              <small>0/500</small>
            </div>

            <TextField />
          </Observation>
          
          <Quantifier price={product.price}/>
        </ProductBody>
      </ProductInfo>
    </Container>
  )
}