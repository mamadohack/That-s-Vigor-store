"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Countdown, { CountdownApi } from "react-countdown";

interface Props {}

const Discount: NextPage<Props> = ({}) => {
  const [isLoaded, setLoading] = useState(false);
  const d = new Date(Date.now());
  useEffect(() => {
    setLoading(true);
  },[])
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
          <div className="after:z-[-5] mt-20 after:content-[''] after:w-[183px] after:h-[183px] after:bg-white after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 relative">
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
            className="mx-auto block mt-5 text-sm sm:text-base font-bold border-b-2 border-[#ca1515] max-w-fit z-[20]"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discount;
