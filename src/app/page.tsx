import Image from "next/image";
import Homepage from "@/lib/Homepage";
import ProductList from "@/lib/ProductList";
import { ProductListAPiType } from "@/lib/types";
import Banner from "@/lib/Banner";
import Discount from "@/lib/Discount";
import Footer from "@/lib/Footer";

export default async function Home() {
  const response = await fetch("http://localhost:9000/products",{cache:"no-store"});
  const productsData: ProductListAPiType[] = await response.json();

  
  return (
    <main className="">
      <Homepage />
      <ProductList productsData={productsData} />
      <Banner />
      <Discount />
      <Footer />
    </main>
  );
}
