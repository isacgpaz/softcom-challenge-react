import { TextFieldProps } from "../../interfaces/TextField"
import { Container } from "./styles"

export function TextField(props: TextFieldProps){
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