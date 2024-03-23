import Image from "next/image";
import Homepage from "@/lib/Homepage";
import ProductList from "@/lib/ProductList";
import { ProductListAPiType } from "@/lib/types";
import Banner from "@/lib/Banner";
import Discount from "@/lib/Discount";
export const ProductListAPi: ProductListAPiType[] = [
  {
    id: 1,
    title: "Buttons tweed blazer",
    image: "/img/product/product-1.jpg",
    rating: "****",
    price: 59.0,
    condition: "new",
  },
  {
    id: 2,
    title: "Flowy striped skirt",
    image: "/img/product/product-2.jpg",
    rating: "***",
    price: 49.0,
  },
  {
    id: 3,
    title: "Cotton T-Shirt",
    image: "/img/product/product-3.jpg",
    rating: "**",
    price: 59.0,
    condition: "out",
  },
  {
    id: 4,
    title: "Slim striped pocket shirt",
    image: "/img/product/product-4.jpg",
    rating: "****",
    price: 59.0,
  },
  {
    id: 5,
    title: "Fit micro corduroy shirt",
    image: "/img/product/product-5.jpg",
    rating: "*****",
    price: 59.0,
  },
  {
    id: 6,
    title: "Tropical Kimono",
    image: "/img/product/product-6.jpg",
    rating: "***",
    price: 39.0,
    condition: "sale",
  },
  {
    id: 7,
    title: "Contrasting sunglasses",
    image: "/img/product/product-7.jpg",
    rating: "*",
    price: 52.0,
  },
  {
    id: 8,
    title: "Water resistant backpack",
    image: "/img/product/product-8.jpg",
    rating: "****",
    price: 49.0,
    condition: "sale",
  },
];
export default function Home() {
  
  return (
    <main>
      <Homepage />
      <ProductList />
      <Banner />
      <Discount/>

    </main>
  );
}
