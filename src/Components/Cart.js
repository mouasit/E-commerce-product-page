import React, { useContext } from "react";
import { CartContext } from "../App";
import { IconDelete } from "./Icons";

export default function Cart() {
  const CartData = useContext(CartContext);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="text-md text-veryDarkBlue font-bold border-b-[1px] border-grayishBlue p-5">
        Cart
      </div>
      {CartData.cart.quantity > 0 ? (
        <div className="h-full flex flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <img
              src={CartData.cart.picture}
              alt="product"
              className="w-16 h-16 rounded-lg"
            />
            <div className="flex flex-col gap-1">
              <span className="capitalize text-darkGrayishBlue ">
                {CartData.cart.name}
              </span>
              {CartData.cart.quantity > 1 ? (
                <div className="text-darkGrayishBlue">
                  <span className="flex items-center gap-1.5">
                    <span className="flex items-center gap-[.1rem]">
                      <span>$</span>
                      <span>{CartData.cart.price}.00</span>
                    </span>
                    <span>x</span>
                    <span>{CartData.cart.quantity}</span>
                    <span className="flex items-center text-veryDarkBlue font-bold gap-[.1rem]">
                      <span>$</span>
                      <span>
                        {CartData.cart.price * CartData.cart.quantity}.00
                      </span>
                    </span>
                  </span>
                </div>
              ) : (
                <span className="flex items-center text-veryDarkBlue font-bold gap-[.1rem]">
                  <span>$</span>
                  <span>{CartData.cart.price}.00</span>
                </span>
              )}
            </div>
            <button>
              <IconDelete />
            </button>
          </div>
          <button className="p-4 flex items-center justify-center gap-4 bg-orange w-full rounded-lg text-white font-bold">
            Checkout
          </button>
        </div>
      ) : (
        <div className="h-full flex justify-center items-center">
          <span className="text-darkGrayishBlue font-bold text-sm">
            Your cart is empty.
          </span>
        </div>
      )}
    </div>
  );
}
