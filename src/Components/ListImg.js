import React from "react";
import { getIndexElement } from "../helpers";

export default function ListImg(props) {
  return (
    <button
      aria-label="product one"
      className={`border-[3px] ${
        props.state.state === props.state.count
          ? "border-orange"
          : "border-transparent"
      } relative rounded-xl overflow-hidden group`}
      onClick={(e) => {
        let index = getIndexElement(e);
        props.state.setState(index);
      }}
    >
      <img src={props.thumbnail} alt="product" />
      <span
        className={`absolute w-full h-full top-0 left-0 group-hover:bg-white group-focus:bg-white group-hover:opacity-[.5] group-focus:opacity-[.5] ${
          props.state.state === props.state.count ? "bg-white opacity-[.5]" : ""
        }`}
      ></span>
    </button>
  );
}
