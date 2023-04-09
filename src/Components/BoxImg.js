import React from "react";
import productOne from "../assets/images/image-product-1.jpg";
import proneThumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import prtwoThumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import prthreeThumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import prfourThumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import { IconLeftArrow, IconRightArrow } from "./Icons";
export default function BoxImg() {
  return (
    <section className="lg:flex lg:flex-col lg:gap-8">
      <div className="relative flex items-center">
        <img src={productOne} alt="product" className="w-full lg:rounded-xl" />
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
      <div className="hidden lg:flex items-center gap-8">
        <button aria-label="product one" className="">
          <img src={proneThumbnail} alt="product one" className="border-2 border-orange rounded-xl"/>
        </button>
        <button aria-label="product two">
          <img src={prtwoThumbnail} alt="product two" />
        </button>
        <button aria-label="product three">
          <img src={prthreeThumbnail} alt="product three" />
        </button>
        <button aria-label="product four">
          <img src={prfourThumbnail} alt="product four" />
        </button>
      </div>
    </section>
  );
}
