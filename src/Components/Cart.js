import React, { useContext, useEffect, useRef } from "react";
import { CartContext } from "../App";
import { IconDelete } from "./Icons";

const Cart = React.forwardRef((props, ref) => {
  const CartData = useContext(CartContext);
  const content = useRef(null);

  useEffect(() => {
    if (!CartData.cart.quantity) {
      content.current.querySelectorAll("button").forEach((e) => {
        e.addEventListener("focus", () => {
          ref.current.focus();
        });
      });
    }
  }, [CartData.cart.quantity, ref]);
  return (
    <div className="h-full w-full flex flex-col" ref={content}>
      <div className="text-md text-veryDarkBlue font-bold border-b-[1px] border-grayishBlue p-5">
        Cart
      </div>
      <div
        className={`h-full flex justify-center items-center ${
          CartData.cart.quantity > 0 ? "absolute -z-[1]" : ""
        }`}
      >
        <span className="text-darkGrayishBlue font-bold text-sm">
          Your cart is empty.
        </span>
      </div>

      <div
        className={`h-full flex flex-col justify-between p-5 ${
          CartData.cart.quantity > 0 ? "" : "absolute -z-[1]"
        }`}
      >
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
          <button
            onClick={() => {
              CartData.setCart({});
            }}
          >
            <IconDelete />
          </button>
        </div>
        <button className="p-4 flex items-center justify-center gap-4 bg-orange w-full rounded-lg text-white font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
});

export default Cart;
