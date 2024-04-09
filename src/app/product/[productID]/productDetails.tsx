"use client";
import { NextPage } from "next";
import { ProductListAPiType } from "@/lib/types";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Size from "@/lib/Size";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as swiper } from "swiper/types";
import { Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "@/app/globals.css";
import SlideNextButton from "@/lib/SlideNextButton";
import SlidePrevButton from "@/lib/SlidePrevButton";
import ImageSlide from "@/lib/ImageSlide";

import { sendUserCartinfo } from "@/Reduxtoolkitfeature/CartSlice";
import { useRef, useState } from "react";
interface Props {
  productData: ProductListAPiType;
}

const ProductDetails: NextPage<Props> = ({ productData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<swiper | null>(null);
  const [controlledSwiper, setControlledSwiper] = useState<swiper | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const inputQTY = useRef<HTMLInputElement | null>(null);
  const [state, setState] = useState({ price: productData.price, qty: 1 });
  const slides = productData.image.map((img, index) => (
    <SwiperSlide key={index}>
      <Image
        src={img}
        width={350}
        height={466}
        alt="img"
        className="object-cover h-full w-full object-top "
      ></Image>
    </SwiperSlide>
  ));
  const slidesThumb = productData.image.map((img, index) => (
    <SwiperSlide key={index}>
      {/* <ImageSlide img={img}></ImageSlide> */}
      <Image
        src={img}
        width={350}
        height={466}
        alt="img"
        priority
        className="object-contain ms-auto block h-[80px] w-[80px] "
      ></Image>
    </SwiperSlide>
  ));
  return (
    <main>
      <div className="container mx-auto flex px-10 flex-wrap flex-col md:flex-row mb-20 my-10">
        <div className="w-full md:w-1/2 flex h-[500px] gap-3 px-5 relative x ">
          <SlideNextButton thumbsSwiper={thumbsSwiper}></SlideNextButton>
          <SlidePrevButton thumbsSwiper={thumbsSwiper}></SlidePrevButton>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            direction="vertical"
            className=" w-[70px] mySwiper"
          >
            {slidesThumb}
          </Swiper>

          {/* <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            direction="vertical"
            className="mySwiper w-[30%]"
          >
            {slidesThumb}
          </Swiper> */}
          {/* <Image
            src={productData.image[productData.image.length - productData.id]}
            width={350}
            height={466}
            alt="img"
            className="object-cover rounded-md  mx-auto"
          ></Image> */}
          <Swiper
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className=" w-[calc(100%-70px)] h-auto "
          >
            {slides}
          </Swiper>
        </div>
        <div className=" w-full md:w-1/2 md:ps-5 lg:ps-0">
          <h2 className="text-2xl text-gray-900 font-semibold mt-10">
            {productData.title}
          </h2>
          <div className="flex items-center gap-5 mt-1">
            <span>
              {Array.from(productData.rating).map((r: string, index) => (
                <IoIosStar
                  key={index}
                  className="text-yellow-500 inline-block"
                />
              ))}
            </span>
            <span className="text-gray-600 text-sm">153 Order</span>
            <span className="">{productData.condition?.toUpperCase()}</span>
          </div>
          <h2 className="font-semibold mt-3 text-lg">{state.price}$</h2>
          <p className="mt-3 text-pretty text-gray-700 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos
            fuga voluptas praesentium cumque minus odio debitis at? Quo repellat
            vero nesciunt amet consequuntur omnis, facilis vel consequatur nulla
            est!
          </p>

          <div className="my-3">
            <h2 className="font-semibold mb-3">Size</h2>
            <Size></Size>
          </div>
          <div>colors</div>
          <div className="mt-3">
            <h2 className="font-semibold">Qty</h2>
            <div className="flex items-center flex-start mt-1 ">
              <span
                className="block text-xl cursor-pointer hover:border-rose-400 border p-2 text-center border-transparent duration-150"
                onClick={() => {
                  if (state.qty > 1) {
                    setState((p) => {
                      return {
                        qty: p.qty - 1,
                        price: p.price - productData.price,
                      };
                    });
                  }
                  // if (+inputQTY.current!.value > 1) {
                  //   inputQTY.current!.value = (
                  //     +inputQTY.current!.value - 1
                  //   ).toString();
                  // }
                }}
              >
                <FaMinus />
              </span>
              <input
                type="text"
                name="qty"
                id="qty"
                value={state.qty}
                readOnly
                className="text-center text-lg font-semibold outline-none h-[30px] inline-block w-3/4 max-w-fit"
                pattern="[0-9]{2}"
                ref={inputQTY}
              />
              <span
                className="block text-xl cursor-pointer hover:border-rose-400 border p-2 text-center border-transparent duration-150"
                onClick={() => {
                  setState((p) => {
                    return {
                      qty: p.qty + 1,
                      price: p.price + productData.price,
                    };
                  });
                  // inputQTY.current!.value = (
                  //   +inputQTY.current!.value + 1
                  // ).toString();
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-3 ">
            <button
              className="p-3 bg-gray-700 text-white font-semibold text-sm rounded-lg "
              onClick={() => {
                dispatch(
                  sendUserCartinfo({ product: productData, qty: state.qty })
                );
              }}
            >
              Add to Cart
            </button>
            <button className="p-3 bg-rose-700 text-white font-semibold text-sm rounded-lg ">
              Save ❤
            </button>
            <button
              onClick={() => {
                console.log(cart);
              }}
            >
              read state
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
