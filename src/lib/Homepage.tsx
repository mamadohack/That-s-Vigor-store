import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Homepage: NextPage<Props> = ({}) => {
  return (
    <section id="Home">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-col-1 min-h-screen gap-2 ">
        <div
          className="sm:col-span-2 row-span-4 h-[638px] sm:bg-top bg-right-top space-y-3 flex justify-center flex-col px-5 sm:px-20 "
          style={{
            backgroundImage: 'url("img/categories/s.jpg")',
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-[60px] cookie-regular text-rose-600">
            Women’s fashion
          </h2>
          <p className="gradient-text font-semibold ">
            Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            incidid-unt labore edolore magna aliquapendisse ultrices gravida.
          </p>
          <Link
            href="#"
            className="text-rose-600 font-bold border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent max-w-fit"
          >
            SHOP NOW
          </Link>
        </div>
        <div
          className="col-span-1 row-span-2 h-[314px] space-y-1 flex justify-center flex-col px-8"
          style={{
            backgroundImage: 'url("img/categories/category-2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <h2 className="text-2xl font-bold">Men’s fashion</h2>
          <p className="text-gray-600">358 items</p>
          <Link
            href="#"
            className="font-bold border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent max-w-fit"
          >
            SHOP NOW
          </Link>
        </div>
        <div
          className="col-span-1 row-span-2 h-[314px] space-y-1 flex justify-center flex-col px-8"
          style={{
            backgroundImage: 'url("img/categories/category-3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <h2 className="text-2xl font-bold">Kid’s fashion</h2>
          <p className="text-gray-600">273 items</p>
          <Link
            href="#"
            className="font-bold border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent max-w-fit"
          >
            SHOP NOW
          </Link>
        </div>
        <div
          className="col-span-1 row-span-2 h-[314px] space-y-1 flex justify-center flex-col px-8"
          style={{
            backgroundImage: 'url("img/categories/category-4.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <h2 className="text-2xl font-bold">Cosmetics</h2>
          <p className="text-gray-600">159 items</p>
          <Link
            href="#"
            className="font-bold border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent max-w-fit"
          >
            SHOP NOW
          </Link>
        </div>
        <div
          className="col-span-1 row-span-2 h-[314px] space-y-1 flex justify-center flex-col px-8"
          style={{
            backgroundImage: 'url("img/categories/category-5.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <h2 className="text-2xl font-bold">Accessories</h2>
          <p className="text-gray-600">792 items</p>
          <Link
            href="#"
            className="font-bold border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent max-w-fit"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
