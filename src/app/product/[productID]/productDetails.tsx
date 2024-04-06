"use client";
import { NextPage } from "next";
import { ProductListAPiType } from "@/lib/types";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Size from "@/lib/Size";
import {
  addToCart,
  getTotals,
  sendUserCartinfo,
} from "@/Reduxtoolkitfeature/CartSlice";
import { useRef, useState } from "react";
interface Props {
  productData: ProductListAPiType;
}

// export const postUserCartItems = async (item: any) => {
//   try {
//     const res = await fetch(`http://localhost:9000/cart`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),
//     });
//     const data = await res.json();
//     console.log(item);
//   } catch (error) {
//     console.log("error at adding product to cart (services) => " + error);
//   }
// };
const ProductDetails: NextPage<Props> = ({ productData }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const inputQTY = useRef<HTMLInputElement | null>(null);
  const [state, setState] = useState({ price: productData.price, qty: 1 });
  return (
    <main>
      <div className="container mx-auto flex px-10 flex-wrap flex-col md:flex-row mb-20">
        <div className="w-full md:w-1/2">
          <Image
            src={productData.image}
            width={350}
            height={466}
            alt="img"
            className="object-cover rounded-md  mx-auto"
          ></Image>
        </div>
        <div className=" w-full md:w-1/2 md:ps-5 lg:ps-0">
          <h2 className="text-2xl text-gray-900 font-semibold mt-10">
            {productData.title}
          </h2>
          <div className="flex items-center gap-5 mt-1">
            <span>
              {Array.from(productData.rating).map((r: string, index) => (
                <IoIosStar
                  key={index}
                  className="text-yellow-500 inline-block"
                />
              ))}
            </span>
            <span className="text-gray-600 text-sm">153 Order</span>
            <span className="">{productData.condition?.toUpperCase()}</span>
          </div>
          <h2 className="font-semibold mt-3 text-lg">{state.price}$</h2>
          <p className="mt-3 text-pretty text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos
            fuga voluptas praesentium cumque minus odio debitis at? Quo repellat
            vero nesciunt amet consequuntur omnis, facilis vel consequatur nulla
            est!
          </p>

          <div className="my-3">
            <h2 className="font-semibold mb-3">Size</h2>
            <Size></Size>
          </div>
          <div>colors</div>
          <div className="mt-3">
            <h2 className="font-semibold">Qty</h2>
            <div className="flex items-center flex-start mt-1 ">
              <span
                className="block text-xl cursor-pointer hover:border-rose-400 border p-2 text-center border-transparent duration-150"
                onClick={() => {
                  if(state.qty > 1) {
                     setState((p) => {
                       return {
                         qty: p.qty - 1,
                         price: p.price - productData.price,
                       };
                     });
                  }
                  // if (+inputQTY.current!.value > 1) {
                  //   inputQTY.current!.value = (
                  //     +inputQTY.current!.value - 1
                  //   ).toString();
                  // }
                }}
              >
                <FaMinus />
              </span>
              <input
                type="text"
                name="qty"
                id="qty"
                value={state.qty}
                readOnly
                className="text-center text-lg font-semibold outline-none h-[30px] inline-block w-3/4 max-w-fit"
                pattern="[0-9]{2}"
                ref={inputQTY}
              />
              <span
                className="block text-xl cursor-pointer hover:border-rose-400 border p-2 text-center border-transparent duration-150"
                onClick={() => {
                  setState((p) => {
                    return {
                      qty: p.qty + 1,
                      price: p.price + productData.price,
                    };
                  });
                  // inputQTY.current!.value = (
                  //   +inputQTY.current!.value + 1
                  // ).toString();
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-3 ">
            <button
              className="p-3 bg-gray-700 text-white font-semibold text-sm rounded-lg "
              onClick={() => {
                dispatch(sendUserCartinfo({ product:productData, qty:state.qty }));
              }}
            >
              Add to Cart
            </button>
            <button className="p-3 bg-rose-700 text-white font-semibold text-sm rounded-lg ">
              Save ❤
            </button>
            <button
              onClick={() => {
                console.log(cart);
              }}
            >
              read state
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
