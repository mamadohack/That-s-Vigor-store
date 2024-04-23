import Image from "next/image";
import Homepage from "@/lib/Homepage";
import ProductList from "@/lib/ProductList";
import { ProductListAPiType } from "@/lib/types";
import Banner from "@/lib/Banner";
import Discount from "@/lib/Discount";

const fetchingproduct = async () => {
   try {
     const response = await fetch("http://localhost:9000/products", {
       cache: "no-store",
     });
     return response.json();
   } catch (error) {
     console.log("error at clearing favorite list (services) => " + error);
   }
};
export default async function Home() {
 const productsData: ProductListAPiType[] = await fetchingproduct();

  return (
    <main className="">
      <Homepage />
      <ProductList productsData={productsData} />
      <Banner />
      <Discount />
    </main>
  );
}
