
export type ProductListAPiType = {
  id: number;
  category:string;
  title: string;
  image: string[];
  rating: string;
  price: number;
  condition?: string;
};

export type CartItem = {
  id: number;
  title: string;
  category:string;
  image: string[];
  rating: string;
  price: number;
  cartQuantity: number;
};