import React, { useState } from "react";
import { thumbnails, imgProducts } from "../data";
import { IconLeftArrow, IconRightArrow } from "./Icons";
import ListImg from "./ListImg";

export default function ModalImg(props) {
  return (
    <section className="flex lg:flex-col">
      <div className="relative flex items-center">
        <img
          src={imgProducts[props.state.state]}
          alt="product"
          className="w-full rounded-2xl"
        />
        <button
          aria-label="previous arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-12 h-12 left-[-1.2rem] group"
          onClick={() => {
            if (props.state.state - 1 < 0)
              props.state.setState(imgProducts.length - 1);
            else props.state.setState(props.state.state - 1);
          }}
        >
          <IconLeftArrow />
        </button>
        <button
          aria-label="next arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-12 h-12 right-[-1.2rem] group"
          onClick={() => {
            if (props.state.state + 1 > imgProducts.length - 1)
              props.state.setState(0);
            else props.state.setState(props.state.state + 1);
          }}
        >
          <IconRightArrow />
        </button>
      </div>
      <div className="flex items-center gap-8 relative top-[2rem]">
        {thumbnails.map((e, index) => {
          return (
            <ListImg
              thumbnail={e}
              key={index}
              state={{
                state: props.state.state,
                setState: props.state.setState,
                count: props.state.count++,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
