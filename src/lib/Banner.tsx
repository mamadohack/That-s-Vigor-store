"use client";
import { NextPage } from "next";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "swiper/css";

import "@/app/globals.css";

interface Props {}

const Banner: NextPage<Props> = ({}) => {
  return (
    <section>
      <div
        className="bg-top bg-cover h-[500px] my-20 py-10"
        style={{ backgroundImage: "url('/img/banner/banner-1.jpg')" }}
      >
        <Swiper
          className="mx-auto h-full max-w-[500px] "
          modules={[Pagination, Autoplay]}
          speed={2000}
          spaceBetween={50}
          loop
          autoplay={{
            delay: 4000,
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="h-full flex items-center justify-center flex-col gap-4 cursor-pointer">
              <span className="sm:text-2xl text-red-600">
                {"The Chloe Collection".toUpperCase()}
              </span>
              <h2 className="text-[30px] sm:text-[50px] cookie-regular">
                The Project Jacket
              </h2>
              <Link
                href="#"
                className="text-sm sm:text-base font-bold border-b-2 border-[#ca1515] max-w-fit"
              >
                SHOP NOW
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full flex items-center justify-center flex-col gap-4 cursor-pointer">
              <span className="sm:text-2xl text-red-600">
                {"The Chloe Collection".toUpperCase()}
              </span>
              <h2 className="text-[30px] sm:text-[50px] cookie-regular">
                The Project Jacket
              </h2>
              <Link
                href="#"
                className="text-sm sm:text-base font-bold border-b-2 border-[#ca1515] max-w-fit"
              >
                SHOP NOW
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full flex items-center justify-center flex-col gap-4 cursor-pointer">
              <span className="sm:text-2xl text-red-600">
                {"The Chloe Collection".toUpperCase()}
              </span>
              <h2 className="text-[30px] sm:text-[50px] cookie-regular">
                The Project Jacket
              </h2>
              <Link
                href="#"
                className="text-sm sm:text-base font-bold border-b-2 border-[#ca1515] max-w-fit"
              >
                SHOP NOW
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-10 my-10 gap-10">
        <div className="space-y-5 col-span-1">
          <h2 className="text-xl font-semibold border-b-2 border-[#ca1515] max-w-fit">
            HOT TREND
          </h2>
          <ul className="space-y-5">
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/bs-1.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Chain bucket bag</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">59.0 $</h2>
              </div>
            </li>
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/bs-2.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Chain bucket bag</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">49.0 $</h2>
              </div>
            </li>
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/bs-3.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Chain bucket bag</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">35.0 $</h2>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-5 col-span-1">
          <h2 className="text-xl font-semibold border-b-2 border-[#ca1515] max-w-fit">
            BEST SELLER
          </h2>
          <ul className="space-y-5">
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/f-1.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Cotton T-Shirt</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">55.0 $</h2>
              </div>
            </li>
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/f-2.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Zip-pockets pebbled tote briefcase</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">29.0 $</h2>
              </div>
            </li>
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/f-3.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Round leather bag</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">39.0 $</h2>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-5 col-span-1">
          <h2 className="text-xl font-semibold border-b-2 border-[#ca1515] max-w-fit">
            FEATURE
          </h2>
          <ul className="space-y-5">
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/ht-1.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Bow wrap skirt</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">54.0 $</h2>
              </div>
            </li>
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/ht-2.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Metallic earrings</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">49.0 $</h2>
              </div>
            </li>
            <li className="space-x-2 overflow-hidden ">
              <Image
                alt="shop-1"
                src="/img/trend/ht-3.jpg"
                width={90}
                height={90}
                className="inline-block"
              ></Image>
              <div className="inline-block align-top space-y-1">
                <h2 className="text-sm">Flap cross-body bag</h2>
                <h3>
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                  <IoIosStar className="text-yellow-500 inline-block text-sm" />
                </h3>
                <h2 className="font-semibold">35.0 $</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
