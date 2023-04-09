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
      } rounded-xl overflow-hidden group`}
      onClick={(e) => {
        let index = getIndexElement(e);
        props.state.setState(index);
      }}
    >
      <img
        src={props.thumbnail}
        alt="product"
        className={` ${
          props.state.state === props.state.count ? "opacity-[.5]" : ""
        } group-hover:opacity-[.5] group-focus:opacity-[.5]`}
      />
    </button>
  );
}
