"use client"
import { NextPage } from "next";
import  Rating  from "react-rating";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className=" max-w-[600px] mx-auto  px-5 space-y-3 mb-10  ">
        <h2 className="text-lg font-semibold">
          Please give us any feedback or advice for how we can serve you better ?
        </h2>
        <textarea
          placeholder="tell us more ..."
          className="w-full max-w-[600px] rounded outline-none p-3 h-48 border focus:border-rose-600 "
        />
        <h2 className="text-lg font-semibold">
          Overall, how would you rate your shopping experience on our website?
        </h2>
        <h2>
          Product Satisfaction:
          <Rating
            className="ms-3 inline-block align-middle"
            initialRating={0}
            emptySymbol={<IoStarOutline className="text-lg text-rose-600" />}
            fullSymbol={<IoStarSharp className="text-lg text-rose-600" />}
          />
        </h2>
        <h2>
          Delivery Satisfaction:
          <Rating
            className="ms-3 inline-block align-middle"
            initialRating={0}
            emptySymbol={<IoStarOutline className="text-lg text-rose-600" />}
            fullSymbol={<IoStarSharp className="text-lg text-rose-600" />}
          />
        </h2>
        <h2>
          Customer Service Satisfaction:
          <Rating
            className="ms-3 inline-block align-middle"
            initialRating={0}
            emptySymbol={<IoStarOutline className="text-lg text-rose-600" />}
            fullSymbol={<IoStarSharp className="text-lg text-rose-600" />}
          />
        </h2>
        <h2>
          Trust and Recommend That&apos;s vigor:
          <Rating
            className="ms-3 inline-block align-middle"
            initialRating={0}
            emptySymbol={<IoStarOutline className="text-lg text-rose-600" />}
            fullSymbol={<IoStarSharp className="text-lg text-rose-600" />}
          />
        </h2>
        <button className="p-3 text-center font-bold text-white bg-rose-600 rounded w-[200px] mx-auto block">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Page;
