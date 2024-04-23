"use client"
import { NextPage } from 'next';
import Image from 'next/image';
import { useSwiperSlide } from 'swiper/react';
interface Props {
  img:string;
}

const ImageSlide: NextPage<Props> = ({ img }) => {
    const slider = useSwiperSlide();
  return (
    <div className={`${slider.isActive ? "border border-black":"" }`}>
      <Image
        src={img}
        width={350}
        height={466}
        alt="img"
        priority
        className="object-contain ms-auto block h-[80px] w-[80px] "
      ></Image>
    </div>
  );
};

export default ImageSlide