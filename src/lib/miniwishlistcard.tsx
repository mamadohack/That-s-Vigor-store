import { NextPage } from "next";
import Image from "next/image";
import {  useState } from "react";
import { CartItem } from "@/lib/types";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import {
  addFavoriteitem
} from "@/Reduxtoolkitfeature/CartSlice";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  cartInfo: any;
  dispatch: any;
}

const Miniwishlistcard: NextPage<Props> = ({ cartInfo, dispatch }) => {
  const { toast } = useToast();

  return (
    <div className="flex gap-3 mb-3">
      <Link
        className="opacity-85"
        href={`http://localhost:3000/product/${cartInfo.id}`}
      >
        <Image
          alt=""
          src={`http://localhost:1337${cartInfo.attributes.image.data[0].attributes.url}`}
          width={80}
          height={106}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-contain"
        ></Image>
      </Link>
      <div className="flex-grow flex flex-col justify-center gap-1">
        <h2 className="font-bold ">
          $ {cartInfo.attributes.price}
          <span className="float-right text-base inline-block p-1 cursor-pointer">
            <MdOutlineDeleteOutline
              onClick={() => {
                dispatch(addFavoriteitem(cartInfo)).then(() => {
                  toast({
                    className: "bg-rose-600 text-white font-semibold",
                    description: "Item deleted successfully.",
                  });
                });
              }}
            ></MdOutlineDeleteOutline>
          </span>
        </h2>
        <h2 className="text-gray-500 text-sm">{cartInfo.attributes.title}</h2>
      </div>
    </div>
  );
};


export default Miniwishlistcard;
