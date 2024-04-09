"use client";
import { IoIosArrowUp } from "react-icons/io";
import { Swiper } from "swiper/types";

export default function SlidePrevButton({
  thumbsSwiper,
}: {
  thumbsSwiper: Swiper | null;
}) {

  return (
    <button
      className="block -bottom-5 left-10 absolute p-1 hover:opacity-70 duration-100  "
      onClick={() => thumbsSwiper?.slideNext()}
    >
      <IoIosArrowUp className="font-bold rotate-180 text-2xl text-rose-600"></IoIosArrowUp>
    </button>
  );
}
