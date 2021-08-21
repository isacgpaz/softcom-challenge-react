import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";

export function useCard(){
  const context = useContext(CardContext);

  return context;
}