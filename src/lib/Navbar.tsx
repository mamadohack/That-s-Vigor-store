"use client";
import { NextPage } from "next";
import { LiaSearchSolid } from "react-icons/lia";
import { LiaHeart } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { useEffect, useRef, useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

import {
  fetchDataCart,
  getTotals,
  clearFavoriteList,
} from "@/Reduxtoolkitfeature/CartSlice";
import Link from "next/link";
import Minicart from "./minicart";
import Miniwishlistcard from "./miniwishlistcard";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  console.log("navbar rendered");

  const [showCart, setShowCart] = useState(false);
  const [collabseNavbar, setcollabseNavbar] = useState(false);
  const background = useRef<HTMLDivElement | null>(null);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  let favoriteItemsList = useEffect(() => {
    const t = dispatch(fetchDataCart());
    t.then((r) => {
      return dispatch(getTotals());
    });
  }, [dispatch]);
  return (
    <>
      <div className="w-full z-20 relative bg-white">
        <nav className=" border-gray-200 ">
          <div className=" px-2 flex flex-wrap items-center justify-between mx-auto">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse py-5 "
            >
              <span className="self-center text-[30px] font-semibold whitespace-nowrap cookie-regular ">
                That&apos;s Vigor
              </span>
            </a>
            <button
              // data-collapse-toggle="navbar-default"
              type="button"
              className="group flex justify-center items-center w-10 h-10 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              // aria-controls="#navbar-default"
              // aria-expanded="false"
              onClick={() => {setcollabseNavbar(p=>!p)}}
            >
              <LuAlignJustify className="text-2xl group-focus:rotate-90 duration-150 font-bold" />
              {/* <AiOutlineClose className="text-2xl group-focus:opacity-100 opacity-0 duration-200 absolute font-bold" /> */}
              {/* <svg
                className="w-5 h-5 inline-block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                // viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                  className=" group-focus:opacity-0 opacity-100 duration-200"
                />
                <line
                  x1="1"
                  y1="1"
                  x2="15"
                  y2="14"
                  strokeLinecap="round"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="group-focus:opacity-100 opacity-0 duration-200"
                ></line>
                <line
                  x1="1"
                  y1="14"
                  x2="15"
                  y2="1"
                  strokeLinecap="round"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className=" group-focus:opacity-100 opacity-0 duration-200"
                ></line>
              </svg> */}
            </button>
            <div
              className={`${collabseNavbar ? "block" : "hidden"} w-full lg:block lg:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                <li>
                  <a
                    href="/#"
                    className="block py-2 px-3 text-gray-900 rounded-none md:bg-transparent md:p-0 border-b-2 border-[#ca1515] text-sm"
                    aria-current="page"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    WOMEN’S
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    MEN’S
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    SHOP
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    PAGES
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    BLOG
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-right space-x-5 lg:flex items-center hidden">
              <div className="inline-block align-middle">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded md:p-0 text-xs"
                >
                  Login / Register
                </a>
              </div>
              <ul className="space-x-1 pt-1 flex ">
                <li className="ps-4">
                  <LiaSearchSolid className="text-2xl h-[115px] " />
                </li>
                <li
                  className="ps-5  group relative"
                  onMouseEnter={() => {
                    setShowCart(true);
                  }}
                  onMouseLeave={() => {
                    setShowCart(false);
                  }}
                >
                  <div className="flex items-center">
                    <LiaHeart className="text-2xl h-[115px]" />
                    <span
                      className={`text-sm text-rose-600 ms-1 duration-200 ${
                        cart.FavoriteItems.length > 0
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {cart?.FavoriteItems.length}
                    </span>
                  </div>
                  <div className="bg-white absolute top-auto right-[3%] p-3 space-y-3 hidden group-hover:block w-[350px]">
                    <h2 className="text-lg font-semibold">Wishlist </h2>
                    <div className="max-h-[400px] overflow-x-hidden overflow-y-auto">
                      {cart?.FavoriteItems.length === 0 && <h2>Empty List</h2>}
                      {cart.FavoriteItems.map((item, index) => (
                        <Miniwishlistcard
                          key={index}
                          cartInfo={item}
                          dispatch={dispatch}
                        />
                      ))}
                    </div>
                    <div className="font-semibold text-center">
                      <span className="">{cart?.FavoriteItems.length} </span>
                      <span className="ms-1">item(s) in your Lists</span>
                    </div>
                    <Link
                      href="/cart"
                      className="block text-white text-center w-full bg-rose-600 font-semibold p-2 "
                    >
                      View Cart
                    </Link>
                    <Link
                      onClick={() => {
                        dispatch(clearFavoriteList(""));
                      }}
                      href="#"
                      className="text-center block text-rose-600 border border-rose-600 w-full font-semibold p-2"
                    >
                      Clear Wishlist
                    </Link>
                  </div>
                </li>
                <li
                  className="ps-4 relative group"
                  onMouseEnter={() => {
                    setShowCart(true);
                  }}
                  onMouseLeave={() => {
                    setShowCart(false);
                  }}
                >
                  <Link href="/cart" className="flex items-center">
                    <LiaShoppingBagSolid
                      className="text-2xl cursor-pointer h-[115px]"
                      // onClick={() => {
                      //   setShowCart((p) => !p);
                      // }}
                    />
                    <span
                      className={`text-sm text-rose-600 ms-1 duration-200 ${
                        cart.totalQuantity > 0 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {cart?.totalQuantity}
                    </span>
                    {/* <div
                        className={`text-xs flex justify-center items-center ${
                          cart?.totalQuantity > 0 ? "opacity-100" : "opacity-0"
                        } duration-500 ease-in-out absolute -top-3/4 -right-1/4 w-5 h-5 text-center rounded-full bg-rose-400 text-white`}
                      >
                        <span>{cart?.totalQuantity}</span>
                      </div> */}
                  </Link>
                  <div className="bg-white absolute top-auto right-[3%] p-3 space-y-3 hidden group-hover:block w-[350px]">
                    <h2 className="text-lg font-semibold">Shopping Cart </h2>
                    <div className="max-h-[400px] overflow-x-hidden overflow-y-auto">
                      {cart?.cartItems.length === 0 && <h2>Empty List</h2>}
                      {cart.cartItems.map((item, index) => (
                        <Minicart
                          key={index}
                          cartInfo={item}
                          dispatch={dispatch}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <span className="">Total</span>
                      <span>${cart.totalPrice}</span>
                    </div>
                    <Link
                      href="/cart"
                      className="block text-white text-center w-full bg-rose-600 font-semibold p-2 "
                    >
                      View Cart
                    </Link>
                    <Link
                      href="#"
                      className="text-center block text-rose-600 border border-rose-600 w-full font-semibold p-2"
                    >
                      Checkout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {showCart && (
        <div className="bg-black opacity-70 fixed inset-0 z-10"></div>
      )}
    </>
  );
};

export default Navbar;

//${cart.length === 0 ? 'opacity-0':'opacity-100'}
