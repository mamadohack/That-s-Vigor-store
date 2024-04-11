
export type ProductListAPiType = {
  id: number;
  title: string;
  image: string[];
  rating: string;
  price: number;
  condition?: string;
};

export type CartItem = {
  
        id: number,
        title: string,
        image: string[],
        rating: string,
        price: number,
        cartQuantity: number
      
}