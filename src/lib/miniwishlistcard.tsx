import { NextPage } from "next";
import Image from "next/image";
import {  useState } from "react";
import { CartItem } from "@/lib/types";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {
  addFavoriteitem
} from "@/Reduxtoolkitfeature/CartSlice";

interface Props {
  cartInfo: CartItem;
  dispatch: any;
}

const Miniwishlistcard: NextPage<Props> = ({ cartInfo, dispatch }) => {
  const indexImage = cartInfo.id - 1;

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
      <div className="flex-grow flex flex-col justify-center gap-1">
        <h2 className="font-bold ">
          $ {cartInfo.price}
          <span className="float-right text-base inline-block p-1 cursor-pointer">
            <MdOutlineDeleteOutline
              onClick={() => {
                dispatch(addFavoriteitem(cartInfo));
              }}
            ></MdOutlineDeleteOutline>
          </span>
        </h2>
        <h2 className="text-gray-500 text-sm">{cartInfo.title}</h2>
      </div>
    </div>
  );
};


export default Miniwishlistcard;
