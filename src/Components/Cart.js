import React, { useContext } from "react";
import { CartContext } from "../App";

export default function Cart() {
  const CartData = useContext(CartContext);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="text-md text-veryDarkBlue font-bold border-b-[1px] border-grayishBlue p-5">
        Cart
      </div>
      <div className="h-full flex justify-center items-center">
        <span className="text-darkGrayishBlue font-bold text-sm">Your cart is empty.</span>
      </div>
    </div>
  );
}
