import { NextPage } from "next";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface Props {}

const Cart: NextPage<Props> = ({}) => {
  const [state, setState] = useState({ price: 100, qty: 1 }); //{ price: productData.price, qty: 1 }
  const inputQTY = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex my-5 gap-3">
      <div className="">
        <Image
          alt=""
          src={"/img/product/1.jpg"}
          width={120}
          height={200}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-contain"
        ></Image>
      </div>
      <div className="flex-grow">
        <h2 className="font-bold py-2">$36.99</h2>
        <h2 className="text-gray-500 text-xs">
          Maxi Dress Purple V-Neck Sleeveless Lace Up Casual Floor Length Dress
        </h2>
        <p className="space-x-3">
          <span className="text-gray-500 py-2 inline-block text-xs">
            Color: <span className="text-black">Burgundy</span>
          </span>
          <span className="text-gray-500 py-2 inline-block text-xs">
            Size:
            <span className="text-black">L</span>
          </span>
        </p>
        <div>
          <div className="flex items-center flex-start mt-1 float-right">
            <span
              className="text-xs block cursor-pointer hover:border-rose-400 border p-2 text-center border-transparent duration-150"
              onClick={() => {
                if (state.qty > 1) {
                  setState((p) => {
                    return {
                      qty: p.qty - 1,
                      price: p.price - 100,
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
              className="text-xs text-center font-semibold outline-none h-[30px] inline-block w-[50px]"
              pattern="[0-9]{2}"
              ref={inputQTY}
            />
            <span
              className="text-xs block cursor-pointer hover:border-rose-400 border p-2 text-center border-transparent duration-150"
              onClick={() => {
                setState((p) => {
                  return {
                    qty: p.qty + 1,
                    price: p.price + 100,
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
        <div className="space-x-5 mt-10 text-xs font-semibold">
          <span className="underline ">Edit</span>
          <span className="underline ">Save for later</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
