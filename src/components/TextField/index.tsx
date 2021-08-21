import { ITextField } from "../../interfaces/ITextField"
import { Container } from "./styles"

export function TextField(props: ITextField){
  return (
    <Container>
      <input 
        type="text" 
        placeholder={props.placeHolder}
      />

      <span>
        {props.children}
      </span>
    </Container>
  )
}