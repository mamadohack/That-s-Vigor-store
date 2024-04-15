"use client";
import { NextPage } from "next";
import { LiaSearchSolid } from "react-icons/lia";
import { LiaHeart } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { useEffect, useRef, useState } from "react";
import { fetchDataCart, getTotals } from "@/Reduxtoolkitfeature/CartSlice";
import Link from "next/link";
import Minicart from "./minicart";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  console.log("navbar rendered");
  const [showCart, setShowCart] = useState(false);
  const background = useRef<HTMLDivElement | null>(null);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const t = dispatch(fetchDataCart());
    t.then((r) => {
      return dispatch(getTotals());
    });
  }, [dispatch]);
  return (
    <>
      <div className="w-full z-20 relative bg-white">
        <div className="container mx-auto px-2 sm:p-0">
          <nav className=" border-gray-200  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse py-5"
              >
                <span className="self-center text-[50px] font-semibold whitespace-nowrap cookie-regular ">
                  That&apos;s Vigor
                </span>
              </a>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only"></span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full lg:block lg:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
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
                  <li className="ps-4">
                    <LiaHeart className="text-2xl h-[115px]" />
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
                        className={`text-sm text-rose-600 ms-1 duration-200 ${cart.totalQuantity > 0 ? "opacity-100" : "opacity-0"}`}
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
      </div>
      {showCart && (
        <div className="bg-black opacity-70 fixed inset-0 z-10"></div>
      )}
    </>
  );
};

export default Navbar;

//${cart.length === 0 ? 'opacity-0':'opacity-100'}
