import { NextPage } from "next";
import { ProductListAPiType } from "@/lib/types";
import ProductDetails from "./productDetails";


interface Props {
  params: { productID: any };
}
const fetchingproductitem = async (productID:number) => {
  try {
    const response = await fetch(
      `http://localhost:9000/products/${productID}`,
      {
        cache: "no-store",
      }
    );
    return response.json();
  } catch (error) {
    console.log("error at fetching product details (services) => " + error);
  }
};
const Page: NextPage<Props> = async ({ params: { productID } }) => {
  const productData: ProductListAPiType = await fetchingproductitem(productID);
  console.log(productID);
    return (
      <div>
        {productData.id ? (
          <ProductDetails productData={productData}></ProductDetails>
        ):<p>wrong path</p>}
      </div>
    );
};

export default Page;
