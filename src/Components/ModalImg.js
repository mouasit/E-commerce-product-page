import React, { useState } from "react";
import { thumbnails, imgProducts } from "../data";
import { IconLeftArrow, IconRightArrow } from "./Icons";
import ListImg from "./ListImg";
import "animate.css";
import { useRef } from "react";

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
            if (props.state.state - 1 < 0) {
              slide.current.classList.remove("slide-left");
              slide.current.classList.remove("slide-right");
              setTimeout(() => {
                slide.current.classList.add("slide-right");
                props.state.setState(imgProducts.length - 1);
              }, 1);
            } else {
              slide.current.classList.remove("slide-left");
              slide.current.classList.remove("slide-right");
              setTimeout(() => {
                slide.current.classList.add("slide-right");
                props.state.setState(props.state.state - 1);
              }, 1);
            }
          }}
        >
          <IconLeftArrow />
        </button>
        <button
          aria-label="next arrow"
          className="absolute bg-white flex justify-center items-center rounded-full w-12 h-12 right-[-1.2rem] group"
          onClick={() => {
            if (props.state.state + 1 > imgProducts.length - 1) {
              slide.current.classList.remove("slide-left");
              slide.current.classList.remove("slide-right");
              setTimeout(() => {
                slide.current.classList.add("slide-left");
                props.state.setState(0);
              }, 1);
            } else {
              slide.current.classList.remove("slide-left");
              slide.current.classList.remove("slide-right");
              setTimeout(() => {
                slide.current.classList.add("slide-left");
                props.state.setState(props.state.state + 1);
              }, 1);
            }
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
