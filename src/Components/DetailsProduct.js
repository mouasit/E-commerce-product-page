import React from "react";
import { IconCart, IconMinus, IconPlus } from "./Icons";

export default function DetailsProduct() {
  return (
    <div className="px-5 flex flex-col gap-2 pb-5">
      <span className="uppercase font-bold text-orange tracking-widest mt-8">
        sneaker company
      </span>
      <span className="capitalize font-bold text-[2.2rem] text-veryDarkBlue leading-[2.8rem] mt-2">
        fall limited edition sneakers
      </span>
      <p className="text-darkGrayishBlue mt-3">
        Thes low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between mt-3">
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
      <div className="flex flex-col gap-4 mt-4">
        <div className="relative bg-lightGrayishBlue flex justify-center items-center font-bold p-4 rounded-lg  ">
          0
          <button className="absolute left-0 ml-5 rounded-full">
            <IconMinus />
          </button>
          <button className="absolute right-0 mr-5 rounded-full">
            <IconPlus />
          </button>
        </div>
        <button className="p-4 flex items-center justify-center gap-4 bg-orange w-full rounded-lg text-white font-bold shadow">
            <IconCart fill="fill-white"/>
            Add to cart
        </button>
      </div>
    </div>
  );
}
