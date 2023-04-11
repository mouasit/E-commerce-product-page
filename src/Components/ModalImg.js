import React from "react";
import { thumbnails, imgProducts } from "../data";
import { IconLeftArrow, IconRightArrow } from "./Icons";
import ListImg from "./ListImg";
import "animate.css";
import { useRef } from "react";
import { slideLeft, slideRight } from "../helpers";

export default function ModalImg(props) {
  const slide = useRef(null);
  return (
    <section className="flex flex-col">
      <div className="relative flex items-center">
        <div className="overflow-hidden">
          <img
            src={imgProducts[props.state.state]}
            alt="product"
            className="w-full rounded-2xl"
            ref={slide}
          />
        </div>
        <button
          aria-label="previous arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-12 h-12 left-[-1.2rem] group"
          onClick={() => {
            slideLeft(
              slide,
              props.state.state,
              imgProducts.length,
              props.state.setState
            );
          }}
        >
          <IconLeftArrow />
        </button>
        <button
          aria-label="next arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-12 h-12 right-[-1.2rem] group"
          onClick={() => {
            slideRight(
              slide,
              props.state.state,
              imgProducts.length,
              props.state.setState
            );
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
