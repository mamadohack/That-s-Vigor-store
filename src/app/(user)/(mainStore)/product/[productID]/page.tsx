import { NextPage } from "next";
import { ProductListAPiType } from "@/lib/types";
import ProductDetails from "./productDetails";
import { fetchingproduct } from "../../page";
import { gql } from "@apollo/client";
import { print } from "graphql/language/printer";

interface Props {
  params: { productID: any };
}
const Page: NextPage<Props> = async ({ params: { productID } }) => {
  const ProductQuery = gql`
    query Product($id: ID!) {
      product(id: $id) {
        data {
          id
          attributes {
            title
            image {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
            price
            rating
          }
        }
      }
    }
  `;
  const productData = await fetchingproduct(ProductQuery, { id: productID });
  const id = productData?.product?.data?.id;
  console.log(productID);
    return (
      <div>
        {id ? (
          <ProductDetails
            productData={productData.product.data.attributes}
          ></ProductDetails>
        ) : (
          <p>wrong path</p>
        )}
      </div>
    );
};

export default Page;
