import { NextPage } from "next";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <section id="footer">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-10">
        <div className="relative h-[320px] col-span-1">
          <Image
            alt="prod1"
            src="/img/instagram/insta-1.jpg"
            fill
            className="sm:object-cover -z-10"
          ></Image>
          <div className="h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
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
            fill
            className="sm:object-cover -z-10"
          ></Image>
          <div className="h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
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
            fill
            className="sm:object-cover -z-10"
          ></Image>
          <div className="h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
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
            fill
            className="sm:object-cover -z-10"
          ></Image>
          <div className="h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
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
            fill
            className="sm:object-cover -z-10"
          ></Image>
          <div className="h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
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
            fill
            className="sm:object-cover -z-10"
          ></Image>
          <div className="h-full w-full opacity-0 hover:opacity-80 bg-white duration-200 flex justify-center items-center flex-col gap-2 ">
            <FaInstagram className="text-3xl " />
            <Link href="#" className="">
              @ That&apos;s Vigor
            </Link>
          </div>
        </div>
      </div>
      <div className="my-10 grid grid-cols-6 px-20 gap-10">
        <div className="col-span-2 ">
          <h2 className="cookie-regular text-[40px]">That&apos;s Vigor</h2>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            aliquid perferendis voluptate beatae ea? Molestias provident sequi
            in a, voluptatem, quia impedit quos velit itaque quaerat quis! Ad,
            itaque harum!
          </p>
          <div className="flex items-center gap-3 mt-5">
            <Image
              src="/img/payment/payment-1.png"
              alt="mscard"
              height={40}
              width={40}
            ></Image>
            <Image
              src="/img/payment/payment-2.png"
              alt="mscard"
              height={40}
              width={40}
            ></Image>
            <Image
              src="/img/payment/payment-3.png"
              alt="mscard"
              height={40}
              width={40}
            ></Image>
            <Image
              src="/img/payment/payment-4.png"
              alt="mscard"
              height={40}
              width={40}
            ></Image>
            <Image
              src="/img/payment/payment-5.png"
              alt="mscard"
              height={40}
              width={40}
            ></Image>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="font-semibold mt-5">ACCOUNT</h2>
          <ul className="space-y-2 text-gray-500 mt-5 text-sm">
            <li>
              <Link href="#">My Account</Link>
            </li>
            <li>
              <Link href="#">Orders Tracking</Link>
            </li>
            <li>
              <Link href="#">Checkout</Link>
            </li>
            <li>
              <Link href="#">Wishlist</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="font-semibold mt-5">QUICK LINKS</h2>
          <ul className="space-y-2 text-gray-500 mt-5 text-sm">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
