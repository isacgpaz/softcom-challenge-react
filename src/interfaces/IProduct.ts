export interface IProduct{
  id: string;
  title: string;
  description: string[];
  category: string;
  thumbnail: string;
  price: number;
  onSale?: boolean
  oldPrice?: number;
  sellerSuggestion: boolean;
}