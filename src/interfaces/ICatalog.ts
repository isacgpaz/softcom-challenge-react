import { IProduct } from "./IProduct";

export interface ICatalog{
  sectionTitle: string
  products: Array<IProduct>
  search?: boolean
}