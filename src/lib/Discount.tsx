"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { IoCarSportSharp } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


interface Props {}

const Discount: NextPage<Props> = ({}) => {
  const [isLoaded, setLoading] = useState(false);
  const d = new Date(Date.now());
  useEffect(() => {
    setLoading(true);
  }, []);
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div suppressHydrationWarning={true} className="mx-auto mt-10">
          {/* {days} day <span className="text-red-500">{hours}</span> hours 
          {minutes} minutes {seconds} seconds */}
          <span className="font-semibold text-3xl">{days}</span>
          <span className="me-5"> Day</span>
          <span className="font-semibold text-3xl">{hours}</span>
          <span className="me-5"> Hour</span>
          <span className="font-semibold text-3xl">{minutes}</span>
          <span className="me-5"> Min</span>
          <span className="font-semibold text-3xl">{seconds}</span>
          <span className=""> Sec</span>
        </div>
      );
    }
  };
  return (
    <>
      <div className="container mx-auto my-20">
        <div className="flex flex-wrap">
          <Image
            alt="discount image"
            src="/img/discount.jpg"
            width={585}
            height={390}
            className="block w-full lg:w-1/2"
          ></Image>
          <div className="text-center w-full lg:w-1/2 bg-gray-100 z-[1]">
            <div className="after:z-[-5] mt-10 lg:mt-20 after:content-[''] after:w-[183px] after:h-[183px] after:bg-white after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 relative">
              <h4 className="text-sm -mb-4 z-[10]">DISCOUNT</h4>
              <h2 className="cookie-regular text-[60px] text-red-700 z-[10]">
                Summer 2024
              </h2>
              <h4 className="-mt-2 z-[10]">
                SALE <span className="text-red-500 font-semibold">50%</span>
              </h4>
            </div>
            {isLoaded && (
              <Countdown
                date={new Date(2024, d.getMonth() + 1, d.getDate())}
                renderer={renderer}
              />
            )}
            <Link
              href="#"
              className="mb-5 mx-auto block mt-5 text-sm sm:text-base font-bold border-b-2 border-[#ca1515] max-w-fit z-[20]"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-10 px-5">
          <div className="relative ps-16 col-span-1">
            <span className="absolute top-0 left-0">
              <IoCarSportSharp className="text-5xl text-red-700" />
            </span>
            <h1 className="font-semibold mb-[2px] ">Free Shipping</h1>
            <p className="text-sm text-gray-600">For all oder over $99</p>
          </div>
          <div className="relative ps-16 col-span-1">
            <span className="absolute top-0 left-0">
              <FaRegMoneyBillAlt className="text-5xl text-red-700" />
            </span>
            <h1 className="font-semibold mb-[2px]">Money Back Guarantee</h1>
            <p className="text-sm text-gray-600">If good have Problems</p>
          </div>
          <div className="relative ps-16 col-span-1">
            <span className="absolute top-0 left-0">
              <MdSupportAgent className="text-5xl text-red-700" />
            </span>
            <h1 className="font-semibold mb-[2px]">Online Support 24/7</h1>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
          <div className="relative ps-16 col-span-1">
            <span className="absolute top-0 left-0">
              <FaHeadphonesSimple className="text-5xl text-red-700" />
            </span>
            <h1 className="font-semibold mb-[2px]">Payment Secure</h1>
            <p className="text-sm text-gray-600">100% secure payment</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-10 px-10 sm:px-0">
        <div className="relative h-[320px] col-span-1">
          <Image
            alt="prod1"
            src="/img/instagram/insta-1.jpg"
            height={320}
            width={320}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-cover -z-10 w-full h-full"
          ></Image>
          <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
            <FaInstagram className="text-3xl " />
            <Link href="#" className="">
              @ That&apos;s Vigor
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] col-span-1">
          <Image
            alt="prod2"
            src="/img/instagram/insta-2.jpg"
            height={320}
            width={320}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-cover -z-10 w-full h-full"
          ></Image>
          <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
            <FaInstagram className="text-3xl " />
            <Link href="#" className="">
              @ That&apos;s Vigor
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] col-span-1">
          <Image
            alt="prod3"
            src="/img/instagram/insta-3.jpg"
            height={320}
            width={320}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-cover -z-10 w-full h-full"
          ></Image>
          <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
            <FaInstagram className="text-3xl " />
            <Link href="#" className="">
              @ That&apos;s Vigor
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] col-span-1">
          <Image
            alt="prod4"
            src="/img/instagram/insta-4.jpg"
            height={320}
            width={320}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-cover -z-10 w-full h-full"
          ></Image>
          <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
            <FaInstagram className="text-3xl " />
            <Link href="#" className="">
              @ That&apos;s Vigor
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] col-span-1">
          <Image
            alt="prod5"
            src="/img/instagram/insta-5.jpg"
            height={320}
            width={320}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-cover -z-10 w-full h-full"
          ></Image>
          <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
            <FaInstagram className="text-3xl " />
            <Link href="#" className="">
              @ That&apos;s Vigor
            </Link>
          </div>
        </div>
        <div className="relative h-[320px] col-span-1">
          <Image
            alt="prod6"
            src="/img/instagram/insta-6.jpg"
            height={320}
            width={320}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-cover -z-10 w-full h-full"
          ></Image>
          <div className="absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
            <FaInstagram className="text-3xl " />
            <Link href="#" className="">
              @ That&apos;s Vigor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
