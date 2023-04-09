import React, { useState } from "react";
import { IconLeftArrow, IconRightArrow } from "./Icons";
import { thumbnails, imgProducts } from "../data";
import ListImg from "./ListImg";
export default function BoxImg() {
  const [state, setState] = useState(0);
  let count = 0;
  return (
    <section className="lg:flex lg:flex-col lg:gap-8">
      <div className="relative flex items-center lg:hidden">
        <img
          src={imgProducts[state]}
          alt="product"
          className="w-full"
        />
        <button
          aria-label="previous arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-9 h-9 ml-5"
        >
          <IconLeftArrow />
        </button>
        <button
          aria-label="next arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-9 h-9 mr-5 right-0"
        >
          <IconRightArrow />
        </button>
      </div>
      <button className="hidden lg:block rounded-2xl overflow-hidden">
        <img src={imgProducts[state]} alt="product" className="w-full" />
      </button>
      <div className="hidden lg:flex items-center gap-8">
        {thumbnails.map((e, index) => {
          return (
            <ListImg
              thumbnail={e}
              key={index}
              state={{
                state: state,
                setState: setState,
                count: count++,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
