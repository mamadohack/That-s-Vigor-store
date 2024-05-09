"use client";
import { NextPage } from "next";
import { LiaSearchSolid } from "react-icons/lia";
import { LiaHeart } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { useEffect, useMemo, useRef, useState } from "react";
import { LuAlignJustify } from "react-icons/lu";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { LiaUserCircle } from "react-icons/lia";
import { LiaUser } from "react-icons/lia";

import {
  fetchDataCart,
  getTotals,
  clearFavoriteList,
  fetchDatafavotite,
} from "@/Reduxtoolkitfeature/CartSlice";
import Link from "next/link";
import Minicart from "./minicart";
import Miniwishlistcard from "./miniwishlistcard";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  console.log("navbar rendered");
  // const { toast } = useToast();
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser<{ username: string; email: string } | null>();
  const signout = useSignOut();
  const [showCart, setShowCart] = useState(false);
  const [collabseNavbar, setcollabseNavbar] = useState(false);
  const background = useRef<HTMLDivElement | null>(null);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  console.log(isAuthenticated)
  useEffect(() => {
    console.log("authentication");
    setMounted(true);
    dispatch(fetchDataCart()).then((r) => dispatch(getTotals()));
    dispatch(fetchDatafavotite()).then((r) => dispatch(getTotals()));
  }, [dispatch]);
  return (
    <>
      <div className="w-full z-20 relative bg-white">
        <nav className=" border-gray-200 ">
          <button onClick={()=>{console.log(isAuthenticated)}}>zz</button>
          <div className=" px-5 flex flex-wrap items-center justify-between mx-auto">
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
              onClick={() => {
                setcollabseNavbar((p) => !p);
              }}
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
              className={`${
                collabseNavbar ? "block" : "hidden"
              } w-full lg:block lg:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col px-7 py-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-4 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white ">
                <li>
                  <a
                    href="/#"
                    className="w-fit block py-2  text-gray-900 rounded-none lg:bg-transparent lg:p-0 border-b-2 border-[#ca1515] text-sm"
                    aria-current="page"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-fit block py-2  text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    WOMEN’S
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="w-fit block py-2  text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    MEN’S
                  </a>
                </li> */}
                <li>
                  <a
                    href="#"
                    className="w-fit block py-2  text-gray-900  hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    SHOP
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-fit block py-2  text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    PAGES
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="w-fit block py-2  text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    BLOG
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="w-fit block py-2  text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                  >
                    CONTACT
                  </a>
                </li>
                <li className="lg:hidden block">
                  <a
                    href="#"
                    className=" block py-2 text-gray-900 rounded text-sm"
                  >
                    Login / Register
                  </a>
                  <ul className="flex items-center justify-center gap-5">
                    <li>
                      <Link href="">
                        <LiaSearchSolid className="text-2xl inline-block " />
                        <span className="text-sm text-rose-600 me-1  duration-200"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wishlist">
                        <LiaHeart className="text-2xl inline-block" />
                       {mounted && isAuthenticated && <span
                          className={`text-sm text-rose-600 ms-1 duration-200 ${
                            cart.FavoriteItems.length > 0
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          {cart?.FavoriteItems.length}
                        </span>}
                      </Link>
                    </li>
                    <li>
                      <Link href="/cart">
                        <LiaShoppingBagSolid className="text-2xl inline-block" />
                        {mounted && isAuthenticated &&
                          <span
                            className={`text-sm text-rose-600 ms-1 duration-200 ${
                              cart.totalQuantity > 0
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          >
                            {cart?.totalQuantity}
                          </span>
                        }
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-right space-x-5 lg:flex items-center hidden">
              <ul className="space-x-1 pt-1 flex ">
                <li
                  className="ps-5 group relative"
                  onMouseEnter={() => {
                    setShowCart(true);
                  }}
                  onMouseLeave={() => {
                    setShowCart(false);
                  }}
                >
                  <LiaUser className="text-2xl h-[115px]  " />
                  {mounted && isAuthenticated ? (
                    <div className="bg-white absolute top-auto right-[3%] p-3 space-y-2 hidden group-hover:block min-w-[200px] text-center">
                      <h2 className="text-sm">{auth?.username}</h2>
                      <button
                        className="block p-2 w-full font-semibold text-black border-black border"
                        onClick={() => {
                          signout();
                          router.push("/signin");
                        }}
                      >
                        Sign out
                      </button>
                    </div>
                  ) : (
                    <div className="bg-white absolute top-auto right-[3%] p-3 space-y-2 hidden group-hover:block w-[150px] text-center">
                      <Link
                        href="/signin"
                        className="block p-2 w-full bg-rose-600 font-semibold text-white"
                      >
                        Sign in
                      </Link>
                      <Link
                        href="/register"
                        className="block p-2 w-full font-semibold text-rose-600 border-rose-600 border"
                      >
                        Join
                      </Link>
                    </div>
                  )}
                </li>
                <li className="ps-5">
                  <LiaSearchSolid className="text-2xl h-[115px]  " />
                </li>
                <li
                  className="ps-5 group relative"
                  onMouseEnter={() => {
                    isAuthenticated && setShowCart(true);
                  }}
                  onMouseLeave={() => {
                    isAuthenticated && setShowCart(false);
                  }}
                >
                  <div className="flex items-center">
                    <LiaHeart className="text-2xl h-[115px]" />
                    {mounted && isAuthenticated && (
                      <span
                        className={`text-sm text-rose-600 ms-1 duration-200 ${
                          cart.FavoriteItems.length > 0
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        {cart?.FavoriteItems.length}
                      </span>
                    )}
                  </div>
                  {mounted && isAuthenticated && (
                    <div className="bg-white absolute top-auto right-[3%] p-3 space-y-3 hidden group-hover:block w-[350px]">
                      <h2 className="text-lg font-semibold">Wishlist </h2>
                      <div className="max-h-[400px] overflow-x-hidden overflow-y-auto">
                        {cart?.FavoriteItems.length === 0 && (
                          <h2>Empty List</h2>
                        )}
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
                      {/* <Link
                      href="/cart"
                      className="block text-white text-center w-full bg-rose-600 font-semibold p-2 "
                    >
                      View Cart
                    </Link> */}
                      <Link
                        onClick={() => {
                          dispatch(clearFavoriteList(""));
                        }}
                        href="#"
                        className="block text-white text-center w-full bg-rose-600 font-semibold p-2 "
                      >
                        Clear Wishlist
                      </Link>
                    </div>
                  )}
                </li>
                <li
                  className="ps-4 relative group"
                  onMouseEnter={() => {
                    isAuthenticated && setShowCart(true);
                  }}
                  onMouseLeave={() => {
                    isAuthenticated && setShowCart(false);
                  }}
                >
                  <Link href="/cart" className="flex items-center">
                    <LiaShoppingBagSolid
                      className="text-2xl cursor-pointer h-[115px]"
                      // onClick={() => {
                      //   setShowCart((p) => !p);
                      // }}
                    />
                    {mounted && isAuthenticated && <span
                      className={`text-sm text-rose-600 ms-1 duration-200 ${
                        cart.totalQuantity > 0 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {cart?.totalQuantity}
                    </span>}
                    {/* <div
                        className={`text-xs flex justify-center items-center ${
                          cart?.totalQuantity > 0 ? "opacity-100" : "opacity-0"
                        } duration-500 ease-in-out absolute -top-3/4 -right-1/4 w-5 h-5 text-center rounded-full bg-rose-400 text-white`}
                      >
                        <span>{cart?.totalQuantity}</span>
                      </div> */}
                  </Link>
                  {mounted && isAuthenticated && <div className="bg-white absolute top-auto right-[3%] p-3 space-y-3 hidden group-hover:block w-[350px]">
                    <h2 className="text-lg font-semibold">Shopping Cart </h2>
                    <div className="max-h-[400px] overflow-x-hidden overflow-y-auto">
                      {cart?.cartItems.length === 0 && (
                        <h2>Oops, your cart is empty!</h2>
                      )}
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
                      className="block text-white text-center w-full bg-rose-600 font-semibold p-2 hover:opacity-85 duration-200"
                    >
                      View Cart
                    </Link>
                    <Link
                      href="#"
                      className="text-center block text-rose-600 border border-rose-600 w-full font-semibold p-2 hover:opacity-85 duration-200"
                    >
                      Checkout
                    </Link>
                  </div>}
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
