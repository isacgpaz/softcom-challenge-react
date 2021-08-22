import { useSearch } from "../../hooks/useSearch"
import { ITextField } from "../../interfaces/ITextField"
import { Container } from "./styles"

export function TextField(props: ITextField){
  const { getProductByName, openSearch, closeSearch } = useSearch()

  return (
    <Container>
      <input 
        type="text" 
        placeholder={props.placeHolder}
        onChange={(event) => {
          props.doResearch && (
            event.target.value ? openSearch() : closeSearch(),
            getProductByName(event.target.value)
            )
        }}
      />

      <span>
        {props.children}
      </span>
    </Container>
  )
}