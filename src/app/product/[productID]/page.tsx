import { NextPage } from "next";
import { ProductListAPiType } from "@/lib/types";
import ProductDetails from "./productDetails";


interface Props {
  params: { productID: number };
}

const Page: NextPage<Props> = async ({ params: { productID } }) => {
  const response = await fetch(`http://localhost:9000/products/${productID}`);
  const productData: ProductListAPiType = await response.json();

  return (
    <div>{productData?.id && <ProductDetails productData={productData}></ProductDetails>}</div>
  );
};

export default Page;
