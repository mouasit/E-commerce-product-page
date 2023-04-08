import React from "react";
import { IconMinus,IconPlus } from "./Icons";

export default function DetailsProduct() {
  return (
    <div className="px-5 flex flex-col gap-2">
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
      <div>
        <div>0
            <button className="">
                <IconMinus />
            </button>
        </div>
      </div>
    </div>
  );
}
