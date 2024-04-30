import Blogcard from "@/lib/blogcard";
import { ComponentPropsWithRef } from "react";

const Page = async ({}) => {
  const response = await fetch("http://localhost:9000/blog", {
    cache: "no-store",
  });
  const blogData: Blogitem[] = await response.json();

  return (
    // <div>ddsq</div>
    <div className="md:px-10 px-5 lg:px-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-20 overflow-hidden ">
      <Blogcard blogitem={blogData[0]} className=" row-span-2" />
      <Blogcard blogitem={blogData[1]} />
      <Blogcard blogitem={blogData[2]} />
      <Blogcard blogitem={blogData[3]} />
      <Blogcard blogitem={blogData[4]} />
      <Blogcard blogitem={blogData[6]} />
      <Blogcard blogitem={blogData[7]} />
      <Blogcard blogitem={blogData[5]} className="row-span-2" />
      <Blogcard blogitem={blogData[8]} />
      <Blogcard blogitem={blogData[9]} />
    </div>
  );
};

export type Blogitem = {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
};

export default Page;
