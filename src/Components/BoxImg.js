import React from "react";
import productOne from "../assets/images/image-product-1.jpg";
import productTwo from "../assets/images/image-product-2.jpg";
import { IconLeftArrow, IconRightArrow } from "./Icons";
export default function BoxImg() {
  return (
    <section>
      <div className="relative flex items-center">
        <img src={productOne} alt="product thumbnail" className="w-full" />
        <button
          aria-label="previous arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-9 h-9 ml-5 lg:hidden"
        >
          <IconLeftArrow />
        </button>
        <button
          aria-label="next arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-9 h-9 mr-5 right-0 lg:hidden"
        >
          <IconRightArrow />
        </button>
      </div>
      <div>
        <button aria-label="productOne"></button>
      </div>
    </section>
  );
}
