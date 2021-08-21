import { useContext } from "react";
import { QuantifierContext } from "../contexts/QuantifierContext";

export function useQuantifier(){
  const context = useContext(QuantifierContext);

  return context;
}