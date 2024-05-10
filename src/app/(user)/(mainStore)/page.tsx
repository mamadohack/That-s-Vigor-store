import Image from "next/image";
import Homepage from "@/lib/Homepage";
import ProductList from "@/lib/ProductList";
import { ProductListAPiType } from "@/lib/types";
import Banner from "@/lib/Banner";
import Discount from "@/lib/Discount";
import {  gql } from "@apollo/client";
import { print } from "graphql/language/printer";



export const fetchingproduct = async (query:any,variables:any = undefined) => {
   try {
    const { data } = await fetch("http://localhost:1337/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: print(query),
        variables
      }),
      cache: "no-store",
    }).then((res) => res.json());
    return data;
     
   } catch (error) {
     console.log("fetching main products page => " + error);
   }
};
export default async function Home() {
    const allQuery = gql`
      query Categories {
        categories(filters: { name: { eq: "all" } }) {
          data {
            attributes {
              name
              products {
                data {
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
                  id
                }
              }
            }
          }
        }
      }
    `;
    const dressQuery = gql`
      query Categories {
        categories(filters: { name: { eq: "dress" } }) {
          data {
            attributes {
              name
              products {
                data {
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
                  id
                }
              }
            }
          }
        }
      }
    `;
    const bagsQuery = gql`
      query Categories {
        categories(filters: { name: { eq: "bag" } }) {
          data {
            attributes {
              name
              products {
                data {
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
                  id
                }
              }
            }
          }
        }
      }
    `;
    const all = await fetchingproduct(allQuery);
    const dress = await fetchingproduct(dressQuery);
    const bags = await fetchingproduct(bagsQuery)
  return (
    <main className="">
      <Homepage />
      {all && dress && bags && <ProductList all={all} dress={dress} bags ={bags} />}
      <Banner />
      <Discount />
    </main>
  );
}
