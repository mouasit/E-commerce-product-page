import React, { useState } from "react";
import { IconCart, IconMinus, IconPlus } from "./Icons";

export default function DetailsProduct() {
  const [count, setCount] = useState(0);
  return (
    <div className="px-5 flex flex-col gap-2 pb-10 lg:p-0">
      <span className="uppercase font-bold text-orange tracking-widest mt-8">
        sneaker company
      </span>
      <span className="capitalize font-bold text-[2.2rem] text-veryDarkBlue leading-[2.8rem] mt-2 lg:w-[20rem]">
        fall limited edition sneakers
      </span>
      <p className="text-darkGrayishBlue mt-3 lg:mt-7 oneXl:w-[30rem]">
        Thes low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between lg:flex-col lg:justify-start lg:items-start mt-3">
        <div className="flex gap-4 items-center">
          <span className="font-bold text-[1.8rem] text-veryDarkBlue">
            $125.00
          </span>
          <span className="font-bold text-orange bg-paleOrange w-12 text-center rounded-md">
            50%
          </span>
        </div>
        <span className="text-grayishBlue font-bold line-through">$250.00</span>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6 mt-4 lg:flex-row">
        <div className="relative bg-lightGrayishBlue flex justify-center items-center font-bold p-4 rounded-lg  lg:w-[15rem]">
          {count}
          <button
            className="absolute left-0 ml-5 rounded-full hover:opacity-[.5]"
            onClick={() => {
              if (count > 0) setCount(count - 1);
            }}
          >
            <IconMinus />
          </button>
          <button
            className="absolute right-0 mr-5 rounded-full hover:opacity-[.5]"
            onClick={() => {
              if (count < 5) setCount(count + 1);
            }}
          >
            <IconPlus />
          </button>
        </div>
        <button className="p-4 flex items-center justify-center gap-4 bg-orange w-full rounded-lg text-white font-bold shadow-3xl hover:opacity-[.5]">
          <IconCart fill="fill-white" />
          Add to cart
        </button>
      </div>
    </div>
  );
}
