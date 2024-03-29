"use client"
import { NextPage } from "next";
import { LiaSearchSolid } from "react-icons/lia";
import { LiaHeart } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className=" container mx-auto px-2 sm:p-0 ">
      <nav className="bg-white border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse py-5"
          >
            <span className="self-center text-[50px] font-semibold whitespace-nowrap cookie-regular ">
              That&apos;s Vigor
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only"></span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full lg:block lg:w-auto py-[31px]"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-none md:bg-transparent md:p-0 border-b-2 border-[#ca1515] text-sm"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                >
                  WOMEN’S
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                >
                  MEN’S
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                >
                  PAGES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent text-sm"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="header-right space-x-5 lg:flex items-center hidden py-[28px]">
            <div className="inline-block align-middle">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded md:p-0 text-xs"
              >
                Login / Register
              </a>
            </div>
            <ul className="inline-block space-x-5">
              <li className="inline-block">
                <LiaSearchSolid className="text-2xl" />
              </li>
              <li className="inline-block">
                <LiaHeart className="text-2xl" />
              </li>
              <li className="inline-block">
                <LiaShoppingBagSolid className="text-2xl" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
