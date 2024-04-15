
import { NextPage } from "next";
import Image from "next/image";
import { useRef, useState, useMemo } from "react";
import { CartItem } from "@/lib/types";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { sendData } from "@/store";
import {
  updateQty,
  getTotals,
  deleteItem,
} from "@/Reduxtoolkitfeature/CartSlice";

interface Props {
  cartInfo: CartItem;
  dispatch: any;
}

const Minicart: NextPage<Props> = ({ cartInfo, dispatch }) => {
  const [state, setState] = useState({
    price: cartInfo.price * cartInfo.cartQuantity,
    qty: cartInfo.cartQuantity,
  }); //{ price: productData.price, qty: 1 }
  // useEffect(() => {
  //   dispatch(updateQty({ qty: state.qty, id: cartInfo.id }));
  //   dispatch(getTotals());
  // }, [state.qty]);
//   const inputQTY = useRef<HTMLInputElement | null>(null);
//   const d = useMemo(() => {
//     dispatch(updateQty({ qty: state.qty, id: cartInfo.id }));
//     dispatch(getTotals());
//     sendData();
//   }, [state.qty]);
  const indexImage = cartInfo.id - 1;
  console.log(indexImage);

  return (
    <div className="flex gap-3 mb-3">
      <div className="">
        <Image
          alt=""
          src={cartInfo.image[indexImage]}
          width={80}
          height={106}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-contain"
        ></Image>
      </div>
      <div className="flex-grow flex flex-col justify-evenly">
        <h2 className="font-bold ">
          $ {state.price}
          <span className="float-right text-base inline-block p-1 cursor-pointer">
            <MdOutlineDeleteOutline
              onClick={() => {
                dispatch(deleteItem(cartInfo.id));
                dispatch(getTotals());
                sendData();
              }}
            ></MdOutlineDeleteOutline>
          </span>
        </h2>
        <h2 className="text-gray-500 text-xs">{cartInfo.title}</h2>
        <p className="space-x-3">
          <span className="text-gray-500 py-1 inline-block text-xs">
            Color: <span className="text-black">Burgundy</span>
          </span>
          <span className="text-gray-500 py-1 inline-block text-xs">
            Size:
            <span className="text-black"> L</span>
          </span>
        </p>
        {/* <div>
          <div className="flex items-center flex-start mt-1 float-right">
            <span
              className="text-xs block cursor-pointer hover:border-rose-400 border p-2 text-center border-transparent duration-150"
              onClick={() => {
                if (state.qty > 1) {
                  setState((p) => {
                    return {
                      qty: p.qty - 1,
                      price: p.price - cartInfo.price,
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
                    price: p.price + cartInfo.price,
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
        </div> */}
        <div className="space-x-5  text-xs ">
          <span className="text-gray-500 ">
            Quantity:{" "}
            <span className="text-black">{cartInfo.cartQuantity}</span>
          </span>
          <span className="text-gray-500 ">
            Subtotal:{" "}
            <span className="text-black">
              ${cartInfo.cartQuantity * cartInfo.price}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Minicart