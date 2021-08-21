import { IProduct } from "./IProduct";

export interface IHome{
  products: Array<IProduct>;
  sellerSuggestion: Array<IProduct>;
  toys: Array<IProduct>;
  bedsAndHouses: Array<IProduct>;
  collars: Array<IProduct>;
  bonesAndSnacks: Array<IProduct>;
  health: Array<IProduct>;
}