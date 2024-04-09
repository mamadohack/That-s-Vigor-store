"use client";
import { IoIosArrowUp } from "react-icons/io";
import { Swiper } from "swiper/types";

export default function SlideNextButton({ thumbsSwiper }: { thumbsSwiper: Swiper | null }) {

  return (
    <button
      className="block -top-10 left-10 absolute p-1 hover:opacity-70 duration-100 text-rose-600"
      onClick={() => thumbsSwiper?.slidePrev()}
    >
      <IoIosArrowUp className="text-2xl"></IoIosArrowUp>
    </button>
  );
}
