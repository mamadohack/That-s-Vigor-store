"use client"
import { NextPage } from "next";
import { LiaSearchSolid } from "react-icons/lia";
import { LiaHeart } from "react-icons/lia";
import { LiaShoppingBagSolid } from "react-icons/lia";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div className="bg-red-300 container mx-auto ">
      <nav className="bg-white border-gray-200  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-[83px]">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-5xl font-semibold whitespace-nowrap clicker-script-regular ">
              That&apos;s Vigor
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-none md:bg-transparent md:p-0 border-b-2 border-[#ca1515]"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent"
                >
                  WOMEN’S
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent"
                >
                  MEN’S
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent"
                >
                  PAGES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 border-b-2 duration-200 ease-in-out hover:border-[#ca1515] border-transparent"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="header-right space-x-5 flex items-center">
            <div className="inline-block">
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
