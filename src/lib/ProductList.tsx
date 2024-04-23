"use client";
import Link from "next/link";
import { NextPage } from "next";
import { ProductListAPiType } from "./types";
import Image from "next/image";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { LiaHeart } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import {
  sendUserCartinfo,
  addFavoriteitem,
} from "@/Reduxtoolkitfeature/CartSlice";
import { useState } from "react";

interface Props {
  productsData: ProductListAPiType[];
}
const conditonCaseHandler = (condition: string) => {
  if (condition.toLowerCase() === "new") {
    return (
      <span className="absolute top-3 left-3 bg-green-600 text-white text-xs p-1 font-semibold">
        NEW
      </span>
    );
  }
  if (condition.toLowerCase() === "out") {
    return (
      <span className="absolute top-3 left-3 bg-black text-white text-xs p-1 font-semibold">
        OUT OF STOCK
      </span>
    );
  }
  if (condition.toLowerCase() === "sale") {
    return (
      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs p-1 font-semibold">
        SALE
      </span>
    );
  }
  return;
};
const ProductList: NextPage<Props> = ({ productsData }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const productCartListid: number[] = [];
  cart.cartItems.forEach((e) => {
    productCartListid.push(e.id);
  });
  const productFavoriteListid: number[] = [];
  cart.FavoriteItems.forEach((e) => {
    productFavoriteListid.push(e.id);
  });
  const [productfiltered, setFilterProduct] = useState(
    productsData.filter((i) => i.category === "dress")
  );
  return (
    <section>
      <div className="mx-auto px-10 md:px-14">
        <div
          id="navb"
          className="flex items-center justify-between py-[30px] flex-col md:flex-row"
        >
          <h2 className="font-semibold text-base md:text-xl lg:text-2xl md:pb-0 pb-3 flex-shrink-0">
            <span className="border-b-2 border-[#ca1515]">NEW</span> PRODUCT
          </h2>
          <ul className="space-x-5 text-xs md:text-sm flex flex-wrap items-center justify-center gap-2">
            <li className="inline-block border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent">
              <button>All</button>
            </li>
            <li className="inline-block border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent">
              <button
                onClick={() => {
                  setFilterProduct(
                    productsData.filter((i) => i.category === "dress")
                  );
                }}
              >
                Dresses
              </button>
            </li>
            {/* <li className="inline-block border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent">
              <button>Men’s</button>
            </li> */}
            <li className="inline-block border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent">
              <button
                onClick={() => {
                  setFilterProduct(
                    productsData.filter((i) => i.category === "bags")
                  );
                }}
              >
                Bags
              </button>
            </li>
            <li className="inline-block border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent">
              <button>Accessories</button>
            </li>
            <li className="inline-block border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent">
              <button>Cosmetics</button>
            </li>
          </ul>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {productfiltered?.map((product: ProductListAPiType) => (
            <div key={product.id} className="space-y-2 group">
              <div className="relative">
                <Image
                  src={product.image[0]} //640 × 853
                  width={640}
                  height={853}
                  alt={product.title}
                  // placeholder="blur"
                  // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2fXjv458/H9Bbtf/IDbD/7v//8/Mvfq/J+nEfxAbAF3NFsFiuaE1AAAAAElFTkSuQmCC"
                  priority
                  className="object-cover object-top w-full h-auto"
                  sizes="(min-width: 1540px) 320px, (min-width: 1280px) 400px, (min-width: 1040px) 350px, (min-width: 780px) 181px, (min-width: 640px) 224px, calc(100vw - 160px)"
                ></Image>
                {product?.condition && conditonCaseHandler(product.condition)}

                <div className=" absolute bottom-1/4 left-1/2 -translate-x-1/2 space-x-2 min-w-max">
                  <Link
                    href={`/product/${product.id}`}
                    className="align-bottom inline-block p-3 rounded-full bg-white text-xl translate-y-full group-hover:translate-y-0 duration-300 ease-in-out opacity-0 group-hover:opacity-100 hover:bg-red-600 hover:text-white hover:rotate-[360deg]"
                  >
                    <BsArrowsAngleExpand />
                  </Link>
                  <button
                    className={`p-3 rounded-full text-xl translate-y-full group-hover:translate-y-0 duration-300 ease-in-out opacity-0 group-hover:opacity-100 delay-200 ${
                      productFavoriteListid.includes(product.id)
                        ? "bg-red-600 text-white"
                        : "hover:bg-red-600 bg-white hover:text-white hover:rotate-[360deg]"
                    }`}
                    onClick={() => {
                      dispatch(addFavoriteitem(product));
                    }}
                  >
                    <LiaHeart />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(sendUserCartinfo({ product: product, qty: 1 }));
                    }}
                    className={`p-3 rounded-full text-xl translate-y-full group-hover:translate-y-0 duration-300 ease-in-out opacity-0 group-hover:opacity-100 delay-200 ${
                      productCartListid.includes(product.id)
                        ? "bg-red-600 text-white"
                        : "hover:bg-red-600 bg-white hover:text-white hover:rotate-[360deg]"
                    }`}
                  >
                    <LiaShoppingBagSolid />
                  </button>
                </div>
              </div>
              <h2 className="text-center text-sm pt-1">{product.title}</h2>
              <div className="text-center ">
                {Array.from(product.rating).map((r: string, index) => (
                  <IoIosStar
                    key={index}
                    className="text-yellow-500 inline-block"
                  />
                ))}
              </div>
              <h2 className="text-center font-semibold">{product.price} $</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
