import { NextPage } from "next";
import Image from "next/image";
import type { Blogitem } from "@/app/(user)/(mainStore)/blog/page";
import { ComponentPropsWithRef } from "react";
// interface Props extends ComponentPropsWithRef<"div"> {
//   blogitem: Blogitem;
// }
interface Props  {
  blogitem: Blogitem;
  className?:string
}

const Blogcard = ({ blogitem, className }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        alt=""
        src={blogitem.image}
        width={300}
        height={450}
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        className="w-full h-auto object-cover mb-8 overflow-hidden"
      ></Image>
      <div className="bg-white py-1 absolute bottom-0 left-0 w-[80%] overflow-hidden">
        <h2 className="font-semibold">{blogitem.title}</h2>
        <p className="text-gray-500 text-sm py-1">
          by {blogitem.author} | {new Date(blogitem.date).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default Blogcard;
