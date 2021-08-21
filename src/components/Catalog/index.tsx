import { ICatalog } from "../../interfaces/ICatalog";
import { Card } from "../Card";
import { Container, ProductsList } from "./styles";

export function Catalog(props: ICatalog){
  return (
    <Container>
      <h2>{props.sectionTitle}</h2>

      <ProductsList>
        {props.products.length != 0 ? (
          props.products.map(product => {
            return (
              <div key={product.id}>
                <Card product={product}/>
              </div>
            )
          })
        ) : (
          <p>Não há itens disponíveis</p>
        )}
      </ProductsList>
    </Container>
  )
}