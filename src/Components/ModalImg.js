import React, { useState } from "react";
import { thumbnails, imgProducts } from "../data";
import { IconLeftArrow, IconRightArrow } from "./Icons";
import ListImg from "./ListImg";

export default function ModalImg() {
  const [state, setState] = useState(0);
  let count = 0;

  return (
    <section className="lg:flex lg:flex-col lg:gap-8">
      <div className="relative flex items-center">
        <img
          src={imgProducts[state]}
          alt="product"
          className="w-full rounded-2xl"
        />
        <button
          aria-label="previous arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-12 h-12 left-[-1.2rem] group"
        >
          <IconLeftArrow />
        </button>
        <button
          aria-label="next arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-12 h-12 right-[-1.2rem] group"
        >
          <IconRightArrow />
        </button>
      </div>
      {/* <div className="hidden lg:flex items-center gap-8">
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
        </div> */}
    </section>
  );
}
