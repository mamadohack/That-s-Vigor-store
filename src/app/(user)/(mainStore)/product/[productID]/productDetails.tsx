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
import {
  addFavoriteitem,
  sendUserCartinfo,
} from "@/Reduxtoolkitfeature/CartSlice";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useRouter } from "next/navigation";

interface Props {
  productData: any;
  id: number;
}

const ProductDetails: NextPage<Props> = ({ productData, id }) => {
  const { toast } = useToast();
  const [thumbsSwiper, setThumbsSwiper] = useState<swiper | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  // const cart = useSelector((state: RootState) => state.cart);
  const inputQTY = useRef<HTMLInputElement | null>(null);
  const selectQTY = useRef<HTMLSelectElement | null>(null);
  const [state, setState] = useState({ price: productData.price, qty: 1 });
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  const slides = productData.image.data.map((img: any, index: number) => (
    <SwiperSlide key={index}>
      <Image
        src={`http://localhost:1337${img.attributes.url}`}
        // width={350}
        // height={466}
        width={img.attributes.width}
        height={img.attributes.height}
        alt="img"
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        className="object-cover h-auto w-full object-top "
      ></Image>
    </SwiperSlide>
  ));
  const slidesThumb = productData.image.data.map((img: any, index: number) => (
    <SwiperSlide key={index} className="max-h-[100px]">
      {/* <ImageSlide img={img}></ImageSlide> */}
      <Image
        src={`http://localhost:1337${img.attributes.url}`}
        // width={350}
        // height={466}
        width={img.attributes.width}
        height={img.attributes.height}
        alt="img"
        priority
        className="object-contain ms-auto block h-[80px] w-[80px] p-1 "
      ></Image>
    </SwiperSlide>
  ));
  return (
    <main>
      <div className="container mx-auto flex sm:px-10 flex-wrap flex-col lg:flex-row mb-20 my-10">
        <div className="w-full lg:w-1/2 flex h-auto gap-3 sm:px-5 relative x ">
          {/* <SlideNextButton thumbsSwiper={thumbsSwiper}></SlideNextButton>
          <SlidePrevButton thumbsSwiper={thumbsSwiper}></SlidePrevButton> */}
          <Swiper
            onSwiper={setThumbsSwiper}
            // loop={true}
            slidesPerView={4}
            spaceBetween={5}
            autoHeight
            // centeredSlides
            // centeredSlidesBounds
            // spaceBetween={10}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            direction="vertical"
            className={`w-[70px] mySwiper max-h-[400px] `}
          >
            {/* <SlideNextButton thumbsSwiper={thumbsSwiper}></SlideNextButton>
            <SlidePrevButton thumbsSwiper={thumbsSwiper}></SlidePrevButton> */}

            {slidesThumb}
          </Swiper>
          <Swiper
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            // thumbs={{ swiper: thumbsSwiper }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className=" w-[calc(100%-70px)] h-auto relative overflow-hidden "
          >
            {slides}
          </Swiper>
        </div>
        <div className=" w-full lg:w-1/2 lg:ps-5 xl:ps-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              (isAuthenticated &&
                dispatch(
                  sendUserCartinfo({ product: productData, qty: state.qty })
                ).then(() => {
                  toast({
                    className: "bg-rose-600 text-white font-semibold",
                    description: "Item added to your card successfully.",
                  });
                })) ||
                toast({
                  className: "bg-rose-600 text-white font-semibold",
                  description:
                    "you need to log in to your account to add cart !",
                });
              router.push("/signin");
            }}
          >
            <h2 className="text-2xl text-gray-900 font-semibold mt-10">
              {productData.title}
            </h2>
            <div className="flex items-center gap-5 mt-1">
              <span>
                {Array(productData.rating).fill(true).map((r: string, index) => (
                  <IoIosStar
                    key={index}
                    className="text-yellow-500 inline-block"
                  />
                ))}
              </span>
              <span className="text-gray-600 text-sm">153 Order</span>
              {/* <span className="">{productData.condition?.toUpperCase()}</span> */}
            </div>
            <h2 className="font-semibold mt-3 text-lg">{state.price}$</h2>
            <p className="mt-3 text-pretty text-gray-700 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quos fuga voluptas praesentium cumque minus odio debitis at? Quo
              repellat vero nesciunt amet consequuntur omnis, facilis vel
              consequatur nulla est!
            </p>
            <div className="my-3">
              <h2 className="font-semibold mb-3">Size</h2>
              <Size></Size>
            </div>
            {/* <div>colors</div> */}
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
            <div className="flex items-center gap-5 mt-3 ps-3 ">
              <button
                className="p-3 bg-gray-700 text-white font-semibold text-sm rounded-lg hover:opacity-85 duration-200"
                type="submit"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="p-3 bg-rose-700 text-white font-semibold text-sm rounded-lg hover:opacity-85 duration-200"
                onClick={() => {
                  (isAuthenticated &&
                    dispatch(
                      addFavoriteitem({ attributes: productData, id })
                    ).then(() => {
                      toast({
                        className: "bg-rose-600 text-white font-semibold",
                        description: "Item saved successfully.",
                      });
                    })) ||
                    (toast({
                      className: "bg-rose-600 text-white font-semibold",
                      description:
                        "you need to log in to your account to save item !",
                    }) &&
                      router.push("/signin"));
                }}
              >
                Save ❤
              </button>
              {/* <button
                onClick={() => {
                  console.log(cart);
                }}
              >
                read state
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
