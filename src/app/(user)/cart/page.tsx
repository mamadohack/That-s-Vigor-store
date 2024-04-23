"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import Cart from "./cart";
import { CartItem } from "@/lib/types";
import AlertCompont from "@/lib/alertCompont";
import { useEffect } from "react";
import { fetchDataCart } from "@/Reduxtoolkitfeature/CartSlice";
import { GrSecure } from "react-icons/gr";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";
import {
  updateQty,
  getTotals,
  deleteItem,
} from "@/Reduxtoolkitfeature/CartSlice";

interface Props {}
const Page: NextPage<Props> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    const t = dispatch(fetchDataCart());
    t.then((r: any) => {
      return dispatch(getTotals());
    });
  }, [dispatch]);

  return (
    <>
      {/* <div className="bg-black opacity-80 fixed inset-0"></div> */}
      <nav className="flex justify-between px-10 items-center border-b">
        <div className="">
          <Link href={"/"}>
            <span className="self-center text-[30px] font-semibold whitespace-nowrap cookie-regular py-5 inline-block">
              That&apos;s Vigor
            </span>
          </Link>
          <span className="hidden md:inline-block ms-5 ">
            <span>
              <GrSecure className="text-green-600 inline-block text-2xl" />
            </span>
            <span className="inline-block ms-1 text-green-600 text-xs align-bottom">
              Secure Checkout
            </span>
          </span>
        </div>
        <Link href={"/"}><div className="text-xs text-gray-500 mt-5">
          Continue Shopping <FaCaretRight className="inline-block" />{" "}
        </div></Link>
       
      </nav>
      <div className="md:px-20 px-10 mb-20 mt-10">
        <div className="flex flex-wrap gap-5 md:flex-row flex-col">
          <div className="flex-grow">
            <h2 className="font-semibold text-xl">Shopping Cart</h2>
            <div className="space-y-3">
              {cart.cartItems.length === 0 && (
                <h2 className="py-2">Oops, your cart is empty!</h2>
              )}
              {cart.cartItems.map((item: CartItem, index) => {
                return (
                  <Cart key={index} cartInfo={item} dispatch={dispatch}></Cart>
                );
              })}
            </div>
          </div>
          <div className="w-[300px] mx-auto">
            <h2 className="font-semibold text-xl py-2">Order Summary</h2>
            <div className="py-2 border-b">
              <span className="">Subtotal</span>
              <span className="float-right text-sm">${cart.totalPrice}</span>
            </div>
            <div className="py-2 text-xl font-semibold">
              <span className="text-base">Total</span>
              <span className="float-right">${cart.totalPrice}</span>
            </div>
            <button className="block text-center w-full py-3 bg-rose-600 text-white font-semibold hover:opacity-85 duration-200">
              CHECKOUT
            </button>
            <p className="text-gray-500 text-xs py-2">
              Shipping calculation and discount coupon use in the next step
            </p>
            <h2 className="py-3 font-semibold text-sm">We accept</h2>
            <div className="flex flex-wrap justify-center gap-5">
              <Image
                alt="paypal"
                src={
                  "https://img-s.mlo.me/milanoo/images/newJian/footer_paypal.svg"
                }
                height={40}
                width={80}
              ></Image>
              <Image
                alt="paypal"
                src={
                  "https://img-s.mlo.me/milanoo/images/newJian/footer_visa.svg"
                }
                height={40}
                width={80}
              ></Image>
              <Image
                alt="paypal"
                src={
                  "https://img-s.mlo.me/milanoo/images/newJian/footer_diner_club.svg"
                }
                height={40}
                width={80}
              ></Image>
              <Image
                alt="paypal"
                src={
                  "https://img-s.mlo.me/milanoo/images/newJian/footer_americanexpress.svg"
                }
                height={40}
                width={80}
              ></Image>
            </div>
            <h2 className="py-2 font-semibold text-sm">Easy Returns</h2>
            <p className="text-xs text-gray-500 leading-5">
              We gladly accept returns within 14 days of receipt for most items
              in new condition if you are not 100% satisfied with the items you
              received.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
